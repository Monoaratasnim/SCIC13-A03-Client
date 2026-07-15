"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getMyInquiries,
} from "@/lib/inquiryApi";

import type {
  Inquiry,
} from "@/types/inquiry.types";

import DashboardLoader from "@/components/common/DashboardLoader";
export default function MyInquiriesPage() {


  const [inquiries,setInquiries] =
    useState<Inquiry[]>([]);


  const [loading,setLoading] =
    useState(true);



  useEffect(()=>{

    const load = async()=>{

      try{

        const data =
          await getMyInquiries();

        setInquiries(data);


      }catch(error){

        toast.error(
          "Failed to load inquiries"
        );

      }finally{

        setLoading(false);

      }

    };


    load();


  },[]);



if (loading) {
  return <DashboardLoader />;
}



  return (

    <div className="space-y-6">


      <h1
        className="
        text-3xl
        font-bold
        text-[#1E3A5F]
        "
      >
        My Sent Inquiries
      </h1>



      {
        inquiries.length === 0 ?

        (
         <div
  className="
    rounded-2xl
    bg-white
    px-8
    py-14
    text-center
    shadow-sm
  "
>
  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#1E3A5F]/10">
    <span className="text-3xl">📩</span>
  </div>

  <h2 className="text-2xl font-bold text-[#1E3A5F]">
    No Inquiries Yet
  </h2>

  <p className="mx-auto mt-3 max-w-md text-slate-500">
    You haven't sent any property inquiries yet.
    Browse available properties and contact owners to
    see your inquiries here.
  </p>
</div>
        )

        :

        inquiries.map((inquiry)=>(


          <div
            key={inquiry._id}
            className="
            rounded-2xl
            bg-white
            p-6
            shadow-sm
            space-y-4
            "
          >


            <h2
              className="
              text-xl
              font-bold
              text-[#1E3A5F]
              "
            >

              {
                typeof inquiry.property==="object"
                ?
                inquiry.property.title
                :
                "Property"
              }

            </h2>



            <p>
              Message:
            </p>


            <p className="text-gray-600">

              {inquiry.message}

            </p>




            <p>

              Owner:

              {
                typeof inquiry.owner==="object"
                ?
                inquiry.owner.name
                :
                ""
              }

            </p>



            <span
              className="
              inline-block
              rounded-full
              bg-yellow-100
              px-3
              py-1
              text-sm
              "
            >

              {inquiry.status}

            </span>



          </div>


        ))

      }



    </div>

  );

}