import Link from "next/link";
import { main_font } from "../layout";

export default function Nav() {
  return (
    <div className="absolute z-10">
      <ul className="flex flex-row p-0 justify-end font-bold text-2xl text-gray-600 bg-gray-400 bg-opacity-20 w-screen">
        <li className="m-4 hover:text-gray-800">
          <Link href="/">HOME</Link>
        </li>
        <li className="m-4 hover:text-gray-800">
          <Link href="/brands">BRANDS</Link>
        </li>
        <li className="m-4 mr-20 hover:text-gray-800">
          <Link href="/shoes">SHOES</Link>
        </li>
      </ul>
    </div>
  );
}
