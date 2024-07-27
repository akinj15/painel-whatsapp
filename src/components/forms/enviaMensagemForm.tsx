import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { Text } from "@/models/message";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useQuery } from "@tanstack/react-query";
import { getAllClients } from "@/utils";
import { useEffect, useState } from "react";
import { Client } from "@/models/client";

const mensagemSchema = z.object({
  cliente: z.string(),
  numero: z.string(),
  mensagem: z.string(),
});

type MensagemSchema = z.infer<typeof mensagemSchema>;

interface IenviaMensagem {
  onSubmit: (data: Text) => void;
  formName: string;
}

export const EnviaMensagem = ({ onSubmit, formName }: IenviaMensagem) => {
  const [clients, setClients] = useState<Client[]>();
  const form = useForm<MensagemSchema>({
    resolver: zodResolver(mensagemSchema),
    values: {
      cliente: "",
      numero: "",
      mensagem: "",
    },
  });

  const HandlerOnSubmit = async (data: MensagemSchema) => {
    if (data.cliente && data.numero && data.mensagem) {
      const cliente = clients?.filter((e) => e.id == data.cliente);
      if (cliente && cliente.length > 0) {
        const c = cliente[0];
        onSubmit({
          token: c.whatsapptoken || "",
          identificadorconta: c.identificadorconta || "",
          identificadornumero: c.identificadornumero || "",
          number: data.numero,
          text: data.mensagem,
        });
      }
    }
  };

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
    <div className="grid w-full items-center gap-4">
      <Form {...form}>
        <form
          id={formName}
          onSubmit={form.handleSubmit(HandlerOnSubmit)}
        >
          <FormField
            control={form.control}
            name="cliente"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cliente</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o cliente" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {clients?.map((e: Client) => (
                      <>
                        <SelectItem value={e.id || ""}>{e.name}</SelectItem>
                      </>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  "Seleciona o cliente que irá enviar a mensagem"
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="numero"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Numero</FormLabel>
                <FormControl>
                  <Input placeholder="nome" {...field} />
                </FormControl>
                <FormDescription>Numero de telefone que receberá a mensagem</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mensagem"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensagem</FormLabel>
                <FormControl>
                  <Input placeholder="sobrenome" type="text" {...field} />
                </FormControl>
                <FormDescription>Mensagem que será enviada</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};
