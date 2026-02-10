"use client";
import React from 'react';
import Link from "next/link";

type Props = {
  StartTitle: string;
  title: string;
  GoalTitle: string;
  onUndo: () => void;
  canUndo: boolean;
};

export const WikiHeader = ({ StartTitle, title, GoalTitle , onUndo, canUndo}: Props & { onUndo: () => void; canUndo: boolean }) => {
  return (
    <div className="mb-6 w-full max-w-4xl mx-auto">

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        

        <div className="flex flex-row divide-x divide-gray-100 bg-gray-50/50 border-b border-gray-100">
          

          <div className="flex-1 p-3 md:p-4 flex flex-col md:flex-row items-start md:items-center gap-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              Start
            </div>
            <p className="text-sm md:text-base font-medium text-gray-700 truncate w-full" title={StartTitle}>
              {StartTitle || "未設定"}
            </p>
          </div>
            <Link 
              href={`/preview?goal=${encodeURIComponent(GoalTitle)}`}
              scroll={false}
              className="flex-1 p-3 md:p-4 flex flex-col md:flex-row items-start md:items-center justify-end gap-2 text-right md:text-left bg-red-50/30 cursor-pointer hover:bg-red-100/50 transition-colors group relative"
            >
              <div className="flex flex-col md:flex-row-reverse md:items-center gap-2 w-full">
                <div className="flex items-center gap-1.5 text-xs font-bold text-red-500 uppercase tracking-wider md:ml-auto">
                  Goal
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                  <span className=" md:inline-block ml-1 group-hover:opacity-100 transition-opacity text-[10px] bg-white border border-red-200 px-1 rounded text-red-500">
                    ゴールページ
                  </span>
                </div>
                <p className="text-sm md:text-base font-bold text-gray-800 truncate w-full md:text-right group-hover:underline decoration-red-400" title={GoalTitle}>
                  {GoalTitle || "未設定"}
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* 下部：現在のページ (メイン表示) */}
        <div className="p-5 md:p-6 text-center relative">
          {/* 背景の装飾（薄いグラデーション） */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-red-400"></div>
          
          <h2 className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">
            Current Location
          </h2>
          
          <div className="flex items-center justify-center gap-3">
            {/* 現在地アイコン */}
            <svg className="w-6 h-6 md:w-8 md:h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>


            <div className="flex justify-left mb-2">
            <button 
              onClick={onUndo}
              disabled={!canUndo}
              className={`
                flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold transition-all
                ${canUndo 
                  ? "bg-gray-100 text-blue-600 hover:bg-blue-50 hover:text-blue-700 cursor-pointer" 
                  : "bg-gray-50 text-gray-300 cursor-not-allowed"}
              `}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              前に戻る
            </button>
          </div>

            {/* 現在のページタイトル */}
            
            <p className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight break-words max-w-full">
              {title || "読み込み中..."}
            </p>
          </div>
        </div>
      </div>
  );
};