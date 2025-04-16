// pages/freelance.js

export default function FreelancePage() {
  const affiliates = [
    {
      name: "Midworks",
      features: "フリーランスでも社会保障つき。正社員並みの安心感。",
      suitable: "初めてのフリーランス / 安定志向の人",
      link: "https://px.a8.net/svt/ejp?a8mat=4539ZZ+AL1FXU+3TVC+BYDTT",
    },
    {
      name: "IT求人ナビ フリーランス",
      features: "中上級者向け高単価案件。キャリアアップ向き。",
      suitable: "経験3年以上 / 単価重視の人",
      link: "https://px.a8.net/svt/ejp?a8mat=4539ZZ+A6R1F6+4LXM+5YJRM",
    },
    {
      name: "ＰＥ−ＢＡＮＫ",
      features: "全国対応 / 長期契約に強い / 地方にも案件あり",
      suitable: "地方在住 / 安定稼働したい人",
      link: "https://px.a8.net/svt/ejp?a8mat=4539ZZ+9QOC36+3SLI+5YRHE",
    },
  ];

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center text-blue-700">
        あなたに合ったフリーランス案件はこちら
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
  );
}
