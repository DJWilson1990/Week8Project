import { sql } from "@vercel/postgres";
import Link from "next/link";
import { getBrands } from "../utils/utils";

export default async function Page() {
  const brands = await getBrands();

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {brands.map((brand) => (
        <div key={brand.id} className="m-5 p-2 border align-center w-80 h-80">
          <Link href={`/brands/${brand.id}`}>
            <p>{brand.brand_name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
