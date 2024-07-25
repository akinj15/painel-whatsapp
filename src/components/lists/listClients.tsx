import { Client } from "@/models/client";
import { ScrollArea } from "@/components/ui/scroll-area"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllClients } from "@/utils";
import { useQuery } from "@tanstack/react-query";


export const ListClients = () => {
  const [clients, setClients] = useState<Client[]>();
  const navigate = useNavigate();
  const { data: res, isLoading } = useQuery({
    queryFn: getAllClients,
    queryKey: ['getAllClients'],
  });

  useEffect(() => {
    if (res && res.data && !isLoading) {
      setClients(res.data.client);
    }
  }, [res, isLoading, setClients]);
  
  return (
    <ScrollArea className="w-full">
      <div className="p-4">
        <h4 className="mb-4 font-semibold leading-none">Clientes</h4>
        {clients?.map((e: Client) => (
          <>
            <li
              key={e.id}
              className="text-md rounded-md border p-6 my-2 cursor-pointer list-none"
              title="Editar"
              onClick={() => navigate("/client/" + e.id)}
            >
              <div>{e.name}</div>
            </li>
          </>
        ))}
      </div>
    </ScrollArea>
  );
};


