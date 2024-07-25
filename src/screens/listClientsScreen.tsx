import { ListClients } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export function ListClientsScreen() {
  const navigate = useNavigate();

  return (
    <>
      <div className="pt-8 flex justify-center w-screen">
        <Card className="w-11/12">
          <div className="flex justify-between space-y-1.5 p-6 items-baseline">
            <div>
              <CardTitle>Clientes</CardTitle>
              <CardDescription>Adicione novos clientes.</CardDescription>
            </div>
            <Button onClick={() => navigate("/client")}>Novo</Button>
          </div>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <ListClients />
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
