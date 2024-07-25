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

const clientSchema = z.object({
  name: z.string(),
  email: z.string(),
  identificadornumero: z.string(),
  identificadorconta: z.string(),
  whatsapptoken: z.string(),
});

type ClientSchema = z.infer<typeof clientSchema>;

interface IcreateClient {
  onSubmit: (data: ClientSchema) => void;
  formName: string;
}

export const CreateClientForm = ({ onSubmit, formName }: IcreateClient) => {
  const form = useForm<ClientSchema>({
    resolver: zodResolver(clientSchema),
    values: {
      email: "",
      name: "",
      identificadornumero: "",
      identificadorconta: "",
      whatsapptoken: "",
    },
  });


  const HandlerOnSubmit = async (data: ClientSchema) => {
    if (data.email && data.identificadornumero && data.identificadorconta) {
      onSubmit({
        email: data.email,
        name: data.name,
        identificadornumero: data.identificadornumero,
        identificadorconta: data.identificadorconta,
        whatsapptoken: data.whatsapptoken,
      });
    }
    console.log(data);
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
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="nome de Cliente" {...field} />
                </FormControl>
                <FormDescription>digite o nome do Cliente</FormDescription>
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
