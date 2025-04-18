import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function MBTICheck() {
  const [selected, setSelected] = useState('');
  const router = useRouter();

  const mbtiOptions = [
    { code: "INTJ", label: "INTJ - 建築家" },
    { code: "INTP", label: "INTP - 論理学者" },
    { code: "ENTJ", label: "ENTJ - 指揮官" },
    { code: "ENTP", label: "ENTP - 討論者" },
    { code: "INFJ", label: "INFJ - 提唱者" },
    { code: "INFP", label: "INFP - 仲介者" },
    { code: "ENFJ", label: "ENFJ - 主人公" },
    { code: "ENFP", label: "ENFP - 活動家" },
    { code: "ISTJ", label: "ISTJ - 管理者" },
    { code: "ISFJ", label: "ISFJ - 擁護者" },
    { code: "ESTJ", label: "ESTJ - 幹部" },
    { code: "ESFJ", label: "ESFJ - 領事官" },
    { code: "ISTP", label: "ISTP - 巨匠" },
    { code: "ISFP", label: "ISFP - 冒険家" },
    { code: "ESTP", label: "ESTP - 起業家" },
    { code: "ESFP", label: "ESFP - エンターテイナー" },
  ];

  const handleSubmit = () => {
    if (selected) {
      router.push(`/mbti-result?type=${selected}`);
    }
  };

  return (
    <>
      <Head>
        <title>あなたに合った働き方診断 - Workstyle Check</title>
        <meta name="description" content="20問のエゴグラム or MBTI診断で、あなたにぴったりな働き方を提案します！" />
        <meta property="og:title" content="あなたに合った働き方診断" />
        <meta property="og:description" content="性格診断で、あなたにぴったりな仕事を見つけよう！" />
        <meta property="og:image" content="https://workstyle-check.vercel.app/ogp.png" />
        <meta property="og:url" content="https://workstyle-check.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="p-6 max-w-md mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-center">MBTIタイプを選択してください</h1>

        <select
          className="w-full p-3 border rounded"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="">-- MBTIタイプを選択 --</option>
          {mbtiOptions.map((option) => (
            <option key={option.code} value={option.code}>
              {option.label}
            </option>
          ))}
        </select>

        <button
          className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
          disabled={!selected}
          onClick={handleSubmit}
        >
          診断結果を見る
        </button>
      </div>
    </>
  );
}
