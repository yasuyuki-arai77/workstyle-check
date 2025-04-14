import { useState } from "react";
import { useRouter } from "next/router";

const questions = [
  // CP（厳しさ・ルール重視）
  { id: 1, text: "ルールを破る人を見ると注意したくなる。" },
  { id: 2, text: "遅刻や期限の遅れに厳しい方だ。" },
  { id: 3, text: "ミスにはしっかりと責任を取るべきだと思う。" },
  { id: 4, text: "甘えは社会に通用しないと思う。" },

  // NP（思いやり・保護）
  { id: 5, text: "困っている人がいると放っておけない。" },
  { id: 6, text: "誰かの成功を素直に喜べる。" },
  { id: 7, text: "後輩や部下の失敗をカバーすることが多い。" },
  { id: 8, text: "相談されると嬉しく感じる。" },

  // A（論理・分析）
  { id: 9, text: "物事は感情よりデータで判断したい。" },
  { id: 10, text: "感情に流されず冷静に対処する自信がある。" },
  { id: 11, text: "問題が起きたら構造から原因を探る。" },
  { id: 12, text: "人の意見よりも、事実を重視する。" },

  // FC（自由・創造）
  { id: 13, text: "突発的な行動をすることが多い。" },
  { id: 14, text: "型にはまった仕事より、自分のやり方で進めたい。" },
  { id: 15, text: "面白いと思ったらすぐにやってみたくなる。" },
  { id: 16, text: "自由な雰囲気の職場が好きだ。" },

  // AC（協調・従順）
  { id: 17, text: "周りの空気を読んで動くことが多い。" },
  { id: 18, text: "人からのお願いを断るのが苦手だ。" },
  { id: 19, text: "意見があっても控えることがある。" },
  { id: 20, text: "衝突を避けて穏便に済ませたいと思う。" }
];

export default function QuestionPage() {
  const [answers, setAnswers] = useState(Array(20).fill(3)); // 初期値3
  const router = useRouter();

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (answers.includes(null)) {
      alert("全ての質問に答えてください");
      return;
    }
    router.push(`/result?answers=${answers.join(",")}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">エゴグラム診断（仮）</h1>

      {questions.map((q, index) => (
        <div key={q.id} className="mb-4">
          <p className="mb-1">{q.id}. {q.text}</p>
          <div className="flex gap-4">
            {[1, 2, 3, 4, 5].map((num) => (
              <label key={num}>
                <input
                  type="radio"
                  name={`q-${q.id}`}
                  value={num}
                  checked={answers[index] === num}
                  onChange={() => handleChange(index, num)}
                />
                {num}
              </label>
            ))}
          </div>
        </div>
      ))}

      <button
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={handleSubmit}
      >
        診断する
      </button>
    </div>
  );
}
