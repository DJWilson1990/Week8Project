"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function getBrands() {
  const brands = (await sql`SELECT * FROM brands`).rows;
  return brands;
}

export async function getShoes() {
  const shoes = (await sql`SELECT * FROM shoes`).rows;
  return shoes;
}

export async function deleteReview(review_id, shoe_id) {
  await sql`DELETE FROM reviews WHERE id = ${review_id}`;
  console.log("button clicked");
  revalidatePath(`/shoes/${shoe_id}`);
}
