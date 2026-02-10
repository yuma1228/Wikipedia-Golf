"use client";

import { useEffect, useState } from "react";
import { WikiFrame } from "@/components/WikiFrame"; // 既存のWikiFrameを再利用

type Props = {
  goalTitle: string;
  onClose: () => void;
};

export const GoalModal = ({ goalTitle, onClose }: Props) => {
  const [html, setHtml] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(() => {
    const fetchGoal = async () => {
      if (!goalTitle) return;
      
      try {
        setLoading(true);
        setError(false);
        

        const res = await fetch(`https://ja.wikipedia.org/api/rest_v1/page/html/${encodeURIComponent(goalTitle)}`);
        
        if (!res.ok) {
          throw new Error("Page not found");
        }
        
        const text = await res.text();
        setHtml(text);
      } catch (e) {
        console.error("Failed to fetch goal page:", e);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGoal();
  }, [goalTitle]);


  const handlePreviewLinkClick = (href: string) => {
    return;
  };

  return (

    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* モーダル本体（クリックイベントの伝播を止める） */}
      <div 
        className="bg-white w-full max-w-5xl h-[85vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col transform transition-all animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* ヘッダー部分 */}
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/80 backdrop-blur">
          <div>
            <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">
              GOAL PREVIEW
            </p>
            <h3 className="font-bold text-xl text-gray-900 flex items-center gap-2">
              🏁 <span className="underline decoration-red-300 decoration-4 underline-offset-4">{goalTitle}</span>
            </h3>
          </div>
          
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-gray-200 rounded-full transition text-gray-500 hover:text-gray-800"
            aria-label="閉じる"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* コンテンツ部分 */}
        <div className="flex-1 overflow-hidden bg-white relative">
          {loading ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 z-10">
              <div className="animate-spin h-12 w-12 border-4 border-red-500 border-t-transparent rounded-full mb-4"></div>
              <p className="text-gray-500 font-bold animate-pulse">ゴール地点を偵察中...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <div className="text-4xl mb-4">😢</div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">読み込めませんでした</h4>
              <p className="text-gray-500">
                ページの取得に失敗しました。<br/>
                もう一度試すか、このページが存在しない可能性があります。
              </p>
            </div>
          ) : (

            <WikiFrame 
              html={html} 
              onLinkClick={handlePreviewLinkClick} 
            />
          )}
        </div>
        

      </div>
    </div>
  );
};