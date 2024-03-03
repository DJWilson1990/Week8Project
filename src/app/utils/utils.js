"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function getBrands() {
  const brands = (await sql`SELECT * FROM brands`).rows;
  return brands;
}

export async function getShoes(orderBy, direction) {
  let queryString =
    "SELECT s.shoe_name, s.id, s.short_description, s.description, s.shoeimg_url, s.rating, b.brand_name FROM shoes AS s INNER JOIN brands AS b ON s.brand_id = b.id";
  if (orderBy) {
    queryString = queryString + ` ORDER BY ${orderBy}`;

    if (direction) {
      queryString = queryString + ` ${direction}`;
    }
  }
  const shoes = (await sql.query(queryString)).rows;
  return shoes;
}

export async function deleteReview(review_id, shoe_id) {
  await sql`DELETE FROM reviews WHERE id = ${review_id}`;
  console.log("button clicked");
  revalidatePath(`/shoes/${shoe_id}`);
}
