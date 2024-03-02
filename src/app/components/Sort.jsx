import { useSearchParams } from "react-router-dom";
import { getShoes } from "../utils/utils";

export default async function Sort() {
  const shoes = await getShoes();

  return (
    <form>
      <label>
        Sort by:
        <select value={searchParams.get("sort") || ""} onChange={handleChange}>
          <option value="">Select...</option>
          <option value="shoe_name">Name</option>
          <option value="rating">Rating</option>
        </select>
      </label>
      <input type="checkbox" value="desc" name="direction" id="direction" />
    </form>
  );
}
