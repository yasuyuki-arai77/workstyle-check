// pages/sidejob.js

import Head from 'next/head';
export default function SidejobPage() {
  const affiliates = [
    {
      name: "ココナラ",
      features: "スキルを活かして副業・フリーランス！出品型マーケット。",
      suitable: "デザイン / ライティング / 占いなど特技がある人",
      link: "https://px.a8.net/svt/ejp?a8mat=453CBW+BBTY5U+2PEO+6T75T",
    },
    {
      name: "クラウディア",
      features: "在宅ワーク・副業に強いクラウドソーシングサイト。",
      suitable: "自宅で作業したい / 初心者OKの案件を探している人",
      link: "https://px.a8.net/svt/ejp?a8mat=453CBW+BA1NCI+4F8I+BYLJM",
    },
    {
      name: "IBJ（結婚相談所の副業）",
      features: "副業で仲人デビュー！婚活ビジネスに関わりたい人へ。",
      suitable: "人の話を聞くのが好き / 副業で社会貢献したい人",
      link: "https://px.a8.net/svt/ejp?a8mat=453CBW+B7NWXE+FOG+4N036P",
    },
    {
      name: "コールノマド",
      features: "テレアポ副業のマッチング。営業経験が活かせる！",
      suitable: "スキマ時間を使いたい / 営業に自信がある人",
      link: "https://px.a8.net/svt/ejp?a8mat=453CBW+B8US4Y+3SPO+CEKE01",
    },
    {
      name: "Saleshub",
      features: "企業の人脈紹介で報酬がもらえる！営業不要の副業。",
      suitable: "人脈に自信がある人 / 手軽に副収入を得たい人",
      link: "https://px.a8.net/svt/ejp?a8mat=453CBW+B3HVOY+41RS+60H7M",
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
          あなたに合った副業はこちら
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
