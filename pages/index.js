import { useState } from 'react';

const questions = [
  { id: 1, text: '職場でルールを破る人を見ると、強く注意したくなる。' },
  { id: 2, text: '困っている同僚がいたら、自分の作業を止めてでも助ける。' },
  { id: 3, text: '判断を下す前に、まず事実とデータを集める。' },
  { id: 4, text: '突然思いついたアイデアをすぐ試したくなる。' },
  { id: 5, text: 'チームの雰囲気を壊さないよう、意見を言うのを控えることがある。' }
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