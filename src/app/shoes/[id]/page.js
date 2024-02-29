import { sql } from "@vercel/postgres";
import Link from "next/link";
import ReviewBtn from "@/app/components/ReviewBtn";

export default async function Page({ params }) {
  const shoe = (await sql`SELECT * FROM shoes WHERE id = ${params.id}`).rows[0];

  const reviews = (
    await sql`SELECT * FROM reviews WHERE reviews.shoe_id = ${params.id}`
  ).rows;

  return (
    <div>
      <h1 className="text-lg font-bold">{shoe.shoe_name}</h1>
      <p>{shoe.description}</p>
      <ReviewBtn link={`/review/${shoe.id}`} />
      {reviews.map((review) => (
        <div key={review.id}>
          <Link href={`/review/${shoe.id}`}>
            <p>{review.review}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
