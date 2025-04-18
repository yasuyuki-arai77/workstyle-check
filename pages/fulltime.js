// pages/fulltime.js

import Head from 'next/head';
export default function FulltimePage() {
  const affiliates = [
    {
      name: "社内SE転職ナビ",
      features: "エンジニア専門の転職支援。社内SEを目指す人に特化！",
      suitable: "エンジニア経験者 / 安定志向の人",
      link: "https://px.a8.net/svt/ejp?a8mat=453CBW+402X6A+3IZO+I4NDE",
    },
    {
      name: "日本ドライバー人材センター",
      features: "ドライバー専門の正社員求人。未経験OKの案件も多数。",
      suitable: "運転が好き / 安定して働きたい人",
      link: "https://px.a8.net/svt/ejp?a8mat=453CBW+4QVFEA+5NM0+601S1",
    },
    {
      name: "HR CAREER AGENT",
      features: "営業・販売・サービス業に特化した転職エージェント。",
      suitable: "異業種からの転職 / サポートを受けたい人",
      link: "https://af.moshimo.com/af/c/click?a_id=4992058&p_id=6422&pc_id=18145&pl_id=82412",
    },
    {
      name: "ココカラ・接客プロ",
      features: "接客・サービス業に特化。プロを目指す人の転職支援！",
      suitable: "接客経験あり / スキルを活かしたい人",
      link: "https://af.moshimo.com/af/c/click?a_id=4992067&p_id=6312&pc_id=17794&pl_id=81202",
    },
    {
      name: "ココカラ・ワーク",
      features: "接客・販売・飲食などの業界に強い転職支援サービス。",
      suitable: "人と関わる仕事が好き / 職場環境を重視したい人",
      link: "https://af.moshimo.com/af/c/click?a_id=4992068&p_id=6314&pc_id=17798&pl_id=81207",
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
          あなたに合った正社員転職はこちら
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
