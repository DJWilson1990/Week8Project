import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import BackBtn from "@/app/components/BackBtn";

export default async function Page({ params }) {
  // revalidatePath();
  const brand = (await sql`SELECT * FROM brands WHERE id = ${params.id}`)
    .rows[0];

  const shoes = (
    await sql`SELECT * FROM shoes WHERE shoes.brand_id = ${params.id}`
  ).rows;

  return (
    <div className="flex flex-row flex-wrap justify-center">
      <h1 className="m-4 text-xl font-bold text-center">{brand.brand_name}</h1>
      {shoes.map((shoe) => (
        <div
          key={shoe.id}
          className="m-5 p-2 border align-center w-80 h-80 trucate overflow-auto scrollbar-hide"
        >
          <Link href={`/shoes/${shoe.id}`}>
            <p className="m-4 text-lg font-bold">{shoe.shoe_name}</p>
          </Link>
          <p className="text-sm m-2">{shoe.short_description}</p>
        </div>
      ))}
      <BackBtn />
    </div>
  );
}

// add reviews to this page! think cards with shoe image, name, description, review. and button to 'add review' linking to reviews!
