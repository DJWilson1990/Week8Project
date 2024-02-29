import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function Page() {
  const shoes = (await sql`SELECT * FROM shoes`).rows;

  return (
    <div>
      <p>Shoes page</p>
      {shoes.map((shoe) => (
        <div key={shoe.id}>
          <Link href={`/shoes/${shoe.id}`}>
            <p>{shoe.shoe_name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
