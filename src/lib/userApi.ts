import { API } from "./api";

import type {
  User,
  UserRole,
} from "@/types/user.types";



/*
|--------------------------------------------------------------------------
| Get All Users Response Type
|--------------------------------------------------------------------------
*/

export interface UsersResponse {

  users: User[];

  pagination: {

    page: number;

    limit: number;

    totalUsers: number;

    totalPages: number;

  };

}





/*
|--------------------------------------------------------------------------
| Get All Users (Admin)
|--------------------------------------------------------------------------
*/

export async function getAllUsers(

  page:number = 1,

  limit:number = 10

):Promise<UsersResponse>{



  const token =
    localStorage.getItem("token");



  const res = await fetch(

    `${API}/users?page=${page}&limit=${limit}`,

    {

      method:"GET",

      headers:{

        Authorization:
          `Bearer ${token}`,

      },

      cache:"no-store",

    }

  );



  const data =
    await res.json();



  if(!res.ok){

    throw new Error(

      data.message ||
      "Failed to fetch users"

    );

  }



  return {


    users:

      data.data || [],



    pagination:

      data.pagination || {

        page:1,

        limit:10,

        totalUsers:0,

        totalPages:1,

      },


  };


}









/*
|--------------------------------------------------------------------------
| Get Single User (Admin)
|--------------------------------------------------------------------------
*/

export async function getUserById(

  id:string

):Promise<User>{



  const token =
    localStorage.getItem("token");



  const res = await fetch(

    `${API}/users/${id}`,

    {

      method:"GET",

      headers:{

        Authorization:
          `Bearer ${token}`,

      },

      cache:"no-store",

    }

  );



  const data =
    await res.json();



  if(!res.ok){

    throw new Error(

      data.message ||
      "Failed to fetch user"

    );

  }



  return data.data;


}











/*
|--------------------------------------------------------------------------
| Update User Role
|--------------------------------------------------------------------------
*/

export async function updateUserRole(

  id:string,

  role:UserRole

):Promise<User>{



  const token =
    localStorage.getItem("token");



  const res = await fetch(

    `${API}/users/${id}/role`,

    {

      method:"PATCH",


      headers:{

        "Content-Type":
          "application/json",


        Authorization:
          `Bearer ${token}`,

      },


      body:JSON.stringify({

        role,

      }),


    }

  );



  const data =
    await res.json();



  if(!res.ok){

    throw new Error(

      data.message ||
      "Failed to update user role"

    );

  }



  return data.data;


}











/*
|--------------------------------------------------------------------------
| Delete User
|--------------------------------------------------------------------------
*/

export async function deleteUser(

  id:string

){



  const token =
    localStorage.getItem("token");



  const res = await fetch(

    `${API}/users/${id}`,

    {

      method:"DELETE",


      headers:{

        Authorization:
          `Bearer ${token}`,

      },


    }

  );



  const data =
    await res.json();



  if(!res.ok){

    throw new Error(

      data.message ||
      "Failed to delete user"

    );

  }



  return data;


}