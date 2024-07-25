import { CreateClient, UpdateClient } from "@/components";
import { useParams } from "react-router-dom";

export function ClientScreen() {
  const { id } = useParams();

  return (
    <>
      <div className="pt-8 flex justify-center w-screen">
        {id ? <UpdateClient id={id} /> : <CreateClient />}
      </div>
    </>
  );
}
