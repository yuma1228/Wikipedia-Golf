export const GoalHeader = () => {
  return (
    <div className="text-center space-y-4 animate-bounce-slow">
      <div className="inline-block p-4 rounded-full bg-yellow-100 mb-2 shadow-lg">
        <span className="text-6xl">🏆</span>
      </div>
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 tracking-tight">
        GOAL REACHED!
      </h1>
      <p className="text-gray-500 font-medium">おめでとうございます！ゴールに到達しました。</p>
    </div>
  );
};