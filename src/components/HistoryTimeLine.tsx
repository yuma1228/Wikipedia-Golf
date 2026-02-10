type Props = {
  history: string[];
};

export const HistoryTimeline = ({ history }: Props) => {
  return (
    <div className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-gray-200 shadow-sm">
      <h3 className="text-lg font-bold text-gray-700 mb-6 flex items-center gap-2">
        <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-.447-.894L15 7m0 13V7" />
        </svg>
        あなたの軌跡
      </h3>

      <div className="relative pl-4 border-l-2 border-gray-200 space-y-8 ml-2">
        {history.map((page, index) => {
          const isStart = index === 0;
          const isGoal = index === history.length - 1;

          return (
            <div key={index} className="relative pl-6">
              {/* ドット（丸印）のデザイン */}
              <div
                className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white shadow-sm
                  ${isStart ? "bg-blue-500 ring-4 ring-blue-100" :
                    isGoal ? "bg-yellow-500 ring-4 ring-yellow-100 animate-pulse" :
                    "bg-gray-300"}
                `}
              ></div>

              {/* テキスト部分 */}
              <div className="flex flex-col">
                <span className={`text-xs font-bold uppercase tracking-wider mb-1
                  ${isStart ? "text-blue-500" : isGoal ? "text-yellow-600" : "text-gray-400"}
                `}>
                  {isStart ? "START" : isGoal ? "GOAL" : `STEP ${index}`}
                </span>
                <span className={`text-lg font-medium ${isGoal ? "text-2xl font-bold text-gray-900" : "text-gray-700"}`}>
                  {page}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};