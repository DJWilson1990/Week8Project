import { sql } from "@vercel/postgres";
import Link from "next/link";
import { getShoes } from "../utils/utils";
import BackBtn from "../components/BackBtn";
import { useParams, useSearchParams } from "react-router-dom";
import ShoeSort from "../components/ShoeSort";

export default async function Page() {
  //  const shoes = await getShoes();

  return (
    <div className="flex flex-col ">
      <ShoeSort />
      {/* <BackBtn /> */}
    </div>
  );
}
