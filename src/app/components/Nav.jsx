import Link from "next/link";
import { main_font } from "../layout";

export default function Nav() {
  return (
    <div>
      <ul className="flex flex-row p-2 font-main_font">
        <li className="m-4">
          <Link href="/">HOME</Link>
        </li>
        <li className="m-4">
          <Link href="/brands">BRANDS</Link>
        </li>
        <li className="m-4">
          <Link href="/shoes">SHOES</Link>
        </li>
        <li className="m-4">
          <Link href="/review">REVIEW</Link>
        </li>
      </ul>
    </div>
  );
}
