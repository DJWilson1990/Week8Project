"use client";

import { useRouter } from "next/navigation";

export default function BackBtn() {
  const router = useRouter();

  return (
    <button
      className="m-4 p-2 border w-40 h-10 hover:text-white hover:bg-black"
      onClick={() => router.back()}
    >
      Go Back
    </button>
  );
}
