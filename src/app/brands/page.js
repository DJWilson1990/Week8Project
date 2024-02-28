import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function Page() {
  const brands = (await sql`SELECT * FROM brands`).rows;

  return (
    <div>
      <h1>Brands page</h1>
      {brands.map((brand) => (
        <div key={brand.id}>
          <Link href={`/brands/${brand.id}`}>
            <p>{brand.brand_name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
