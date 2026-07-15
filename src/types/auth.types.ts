export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: "user" | "owner";
}


export interface LoginData {
  email: string;
  password: string;
}


export interface AuthResponse {

  success: boolean;

  message: string;

  data: {

    token: string;

    user: {

      id: string;

      name: string;

      email: string;

      role: "user" | "owner" | "admin";

    };

  };

}