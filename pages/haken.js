// pages/haken.js

import Head from 'next/head';
export default function HakenPage() {
  const affiliates = [
    {
      name: "ＫＯＳＭＯ（コスモ）",
      features: "コールセンター・事務に強い！人材派遣のパイオニア。",
      suitable: "未経験から始めたい人 / 丁寧なサポートを受けたい人",
      link: "https://px.a8.net/svt/ejp?a8mat=453ART+7KOJUA+59SS+NVP2P",
    },
    {
      name: "派遣なび",
      features: "ファッション・アパレル系に特化した派遣求人サイト。",
      suitable: "おしゃれな環境で働きたい人 / 接客経験を活かしたい人",
      link: "https://t.afi-b.com/visit.php?a=i5582c-h179065B&p=r951957E",
    },
    {
      name: "綜合キャリアオプション",
      features: "製造・軽作業など全国対応！高時給案件も多数。",
      suitable: "すぐに働きたい人 / 地方在住の人",
      link: "https://t.afi-b.com/visit.php?a=N14691l-y481176q&p=r951957E",
    },
  ];

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
      <div className="p-6 md:p-10 max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center text-blue-700">
          あなたに合った派遣のお仕事はこちら
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {affiliates.map((a, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-lg transition">
              <h2 className="text-xl font-semibold text-blue-700 mb-2">{a.name}</h2>
              <p className="text-gray-700 text-sm mb-2">{a.features}</p>
              <p className="text-gray-500 text-xs mb-4">👤 {a.suitable}</p>
              <a
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm font-medium"
              >
                登録する
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
