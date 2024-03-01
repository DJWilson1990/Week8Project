"use client";

import { handleDelete } from "../utils/utils";
import { handleUpdate } from "../utils/utils";

export default function DeleteBtn({ id }) {
  return (
    <button
      className="m-2 p-2 border text-xs rounded-full"
      onClick={() => handleDelete(id)}
    >
      X
    </button>
  );
}
