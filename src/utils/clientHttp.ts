import { httpService } from "./httpService";
import { Client } from "@/models/client";

export const createClient = (user: Client) => {
  return httpService.post("/client", user);
};

export const updateClient = (user: Client) => {
  return httpService.put("/client", user);
};

export const getAllClients = () => {
  return httpService.get("/client/getAll");
};

export const getClientById = (id?: string) => {
  return httpService.get("/client/" + id);
};

export const deleteClient = (id?: string) => {
  return httpService.delete("/client/" + id);
};