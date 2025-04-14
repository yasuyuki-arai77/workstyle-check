import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { calculateDiagnosisCode, getWorkstyleFit } from '../utils/diagnosis';

export default function ResultPage() {
  const router = useRouter();
  const { answers } = router.query;

  const [diagnosisCode, setDiagnosisCode] = useState('');
  const [workstyle, setWorkstyle] = useState(null);

  useEffect(() => {
    if (!answers) return;

    const parsedAnswers = answers.split(',').map(Number);
    const code = calculateDiagnosisCode(parsedAnswers);
    setDiagnosisCode(code);

    const grades = {
      CP: code[0],
      NP: code[1],
      A:  code[2],
      FC: code[3],
      AC: code[4],
    };

    const result = getWorkstyleFit(grades);
    setWorkstyle(result);
  }, [answers]);

  return (
    <div className="p-8 max-w-xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">診断結果</h1>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 border border-blue-100">
        <p className="text-lg mb-2">あなたの診断コード：</p>
        <p className="text-2xl font-mono font-bold text-center text-blue-600">{diagnosisCode}</p>
      </div>

      {workstyle && (
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <p className="text-xl font-semibold mb-4 text-gray-700">向いている働き方</p>
          <ul className="space-y-2">
            <li>フリーランス: <span className={workstyle.freelance ? "text-green-600" : "text-red-500"}>{workstyle.freelance ? "✅ 向いてる" : "❌ 向いてない"}</span></li>
            <li>派遣: <span className={workstyle.haken ? "text-green-600" : "text-red-500"}>{workstyle.haken ? "✅ 向いてる" : "❌ 向いてない"}</span></li>
            <li>転職（正社員）: <span className={workstyle.tenshoku ? "text-green-600" : "text-red-500"}>{workstyle.tenshoku ? "✅ 向いてる" : "❌ 向いてない"}</span></li>
            <li>副業: <span className={workstyle.fukugyo ? "text-green-600" : "text-red-500"}>{workstyle.fukugyo ? "✅ 向いてる" : "❌ 向いてない"}</span></li>
          </ul>
        </div>
      )}
    </div>
  );

}

// --- ロジック部は今まで通りでOK --- //

const factorMap = {
  CP: [1, 2, 3, 4],
  NP: [5, 6, 7, 8],
  A:  [9, 10, 11, 12],
  FC: [13, 14, 15, 16],
  AC: [17, 18, 19, 20],
};

function scoreToGrade(score) {
  if (score >= 4.0) return "A";
  if (score >= 2.5) return "B";
  return "C";
}