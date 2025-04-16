import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { calculateDiagnosisCode, getWorkstyleFit } from '../utils/diagnosis';

export default function ResultPage() {
  const router = useRouter();
  const { answers } = router.query;

  const [diagnosisCode, setDiagnosisCode] = useState("");
  const [workstyle, setWorkstyle] = useState(null);
  const [summaryText, setSummaryText] = useState("");

useEffect(() => {
  if (!answers) return;

  const parsedAnswers = answers.split(',').map(Number);
  const code = calculateDiagnosisCode(parsedAnswers);
  setDiagnosisCode(code);

  const grades = {
    CP: code[0],
    NP: code[1],
    A: code[2],
    FC: code[3],
    AC: code[4],
  };
  const result = getWorkstyleFit(grades);
  setWorkstyle(result);

  // GA4 イベント送信（診断コード）
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "diagnosis_result", {
      event_category: "Diagnosis",
      event_label: code,
    });

    Object.entries(result).forEach(([key, value]) => {
      if (value) {
        window.gtag("event", "workstyle_fit", {
          event_category: "Workstyle",
          event_label: key,
        });
      }
    });
  }

  // 要約を読み込み
  fetch("/data/result_summary.json")
    .then(res => res.json())
    .then(data => {
      const match = data.find(d => d.code === code);
      if (match) {
        setSummaryText(match.summary);
      }
    });
}, [answers]);


  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">診断結果</h1>

      {diagnosisCode && (
        <div className="mb-6 text-center">
          <p className="text-lg">あなたの診断コード：</p>
          <p className="text-2xl font-mono font-bold text-blue-600">{diagnosisCode}</p>
          {summaryText && (
            <p className="mt-4 text-gray-700 text-base whitespace-pre-wrap">{summaryText}</p>
          )}
        </div>
      )}

      {workstyle && (
        <div className="overflow-x-auto mb-6">
          <table className="w-full border border-gray-300 text-sm md:text-base">
            <thead className="bg-green-100">
              <tr>
                <th className="border px-4 py-2">働き方</th>
                <th className="border px-4 py-2">適性</th>
                <th className="border px-4 py-2">リンク</th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "正社員", key: "tenshoku", path: "/fulltime" },
                { label: "フリーランス", key: "freelance", path: "/freelance" },
                { label: "派遣", key: "haken", path: "/haken" },
                { label: "副業", key: "fukugyo", path: "/sidejob" },
              ].map(({ label, key, path }, i) => (
                <tr key={key} className={i % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-gray-100"}>
                  <td className="border border-gray-300 px-4 py-3 text-sm text-gray-800">{label}</td>
                  <td className="border border-gray-300 px-4 py-3 text-center text-lg">
                    {workstyle[key] ? "〇" : "ー"}
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    {workstyle[key] && (
                      <button
                        onClick={() => window.open(path, "_blank")}
                        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded shadow"
                      >
                        仕事を探す
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
