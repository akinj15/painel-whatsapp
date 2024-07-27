import { EnviaMensagem } from "@/components";
import { text } from "@/utils";
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

export function CreateMessage() {
  const navigate = useNavigate();
  const formId = "EnviaMensagem";

  const { mutate } = useMutation({
    mutationFn: text,
    onSuccess: () => {
      navigate("/");
    },
  });


  return (
    <>
      <Card className="w-11/12">
        <CardHeader>
          <CardTitle>Envio uma mensagem para um numero.</CardTitle>
          <CardDescription>
            Para enviar click no botão enviar.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EnviaMensagem formName={formId} onSubmit={mutate} />
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button form={formId} type="submit">
            Enviar
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
