import { sql } from "@vercel/postgres";
import Link from "next/link";
import ReviewBtn from "@/app/components/ReviewBtn";
import BackBtn from "@/app/components/BackBtn";
import DeleteBtn from "@/app/components/DeleteBtn";

export default async function Page({ params }) {
  const shoe = (await sql`SELECT * FROM shoes WHERE id = ${params.id}`).rows[0];

  const reviews = (
    await sql`SELECT * FROM reviews WHERE reviews.shoe_id = ${params.id}`
  ).rows;

  return (
    <div className="border m-8 p-4 relative">
      <h1 className="text-lg font-bold p-4">{shoe.shoe_name}</h1>
      <p className="p-4">{shoe.description}</p>
      <ReviewBtn link={`/review/${shoe.id}`} />
      {reviews.map((review) => (
        <div key={review.id} className="border m-2 p-4">
          <Link href={`/review/${shoe.id}`}>
            <p>{review.review}</p>
          </Link>
          <p>{review.rating} Stars</p>
          <div className="flex justify-between items-center">
            <p className="font-semibold">{review.name}</p>
            <DeleteBtn params={{ review_id: review.id, shoe_id: shoe.id }} />
          </div>
        </div>
      ))}
    </div>
  );
}
