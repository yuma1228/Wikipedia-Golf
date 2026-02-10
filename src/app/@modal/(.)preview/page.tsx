// app/@modal/(.)preview/page.tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { GoalModal } from "@/components/GoalModal";

export default function PreviewModal() {
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