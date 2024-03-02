// "use server";

import { useSearchParams } from "react-router-dom";
import { getShoes } from "../utils/utils";
import ShoeList from "./ShoeList";

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
    <div>
      <p>Shoe sort:</p>
      <form action={handleSubmit}>
        <label>
          Sort by:
          <select name="sortOrder" defaultValue="shoe_name">
            <option value="shoe_name">Name</option>
            <option value="rating">Rating</option>
          </select>
        </label>
        <input type="checkbox" value="desc" name="direction" id="direction" />
        <button type="submit">Apply sort</button>
      </form>
      {/* <ShoeList shoes={orderBy} /> */}
      <ShoeList params={{ orderBy: sortOrder, direction: direction }} />
    </div>
  );
}
