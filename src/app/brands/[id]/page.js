import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function Page({ params }) {
  const brand = (await sql`SELECT * FROM brands WHERE id = ${params.id}`)
    .rows[0];

  const shoes = (
    await sql`SELECT * FROM shoes WHERE shoes.brand_id = ${params.id}`
  ).rows;

  return (
    <div>
      <h1 className="m-4 text-xl font-bold text-center">{brand.brand_name}</h1>
      {shoes.map((shoe) => (
        <div key={shoe.id} className="border m-4">
          <Link href={`/shoes/${shoe.id}`}>
            <p className="m-4 text-lg font-bold">{shoe.shoe_name}</p>
          </Link>
          <p>{shoe.description}</p>
        </div>
      ))}
    </div>
  );
}
