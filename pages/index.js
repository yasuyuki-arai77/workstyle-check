import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/question");
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">自分に合った働き方診断</h1>
      <p className="mb-6">20問に答えるだけで、あなたに合った働き方が見えてきます。</p>
      <button
        onClick={handleStart}
        className="px-6 py-3 bg-blue-600 text-white rounded"
      >
        診断をはじめる
      </button>
    </div>
  );
}
