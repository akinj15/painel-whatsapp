import { ListMensagens } from "@/components";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";


export function HomeScreen() {

  return (
    <>
      <div className="pt-8 flex justify-center w-screen">
        <Card className="w-11/12">
          <div className="flex justify-between space-y-1.5 p-6 items-baseline">
            <div>
              <CardTitle>Mensagens</CardTitle>
              <CardDescription>Mensagens Enviadas</CardDescription>
            </div>
          </div>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <ListMensagens />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
