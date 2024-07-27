import { Text } from "@/models/message";
import { httpService } from "./httpService";


export const text = (data: Text) => {
  const body = {
    text: data.text,
    number: data.number
  }
  const header = {
    identificadornumero: data.identificadornumero,
    identificadorconta: data.identificadorconta,
    token: data.token
  };
  console.log(header);
  return httpService.post("/message/text", body, header);
};

export const getAllMessages = () => {
  return httpService.get("/message");
};
