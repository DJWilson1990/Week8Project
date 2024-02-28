import { sql } from "@vercel/postgres";

export default async function Page({ params }) {
  const shoe = (await sql`SELECT * FROM shoes WHERE id = ${params.id}`).rows[0];

  return (
    <div>
      <h1>{shoe.shoe_name}</h1>
      <p>{shoe.description}</p>
    </div>
  );
}
