import { Spinner, UpdateClientForm } from "@/components";
import { getClientById, updateClient, deleteClient } from "@/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useEffect, useState } from "react";
import { Client } from "@/models/client";

interface IUpdateClient { 
  id: string
}

export function UpdateClient({ id }: IUpdateClient) {
  const [client, setClient] = useState<Client>({} as Client)
  const navigate = useNavigate();
  const formId = "UpdateClientForm";
  const { data: res, isLoading, isSuccess } = useQuery({
    queryFn: () => getClientById(id || ""),
    queryKey: ["getClientById"],
  });
  
  const { mutate: mutateSubmit} = useMutation({
    mutationFn: updateClient,
    onSuccess: () => {
      navigate("/clients");
    },
  });

 const { mutate: mutateDelete } = useMutation({
   mutationFn: deleteClient,
   onSuccess: () => {
     navigate("/clients");
   },
 });

  useEffect(() => {
    if (!isLoading && isSuccess && res.data && res.data.client) {
      setClient(res.data.client);
    }
  }, [res, isLoading, isSuccess]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Card className="w-11/12">
          <CardHeader>
            <CardTitle>Atualize o Cliente.</CardTitle>
            <CardDescription>
              Para salvar os dados click no botão salvar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <UpdateClientForm
              client={client}
              formName={formId}
              onSubmit={mutateSubmit}
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant={"destructive"} onClick={() => mutateDelete(id)}>
              Deletar
            </Button>
            <Button form={formId} type="submit">
              Salvar
            </Button>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
