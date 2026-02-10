"use client";

import { useSearchParams } from "next/navigation";
import { GoalModal } from "@/components/GoalModal";

export default function PreviewPage() {
  const searchParams = useSearchParams();
  const goal = searchParams.get("goal") || "";

  if (!goal) return null;

  return <GoalModal goalTitle={goal} onClose={() => {}} />;
}