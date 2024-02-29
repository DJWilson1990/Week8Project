"use server";

import { sql } from "@vercel/postgres";

export async function getBrands() {
  const brands = (await sql`SELECT * FROM brands`).rows;
  return brands;
}

export async function getShoes() {
  const shoes = (await sql`SELECT shoe_name FROM shoes`).rows;
  return shoes;
}
