// pages/mbti-result.js
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function MBTIResult() {
  const router = useRouter()
  const { type } = router.query
  const [workstyle, setWorkstyle] = useState(null)

  useEffect(() => {
    if (!type) return

    fetch('/data/mbti_workstyle_map.json')
      .then(res => res.json())
      .then(data => {
        const match = data[type.toUpperCase()]
        if (match) {
          setWorkstyle(match)
        } else {
          setWorkstyle(null)
        }
      })
  }, [type])

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "あなたのMBTI診断結果",
        text: "この診断、当たってるかも？",
        url: window.location.href,
      }).catch((error) => console.error("シェア失敗:", error));
    } else {
      alert("この機能はスマホでのみ利用可能です。");
    }
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">MBTI診断結果</h1>
      {type ? <p className="mb-6">あなたのMBTIタイプ：<strong>{type.toUpperCase()}</strong></p> : <p>タイプが指定されていません。</p>}

      {workstyle ? (
        <table className="w-full table-auto border border-gray-300">
          <thead>
            <tr className="bg-green-100">
              <th className="border px-4 py-2">働き方</th>
              <th className="border px-4 py-2">適性</th>
              <th className="border px-4 py-2">リンク</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(workstyle).map(([key, value]) => (
              <tr key={key}>
                <td className="border px-4 py-2">{convertKeyToLabel(key)}</td>
                <td className="border px-4 py-2">{value ? '〇' : '―'}</td>
                <td className="border px-4 py-2">
                  {value && (
                    <a href={`/${key}`} target="_blank">
                      <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
                        仕事を探す
                      </button>
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        type && <p>該当する診断データが見つかりませんでした。</p>
      )}

      <div className="text-center mt-10 space-x-4">
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={handleShare}
        >
          📤 シェアする
        </button>
        <Link href="/">
          <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">
            🏠 メインへ
          </button>
        </Link>
      </div>
    </div>
  )
}

function convertKeyToLabel(key) {
  switch (key) {
    case 'freelance': return 'フリーランス'
    case 'tenshoku': return '正社員（転職）'
    case 'haken': return '派遣'
    case 'fukugyo': return '副業'
    default: return key
  }
}
