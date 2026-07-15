export type UserRole =
  | "user"
  | "owner"
  | "admin";


export interface User {

  id?: string;

  _id?: string;

  name: string;

  email: string;

  role: UserRole;

  status?: string;

  createdAt: string;

  updatedAt: string;

}