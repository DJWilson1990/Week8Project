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

export async function handleDelete(id) {
  await sql`DELETE FROM reviews WHERE id=${id}`;
  // revalidatePath(`/review`);
}

export async function handleUpdate(values, id) {
  await sql`UPDATE reviews SET ${values} WHERE id=${id}`;
  revalidatePath(`/shoes/${shoe_id}`);
}
