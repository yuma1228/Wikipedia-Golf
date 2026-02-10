"use client"; 

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const GameForm = () => {
  const router = useRouter();
  const [startWord, setStartWord] = useState('');
  const [goalWord, setGoalWord] = useState('');

  const [error, setError] = useState('');
  const [isChecking, setIsChecking] = useState(false);

  const checkPageExists = async (title: string): Promise<boolean> => {
    try {
      const res = await fetch(
        `https://ja.wikipedia.org/w/api.php?action=query&format=json&titles=${encodeURIComponent(title)}&origin=*`
      );
      const data = await res.json();
      const pages = data.query.pages;
      const pageId = Object.keys(pages)[0];

      return pageId !== "-1";
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  const handleStart = async () => {
    setError('');
    setIsChecking(true);

    if (!startWord || !goalWord) {
      setError("スタートとゴールを入力してください");
      setIsChecking(false);
      return;
    }

    const [startExists, goalExists] = await Promise.all([
      checkPageExists(startWord),
      checkPageExists(goalWord)
    ]);

    if (!startExists) {
      setError(`「${startWord}」というページは見つかりませんでした。`);
      setIsChecking(false);
      return;
    }

    if (!goalExists) {
      setError(`「${goalWord}」というページは見つかりませんでした。`);
      setIsChecking(false);
      return;
    }

    const params = new URLSearchParams({ start: startWord, goal: goalWord });
    router.push(`/Golf?${params.toString()}`);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 w-full max-w-md">
      <h2 className="text-gray-800 font-bold mb-4 text-center">お題を決めて遊ぶ</h2>
      <div className="flex flex-col gap-3">
        
        {error && (
          <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg border border-red-200 flex items-center gap-2">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </div>
        )}

        <input 
          type="text" 
          placeholder="スタート地点 (例: りんご)" 
          value={startWord}
          onChange={(e) => setStartWord(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
        />
        <input 
          type="text" 
          placeholder="ゴール地点 (例: Google)" 
          value={goalWord}
          onChange={(e) => setGoalWord(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
        />
        
        <button 
          onClick={handleStart}
          disabled={!startWord || !goalWord || isChecking}
          className="mt-2 w-full py-3 bg-gray-800 text-white rounded-xl font-bold shadow hover:bg-gray-900 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all flex justify-center items-center"
        >
          {isChecking ? (
            <>
              <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
              確認中...
            </>
          ) : (
            "🎯 指定してスタート"
          )}
        </button>
      </div>
    </div>
  );
};