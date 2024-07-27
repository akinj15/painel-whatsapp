import { Mensagen } from "@/models/message";
import { ScrollArea } from "@/components/ui/scroll-area"
import { useEffect, useState } from "react";
import { getAllMessages } from "@/utils";
import { useQuery } from "@tanstack/react-query";


export const ListMensagens = () => {
  const [clients, setClients] = useState<Mensagen[]>();
  const { data: res, isLoading } = useQuery({
    queryFn: getAllMessages,
    queryKey: ['getAllMessages'],
  });

  useEffect(() => {
    if (res && res.data && !isLoading) {
      setClients(res.data.mensagens);
    }
  }, [res, isLoading, setClients]);
  
  return (
    <ScrollArea className="w-full">
      <div className="p-4">
        <h4 className="mb-4 font-semibold leading-none">Mensagens</h4>
        {clients?.map((e: Mensagen) => (
          <>
            <li
              key={e.id}
              className="text-md rounded-md border p-6 my-2 cursor-pointer list-none"
              title="Editar"
            >
              <div>{e.client.name}</div>
              <div>{e.to}</div>
              <div>{e.createdAt.toString()}</div>
            </li>
          </>
        ))}
      </div>
    </ScrollArea>
  );
};


