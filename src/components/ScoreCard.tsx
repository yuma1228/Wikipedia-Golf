type Props = {
  steps: number;
  shareUrl: string;
  onHomeClick: () => void;
};

export const ScoreCard = ({ steps, shareUrl, onHomeClick }: Props) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 text-center relative overflow-hidden">
      {/* 上部のグラデーションバー */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-500 to-red-400"></div>

      <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mb-2">Total Steps</p>
      
      <div className="flex items-baseline justify-center gap-2">
        <span className="text-6xl font-black text-gray-800">{steps}</span>
        <span className="text-xl text-gray-500 font-bold">手でクリア</span>
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <a
          href={shareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition shadow-md hover:shadow-lg"
        >
          {/* Xアイコン */}
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          結果をポスト
        </a>
        <button
          onClick={onHomeClick}
          className="px-6 py-3 bg-gray-100 text-gray-700 rounded-full font-bold hover:bg-gray-200 transition"
        >
          トップへ戻る
        </button>
      </div>
    </div>
  );
};