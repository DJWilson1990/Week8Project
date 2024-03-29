import { sql } from "@vercel/postgres";
import Link from "next/link";
import { getShoes } from "../utils/utils";
import BackBtn from "../components/BackBtn";
import { useParams, useSearchParams } from "react-router-dom";

import Image from "next/image";

export default async function Page() {
  const shoes = await getShoes();

  return (
    <div className="flex flex-row flex-wrap justify-center m-8">
      {shoes.map((shoe) => (
        <div
          key={shoe.id}
          className="m-5 p-2 border align-center w-80 h-80 trucate overflow-auto"
        >
          <Link href={`/shoes/${shoe.id}`}>
            <div className="h-16 w-16">
              <Image
                className="m-2"
                src={shoe.shoeimg_url ?? "https://placehold.co/70x70/png"}
                alt="running shoe image"
                width={70}
                height={70}
              />
            </div>
            <p className="m-4 text-lg font-bold">{shoe.shoe_name}</p>
            <p className="ml-4 text-xs">{shoe.brand_name}</p>
            <p className="text-sm m-2 p-2">{shoe.short_description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
