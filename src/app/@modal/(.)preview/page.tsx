"use client";

import { Suspense } from "react"; // 👈 これを追加
import { useRouter, useSearchParams } from "next/navigation";
import { GoalModal } from "@/components/GoalModal";


function PreviewContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const goal = searchParams.get("goal") || "";

  const handleClose = () => {
    router.back();
  };

  if (!goal) return null;

  return (
    <GoalModal 
      goalTitle={goal} 
      onClose={handleClose} 
    />
  );
}

export default function PreviewModal() {
  return (

    <Suspense fallback={null}>
      <PreviewContent />
    </Suspense>
  );
}