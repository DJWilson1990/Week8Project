"use client";

import { main_font } from "../layout";
import Link from "next/link";

export default function ReviewBtn() {
  return (
    <div>
      <Link href={"/review"}>
        <button type="submit" className="m-4 p-2 border">
          Leave Review
        </button>
      </Link>
    </div>
  );
}
