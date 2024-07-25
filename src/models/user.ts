import { Role } from "./role";

export type User = {
  id?: string;
  email: string;  
  username: string;
  token?: string;
  password?: string;
  firstname?: string;
  surname?: string;
  lastname?: string;
  role?: Role;
};