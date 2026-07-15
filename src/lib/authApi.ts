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

  const result = await res.json();

  if (!res.ok) {
    let message = "Registration failed";

    if (Array.isArray(result) && result.length > 0) {
      message = result[0].message;
    } else if (result.message) {
      message = result.message;
    }

    throw new Error(message);
  }

  return result as AuthResponse;
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

  const result = await res.json();

  if (!res.ok) {
    let message = "Login failed";

    if (Array.isArray(result) && result.length > 0) {
      message = result[0].message;
    } else if (result.message) {
      message = result.message;
    }

    throw new Error(message);
  }

  return result as AuthResponse;
}