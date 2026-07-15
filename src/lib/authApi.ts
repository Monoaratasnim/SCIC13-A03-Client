import { API } from "./api";

import type {
  RegisterData,
  LoginData,
  AuthResponse,
} from "@/types/auth.types";


export async function register(
  data: RegisterData
): Promise<AuthResponse> {

  const res = await fetch(
    `${API}/auth/register`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    }
  );


  const result: AuthResponse =
    await res.json();


  if (!res.ok) {
    throw new Error(result.message);
  }


  return result;
}



export async function login(
  data: LoginData
): Promise<AuthResponse> {

  const res = await fetch(
    `${API}/auth/login`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    }
  );


  const result: AuthResponse =
    await res.json();


  if (!res.ok) {
    throw new Error(result.message);
  }


  return result;
}