export type UserRole =
  | "user"
  | "owner"
  | "admin";


export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};



export function getCurrentUser():
AuthUser | null {

  if(
    typeof window === "undefined"
  ) {
    return null;
  }


  const user =
    localStorage.getItem("user");


  if(!user){
    return null;
  }


  try {

    return JSON.parse(user);

  } catch {

    return null;

  }

}





export function logout(){

  if(
    typeof window === "undefined"
  ){
    return;
  }


  localStorage.removeItem(
    "token"
  );


  localStorage.removeItem(
    "user"
  );

}