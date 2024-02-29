import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function Page() {
  const shoes = (await sql`SELECT * FROM shoes`).rows;

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {shoes.map((shoe) => (
        <div
          key={shoe.id}
          className="m-5 p-2 border align-center w-80 h-80 trucate overflow-auto scrollbar-hide "
        >
          <Link href={`/shoes/${shoe.id}`}>
            <p className="m-4 text-lg font-bold">{shoe.shoe_name}</p>
            <p className="text-sm m-2">{shoe.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
