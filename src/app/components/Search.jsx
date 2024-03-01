"use client";

import { useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();

  const search = searchParams.get("search");

  return (
    <div>
      <p>Search: {search}</p>
    </div>
  );
}
