import Link from 'next/link';
import { GameForm } from './GameForm';

export const Hero = () => {
  return (
    <main className="flex flex-col items-center justify-center flex-1 px-4 text-center py-20 w-full">
      {/* タイトルエリア */}
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-300">
          Wikipedia Golf
        </span>
      </h1>

      {/* 説明文 */}
      <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-lg leading-relaxed">
        Wikipediaのリンクをたどり、
        <br className="hidden md:block" />
        最短ルートでゴールを目指そう。
      </p>

      {/* ゲームモード選択エリア (レスポンシブ対応: 横並びか縦並びか) */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl items-start justify-center">
        
        {/* 左側: ランダムモード */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 w-full max-w-md h-full flex flex-col justify-center">
          <h2 className="text-gray-800 font-bold mb-4">すぐに遊ぶ</h2>
          <p className="text-gray-500 text-sm mb-6">お題はランダムで決定されます。</p>
          <Link 
            href="/Golf" 
            className="block w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-bold text-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 text-center"
          >
            🎲 ランダムでスタート
          </Link>
        </div>

        {/* 右側: 指定モード (GameFormコンポーネント) */}
        <GameForm />

      </div>
    </main>
  );
};