import { useState } from 'react';

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

export default function Home() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 font-sans">
      <h1 className="text-2xl font-bold mb-6">自分に合った働き方診断</h1>
      {!submitted ? (
        <div>
          {questions.map((q) => (
            <div key={q.id} className="mb-4">
              <p className="mb-2">{q.text}</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((val) => (
                  <button
                    key={val}
                    className={`px-3 py-1 rounded border ${answers[q.id] === val ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
                    onClick={() => handleAnswer(q.id, val)}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button
            className="mt-6 px-4 py-2 bg-green-600 text-white rounded"
            onClick={handleSubmit}
          >
            診断結果を見る
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-semibold mb-4">診断結果（仮）</h2>
          <p>※ここに診断ロジックと提案を今後実装していきます。</p>
        </div>
      )}
    </div>
  );
}