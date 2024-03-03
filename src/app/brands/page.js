import { sql } from "@vercel/postgres";
import Link from "next/link";
import { getBrands } from "../utils/utils";
import BackBtn from "../components/BackBtn";
import AnimateCards from "../components/AnimateCards";
import Image from "next/image";

export default async function Page() {
  const brands = await getBrands();

  return (
    <div>
      <div className="flex flex-row flex-wrap justify-center">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="m-5 mt-28 p-2 border place-items-center  w-70 h-70"
          >
            <AnimateCards>
              <Link href={`/brands/${brand.id}`}>
                <p className="text-center">{brand.brand_name}</p>
                <Image
                  src={brand.img_url}
                  alt="brand logo"
                  width={200}
                  height={200}
                />
              </Link>
            </AnimateCards>
          </div>
        ))}
      </div>

      <BackBtn />
    </div>
  );
}
