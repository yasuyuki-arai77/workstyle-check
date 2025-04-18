// pages/index.js
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
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
      
      <div className="p-6 max-w-4xl mx-auto space-y-12">

        {/* ヒーローセクション */}
        <section className="text-center space-y-4 mt-10">
          <h1 className="text-3xl font-bold">あなたに合った働き方、診断してみませんか？</h1>
          <p className="text-gray-600">エゴグラム or MBTI で診断して、あなたにぴったりの仕事を見つけよう！</p>
          <div className="flex justify-center gap-4 mt-6">
            <Link href="/question">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow">
                質問に答えて診断する
              </button>
            </Link>
            <Link href="/mbti-check">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow">
                MBTIから診断する
              </button>
            </Link>
          </div>
        </section>

        {/* 特徴セクション */}
        <section className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white rounded shadow">
            <h2 className="text-lg font-bold mb-2">🎯 パーソナライズ診断</h2>
            <p>あなたの性格に合った働き方を的確に提案します。</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h2 className="text-lg font-bold mb-2">⚙️ ワンストップ求人導線</h2>
            <p>診断結果に応じて、案件情報もそのまま表示！</p>
          </div>
          <div className="p-6 bg-white rounded shadow">
            <h2 className="text-lg font-bold mb-2">🚀 気軽に診断可能</h2>
            <p>たった20問 or MBTIタイプを入力するだけ。</p>
          </div>
        </section>

        {/* FAQセクション */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold">よくある質問</h2>
          <div>
            <p className="font-semibold">Q. MBTIを知らない場合は？</p>
            <p className="text-gray-700">→ 質問から診断できるのでご安心ください！</p>
          </div>
          <div>
            <p className="font-semibold">Q. 登録やログインは必要？</p>
            <p className="text-gray-700">→ 一切不要。誰でも無料で利用できます！</p>
          </div>
        </section>

        {/* フッター */}
        <footer className="text-center text-sm text-gray-500 py-6 border-t mt-10">
          © 2025 Workstyle Check - Powered by あらやん & 相棒
        </footer>
      </div>
    </>
  );
}
