import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import SubmitBtn from "@/app/components/SubmitBtn";
import { getBrands } from "../utils/utils";
import { getShoes } from "../utils/utils";

export default async function Page() {
  return (
    <div>
      <p>old review form page</p>
    </div>
  );
}
