import { API } from "./api";


export interface AdminStats {

  totalUsers:number;

  totalOwners:number;

  totalProperties:number;

  totalInquiries:number;

}



async function fetchJson(
  url:string,
  options?:RequestInit
){

  const res =
    await fetch(
      url,
      {
        ...options,
        cache:"no-store",
      }
    );


  const text =
    await res.text();


  let data;


  try{

    data =
      JSON.parse(text);

  }
  catch{

    console.log(
      "Invalid JSON response from:",
      url
    );

    console.log(text);

    throw new Error(
      "Server returned invalid response"
    );

  }



  if(!res.ok){

    throw new Error(
      data.message ||
      "Request failed"
    );

  }


  return data;

}





export async function getAdminStats()
:Promise<AdminStats>{


  const token =
    localStorage.getItem("token");



  const headers = {

    Authorization:
      `Bearer ${token}`,

  };




  const [

    usersData,

    propertiesData,

    inquiriesData,

  ] = await Promise.all([



    fetchJson(

      `${API}/users?page=1&limit=1000`,

      {
        headers,
      }

    ),




    fetchJson(

      `${API}/properties?page=1&limit=1000`,

      {
        headers,
      }

    ),




    fetchJson(

      `${API}/inquiries`,

      {
        headers,
      }

    ),



  ]);







  const users =
    usersData.data || [];



  const properties =
    propertiesData.data || [];



  const inquiries =
    inquiriesData.data || [];






  return {


    totalUsers:

      usersData.pagination?.totalUsers ??
      users.length,




    totalOwners:

      users.filter(
        (user:any)=>
          user.role === "owner"
      ).length,




    totalProperties:

      propertiesData.pagination?.total ??
      properties.length,




    totalInquiries:

      inquiriesData.pagination?.total ??
      inquiries.length,


  };


}