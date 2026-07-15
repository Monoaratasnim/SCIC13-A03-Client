import { API } from "./api";

import type {
  Property,
} from "@/types/property.types";



/*
|--------------------------------------------------------------------------
| Properties Response Type
|--------------------------------------------------------------------------
*/

export interface PropertiesResponse {

  properties: Property[];

  pagination: {

    page:number;

    limit:number;

    total:number;

    totalPages:number;

  };

}





/*
|--------------------------------------------------------------------------
| Get All Properties (Admin / Public)
|--------------------------------------------------------------------------
*/

export async function getProperties(

  page:number = 1,

  limit:number = 8

):Promise<PropertiesResponse>{



  const token =
    localStorage.getItem("token");



  const res = await fetch(

    `${API}/properties?page=${page}&limit=${limit}`,

    {

      method:"GET",

      headers: token
        ? {

            Authorization:
              `Bearer ${token}`,

          }

        : {},


      cache:"no-store",

    }

  );




  const data =
    await res.json();




  if(!res.ok){

    throw new Error(

      data.message ||
      "Failed to fetch properties"

    );

  }




  return {

    properties:
      data.data,


    pagination:
      data.pagination,

  };


}









/*
|--------------------------------------------------------------------------
| Get Single Property
|--------------------------------------------------------------------------
*/

export async function getProperty(

  id:string

):Promise<Property>{



  const res = await fetch(

    `${API}/properties/${id}`,

    {

      cache:"no-store",

    }

  );



  const data =
    await res.json();



  if(!res.ok){

    throw new Error(

      data.message ||
      "Failed to fetch property"

    );

  }



  return data.data;


}









/*
|--------------------------------------------------------------------------
| Get Logged In Owner Properties
|--------------------------------------------------------------------------
*/

export async function getMyProperties()

:Promise<Property[]> {



  const token =
    localStorage.getItem("token");



  if(!token){

    throw new Error(
      "Please login first"
    );

  }




  const res = await fetch(

    `${API}/properties/my-properties`,

    {

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
      "Failed to fetch your properties"

    );

  }



  return data.data;


}









/*
|--------------------------------------------------------------------------
| Add Property
|--------------------------------------------------------------------------
*/

export async function addProperty(

  formData:FormData

):Promise<Property>{



  const token =
    localStorage.getItem("token");



  if(!token){

    throw new Error(
      "Please login first"
    );

  }



  const res = await fetch(

    `${API}/properties`,

    {

      method:"POST",


      headers:{

        Authorization:
          `Bearer ${token}`,

      },


      body:formData,

    }

  );



  const data =
    await res.json();




  if(!res.ok){

    let message =
      "Failed to add property";



    if(Array.isArray(data.message)){


      message =
        data.message
        .map(
          (item:any)=>
            item.message
        )
        .join("\n");


    }

    else if(
      typeof data.message==="string"
    ){

      message =
        data.message;

    }



    throw new Error(message);


  }



  return data.data;


}









/*
|--------------------------------------------------------------------------
| Update Property
|--------------------------------------------------------------------------
*/

export async function updateProperty(

  id:string,

  formData:FormData

):Promise<Property>{



  const token =
    localStorage.getItem("token");



  if(!token){

    throw new Error(
      "Please login first"
    );

  }




  const res = await fetch(

    `${API}/properties/${id}`,

    {

      method:"PATCH",


      headers:{

        Authorization:
          `Bearer ${token}`,

      },


      body:formData,


    }

  );



  const data =
    await res.json();




  if(!res.ok){

    let message =
      "Failed to update property";



    if(Array.isArray(data.message)){


      message =
        data.message
        .map(
          (item:any)=>
            item.message
        )
        .join("\n");


    }

    else if(
      typeof data.message==="string"
    ){

      message =
        data.message;

    }



    throw new Error(message);


  }




  return data.data;


}









/*
|--------------------------------------------------------------------------
| Delete Property
|--------------------------------------------------------------------------
*/

export async function deleteProperty(

  id:string

):Promise<void>{



  const token =
    localStorage.getItem("token");



  if(!token){

    throw new Error(
      "Please login first"
    );

  }




  const res = await fetch(

    `${API}/properties/${id}`,

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


    let message =
      "Failed to delete property";



    if(Array.isArray(data.message)){


      message =
        data.message
        .map(
          (item:any)=>
            item.message
        )
        .join("\n");


    }

    else if(
      typeof data.message==="string"
    ){

      message =
        data.message;

    }



    throw new Error(message);


  }



}