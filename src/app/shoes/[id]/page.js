import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function Page({ params }) {
  const shoe = (await sql`SELECT * FROM shoes WHERE id = ${params.id}`).rows[0];

  return (
    <div>
      <Link href={`/reviews/${shoe.id}`}>
        <h1>{shoe.shoe_name}</h1>
      </Link>
      <p>{shoe.description}</p>
    </div>
  );
}
