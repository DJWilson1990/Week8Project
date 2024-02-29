import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function Page({ params }) {
  const shoes = (await sql`SELECT * FROM shoes WHERE id = ${params.id}`)
    .rows[0];

  const reviews = (
    await sql`SELECT * FROM reviews WHERE reviews.shoe_id = ${params.id}`
  ).rows;

  return (
    <div>
      <p>{shoes.shoe_name}</p>
      {reviews.map((review) => (
        <div key={review.id}>
          <Link href={`/review/${reviews.shoe_id}`}>
            {/* <p>{reviews.review}</p> */}
          </Link>
        </div>
      ))}
    </div>
  );
}
