// "use server";

import { useSearchParams } from "react-router-dom";
import { getShoes } from "../utils/utils";
import ShoeList from "./ShoeList";
import BackBtn from "./BackBtn";

export default async function ShoeSort() {
  // let shoes = await getData();
  // console.log(shoes);
  let sortOrder;
  let direction;

  // async function getData(sortOrder, direction) {
  //   return await getShoes(sortOrder, direction);
  // }

  async function handleSubmit(formData) {
    "use server";
    console.log("handleSubmit");
    console.log(formData);
    sortOrder = formData.get("sortOrder");
    direction = formData.get("direction");
    shoes = await getData(sortOrder, direction);
    // const shoes = await getShoes(sortOrder, direction);
    console.log(shoes);
  }

  return (
    <div className=" m-4 h-10">
      <div className="flex justify-between">
        <form action={handleSubmit} className="flex items-center p-1">
          <label>
            Sort by:
            <select name="sortOrder" defaultValue="shoe_name" className="mr-4">
              <option value="shoe_name">Name</option>
              <option value="rating">Rating</option>
            </select>
          </label>
          Descending order:
          <input
            type="checkbox"
            value="desc"
            name="direction"
            id="direction"
            className="mr-4 ml-1"
          />
          <button
            type="submit"
            className="border m-2 p-1 text-xs hover:text-white hover:bg-black"
          >
            Apply sort
          </button>
        </form>
      </div>
      <ShoeList params={{ orderBy: sortOrder, direction: direction }} />
      <BackBtn />
    </div>
  );
}
