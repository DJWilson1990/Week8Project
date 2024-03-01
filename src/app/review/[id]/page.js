import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import SubmitBtn from "@/app/components/SubmitBtn";
import BackBtn from "@/app/components/BackBtn";

export default async function Page({ params }) {
  async function handleReview(formData) {
    "use server";
    const review = formData.get("review");
    const rating = Number(formData.get("rating"));
    const shoe_id = Number(params.id);

    await sql`INSERT INTO reviews (review, rating, shoe_id) VALUES (${review}, ${rating}, ${shoe_id})`;

    revalidatePath(`/shoes/${shoe_id}`);

    redirect(`/shoes/${shoe_id}`);
  }

  return (
    <div>
      <form
        action={handleReview}
        className="m-4 p-4 flex flex-col justify-center mx-auto"
      >
        <label className="m-4">Name</label>
        <input className="m-4 border" name="name" placeholder="Name" />
        <label className="m-4">Review</label>
        <textarea className="m-4 border" name="review" placeholder="Review" />
        <label className="m-4">Rating</label>
        <input
          className="m-4 border"
          name="rating"
          placeholder="Rating"
          type="number"
        />
        <SubmitBtn />
      </form>
      <BackBtn />
    </div>
  );
}
