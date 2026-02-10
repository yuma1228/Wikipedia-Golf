"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GoalHeader } from "@/components/GoalHeader";
import { ScoreCard } from "@/components/ScoreCard";
import { HistoryTimeline } from "@/components/HistoryTimeLine";

export default function HistoryPage() {
  const router = useRouter();
  const [history, setHistory] = useState<string[]>([]);
  const [steps, setSteps] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("wikiHistory");
    if (saved) {
      try {
        const parsedHistory = JSON.parse(saved);
        setHistory(parsedHistory);
        setSteps(parsedHistory.length - 1); 
      } catch (e) {
        console.error("履歴の読み込みに失敗しました", e);
      }
    }
  }, []);



  // シェアURL作成
  const shareUrl = `https://twitter.com/intent/tweet?text=Wikipedia Golfを${steps}手でクリアしました！%0Aスタート: ${history[0]} → ゴール: ${history[history.length - 1]}%0A&hashtags=WikiGolf`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        
        {/* ゴールヘッダー */}
        <GoalHeader />

        {/* スコアカード */}
        <ScoreCard 
          steps={steps} 
          shareUrl={shareUrl} 
          onHomeClick={() => router.push("/")} 
        />

        {/* タイムライン */}
        <HistoryTimeline history={history} />
        
      </div>
    </div>
  );
}