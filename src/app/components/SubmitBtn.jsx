"use client";

import { useFormStatus } from "react-dom";
import { main_font } from "../layout";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <div>
      <button
        disabled={pending}
        type="submit"
        className="m-2 p-2 border font-Archivo_Narrow"
      >
        {pending ? "Adding review..." : "Add review"}
      </button>
    </div>
  );
}
