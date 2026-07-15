"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getMyInquiries,
} from "@/lib/inquiryApi";

import type {
  Inquiry,
} from "@/types/inquiry.types";


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



  if(loading){

    return (
      <div>
        Loading inquiries...
      </div>
    );

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
            p-10
            text-center
            "
          >

            No inquiries sent yet

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