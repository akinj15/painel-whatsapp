import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Client } from "@/models/client";

const clientSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  identificadornumero: z.string(),
  identificadorconta: z.string(),
  whatsapptoken: z.string(),
});

type ClientSchema = z.infer<typeof clientSchema>;

interface IupdateClient {
  onSubmit: (data: ClientSchema) => void;
  formName: string;
  client: Client;
}

export const UpdateClientForm = ({ onSubmit, formName, client }: IupdateClient) => {
  const form = useForm<ClientSchema>({
    resolver: zodResolver(clientSchema),
    values: {
      id: client.id || "",
      email: client.email,
      identificadornumero: client.identificadornumero || "",
      identificadorconta: client.identificadorconta || "",
      whatsapptoken: client.whatsapptoken || "",
      name: client?.name || "",
    },
  });

  const HandlerOnSubmit = async (data: ClientSchema) => {
    if (data.email && data.name) {
      console.log(data);
      onSubmit({
        id: data.id,
        email: data.email,
        name: data.name,
        identificadornumero: data.identificadornumero,
        identificadorconta: data.identificadorconta,
        whatsapptoken: data.whatsapptoken,
      });
    }
  };

  return (
    <div className="grid w-full items-center gap-4">
      <Form {...form}>
        <form id={formName} onSubmit={form.handleSubmit(HandlerOnSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="nome de usuário" {...field} />
                </FormControl>
                <FormDescription>digite o nome do usuário</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>email</FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>
                <FormDescription>digite o email</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="identificadornumero"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Identificador Numero</FormLabel>
                <FormControl>
                  <Input placeholder="nome" {...field} />
                </FormControl>
                <FormDescription>
                  digite o Identificador do Numero
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="identificadorconta"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Identificador Conta</FormLabel>
                <FormControl>
                  <Input placeholder="Identificador Conta" {...field} />
                </FormControl>
                <FormDescription>
                  digite o Identificador da Conta
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="whatsapptoken"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Token</FormLabel>
                <FormControl>
                  <Input placeholder="sobrenome" {...field} />
                </FormControl>
                <FormDescription>Token whatsapp</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};
