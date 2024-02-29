import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import SubmitBtn from "@/app/components/SubmitBtn";

export default function Page() {
  async function handleReview(formData) {
    "use server";
    const review = formData.get("review");
    const rating = formData.get("rating");

    await sql`INSERT INTO reviews (review, rating) VALUES (${review}, ${rating})`;

    revalidatePath("/reviews");

    redirect("/reviews");
  }

  return (
    <div>
      <p>Form</p>
      <form
        action={handleReview}
        className="m-4 p-4 flex flex-col justify-center"
      >
        <label className="m-4">Review</label>
        <textarea name="review" placeholder="Review" />
        <label className="m-4">Rating</label>
        <input name="rating" placeholder="Rating" />
        <SubmitBtn />
      </form>
    </div>
  );
}

// import { sql } from "@vercel/postgres";
// import Link from "next/link";

// export default async function Page() {
//   const reviews = (await sql`SELECT * FROM reviews`).rows;

//   return (
//     <div>
//       <p>Reviews page</p>
//       {reviews.map((reviews) => (
//         <div key={reviews.id}>
//           <Link href={`/reviews/${reviews.id}`}>
//             <p>{reviews.review}</p>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// }
