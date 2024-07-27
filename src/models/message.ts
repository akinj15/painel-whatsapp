import { Client } from "./client";

export type Text = {
  text: string;
  number: string;
  identificadornumero: string;
  identificadorconta: string;
  token: string;
};

export type Document = {
  text: string;
  number: string;
  identificadornumero: string;
  identificadorconta: string;
  token: string;
};

export type Mensagen = {
  id: string;
  to: string;
  type: string;
  createdAt: Date;
  client: Client;
};
