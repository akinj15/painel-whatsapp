import { CreateClientForm } from "@/components";
import { createClient } from "@/utils";
import { useMutation } from "@tanstack/react-query";
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

export function CreateClient() {
  const navigate = useNavigate();
  const formId = "createClientForm";
  const { mutate: submitMutate } = useMutation({
    mutationFn: createClient,
    onSuccess: () => {
      navigate("/client");
    },
  });

  return (
    <>
      <Card className="w-11/12">
        <CardHeader>
          <CardTitle>Crie um novo usuário.</CardTitle>
          <CardDescription>
            Para salvar os dados click no botão salvar.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CreateClientForm formName={formId} onSubmit={submitMutate} />
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button form={formId} type="submit">
            Salvar
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
