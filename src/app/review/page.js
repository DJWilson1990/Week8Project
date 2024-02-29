import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import SubmitBtn from "@/app/components/SubmitBtn";
import { getBrands } from "../utils/utils";
import { getShoes } from "../utils/utils";

export default async function Page() {
  async function handleReview(formData) {
    "use server";
    const review = formData.get("review");
    const rating = formData.get("rating");

    await sql`INSERT INTO reviews (review, rating) VALUES (${review}, ${rating})`;

    revalidatePath("/shoes}");

    redirect("/shoes");
  }

  // need to add sql query so once brand is selected, only shoes from that brand will show!!!!
  let brands = await getBrands();
  let shoes = await getShoes();

  return (
    <div>
      <form
        action={handleReview}
        className="m-4 p-4 flex flex-col justify-center mx-auto"
      >
        <label className="m-4">
          Select Brand:
          <select name="brands" id="brands">
            {brands.map((brands) => (
              <option key={brands.id}>{brands.brand_name}</option>
            ))}
          </select>
        </label>
        <label className="m-4">
          Select Shoe:
          <select name="shoes" id="shoes">
            {shoes.map((shoes) => (
              <option key={shoes.id}>{shoes.shoe_name}</option>
            ))}
          </select>
        </label>
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
    </div>
  );
}
