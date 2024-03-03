"use client";

import { deleteReview } from "../utils/utils";
// import { handleUpdate } from "../utils/utils";

export default function DeleteBtn({ params }) {
  return (
    <button
      type="button"
      className="m-2 p-2 border text-xs rounded-full hover:text-white hover:bg-black"
      onClick={() => deleteReview(params.review_id, params.shoe_id)}
    >
      X
    </button>
  );
}
