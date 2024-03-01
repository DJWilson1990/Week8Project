"use client";

import { handleDelete } from "../utils/utils";

export default function DeleteBtn({ id }) {
  return (
    <button className="m-2 p-2 border" onClick={() => handleDelete(id)}>
      Delete Review
    </button>
  );
}
