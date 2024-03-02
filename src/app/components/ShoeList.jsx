import ShoeSort from "./ShoeSort";
import BackBtn from "./BackBtn";
import { getShoes } from "../utils/utils";
import Link from "next/link";

export default async function ShoeList({ params }) {
  console.log(params);
  const orderBy = params.orderBy;
  const direction = params.direction;
  const shoes = await getShoes(orderBy, direction);
  return (
    <div className="flex flex-row flex-wrap justify-center">
      {shoes.map((shoe) => (
        <div
          key={shoe.id}
          className="m-5 p-2 border align-center w-80 h-80 trucate overflow-auto"
        >
          <Link href={`/shoes/${shoe.id}`}>
            <p className="m-4 text-lg font-bold">{shoe.shoe_name}</p>
            <p className="text-sm m-2">{shoe.short_description}</p>
          </Link>
        </div>
      ))}
      <BackBtn />
    </div>
  );
}
