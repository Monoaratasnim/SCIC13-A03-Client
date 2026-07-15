"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  Trash2,
  Home,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  getProperties,
  deleteProperty,
} from "@/lib/propertyApi";

import type {
  Property,
} from "@/types/property.types";



export default function ManagePropertiesPage() {


  const [properties,setProperties] =
    useState<Property[]>([]);



  const [loading,setLoading] =
    useState(true);



  const [page,setPage] =
    useState(1);



  const [pagination,setPagination] =
    useState({

      page:1,

      limit:8,

      total:0,

      totalPages:1,

    });





  const getPropertyId = (
    property:Property
  )=>{

    return property._id || "";

  };






  async function fetchProperties(){


    try{


      setLoading(true);



      const result =
        await getProperties(
          page,
          8
        );



      setProperties(
        result.properties
      );



      setPagination(
        result.pagination
      );



    }catch(error:any){


      toast.error(

        error.message ||
        "Failed to load properties"

      );


    }finally{


      setLoading(false);


    }


  }






  useEffect(()=>{


    fetchProperties();


  },[page]);








  async function handleDelete(

    id:string

  ){


    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this property?"
      );



    if(!confirmDelete)
      return;



    try{


      await deleteProperty(id);



      toast.success(
        "Property deleted successfully"
      );



      fetchProperties();



    }catch(error:any){


      toast.error(

        error.message ||
        "Failed to delete property"

      );


    }


  }









  return (

    <div className="space-y-6">



      {/* Header */}

      <section
        className="
          rounded-2xl
          bg-white
          p-6
          shadow-sm
        "
      >

        <div
          className="
            flex
            items-center
            gap-4
          "
        >

          <div
            className="
              rounded-xl
              bg-blue-100
              p-3
              text-blue-700
            "
          >

            <Home size={26}/>

          </div>



          <div>

            <h1
              className="
                text-2xl
                font-bold
                text-[#1E3A5F]
              "
            >

              Manage Properties

            </h1>



            <p
              className="
                text-sm
                text-slate-500
              "
            >

              Manage listings, owners and property details

            </p>


          </div>


        </div>


      </section>








      {/* Loading */}

      {loading && (

        <div
          className="
            rounded-2xl
            bg-white
            p-10
            text-center
            text-slate-500
          "
        >

          Loading properties...

        </div>

      )}








      {/* Empty */}

      {!loading &&
      properties.length===0 && (

        <div
          className="
            rounded-2xl
            bg-white
            p-10
            text-center
            text-slate-500
          "
        >

          No properties available

        </div>

      )}








      {/* Desktop Table */}


      {!loading &&
      properties.length>0 && (


      <div
        className="
          hidden
          overflow-hidden
          rounded-2xl
          border
          border-slate-200
          bg-white
          shadow-sm
          md:block
        "
      >



        <div
          className="
            overflow-x-auto
          "
        >



        <table
          className="
            w-full
            min-w-[900px]
          "
        >



          <thead>


            <tr
              className="
                border-b
                border-slate-200
                bg-slate-50
              "
            >


              <th
                className="
                  p-4
                  text-left
                  text-sm
                  font-semibold
                  text-slate-600
                "
              >

                Property

              </th>




              <th
                className="
                  p-4
                  text-left
                  text-sm
                  font-semibold
                  text-slate-600
                "
              >

                Owner

              </th>




              <th
                className="
                  p-4
                  text-left
                  text-sm
                  font-semibold
                  text-slate-600
                "
              >

                Price

              </th>




              <th
                className="
                  p-4
                  text-left
                  text-sm
                  font-semibold
                  text-slate-600
                "
              >

                Category

              </th>




              <th
                className="
                  p-4
                  text-left
                  text-sm
                  font-semibold
                  text-slate-600
                "
              >

                Date

              </th>




              <th
                className="
                  p-4
                  text-center
                  text-sm
                  font-semibold
                  text-slate-600
                "
              >

                Action

              </th>



            </tr>


          </thead>








          <tbody>


          {
          properties.map((property)=>(


            <tr

              key={
                getPropertyId(property)
              }

              className="
                border-b
                border-slate-100
                transition
                hover:bg-slate-50
              "

            >



              <td className="p-4">


                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >


                  <img

                    src={
                      property.images?.[0]
                    }

                    alt={
                      property.title
                    }

                    className="
                      h-12
                      w-12
                      rounded-lg
                      object-cover
                    "

                  />


                  <div>


                    <p
                      className="
                        font-medium
                        text-[#1E3A5F]
                      "
                    >

                      {property.title}

                    </p>


                    <p
                      className="
                        text-sm
                        text-slate-500
                      "
                    >

                      {property.location}

                    </p>


                  </div>


                </div>


              </td>







              <td className="p-4">


                <p className="font-medium">

                  {
                    property.owner?.name ||
                    "N/A"
                  }

                </p>


                <p
                  className="
                    text-sm
                    text-slate-500
                  "
                >

                  {
                    property.owner?.email
                  }

                </p>


              </td>







              <td
                className="
                  p-4
                  font-semibold
                "
              >

                $
                {
                  property.price.toLocaleString()
                }

              </td>







              <td className="p-4">


                <span
                  className="
                    rounded-full
                    bg-blue-50
                    px-3
                    py-1
                    text-xs
                    text-blue-700
                  "
                >

                  {property.category}

                </span>


              </td>







              <td
                className="
                  p-4
                  text-sm
                  text-slate-500
                "
              >

                {
                  property.createdAt &&
                  new Date(
                    property.createdAt
                  )
                  .toLocaleDateString()
                }

              </td>







              <td
                className="
                  p-4
                  text-center
                "
              >

                <button

                  onClick={()=>
                    handleDelete(
                      property._id
                    )
                  }

                  className="
                    rounded-lg
                    p-2
                    text-red-600
                    transition
                    hover:bg-red-50
                  "

                >

                  <Trash2 size={18}/>


                </button>


              </td>





            </tr>


          ))
          }


          </tbody>


        </table>


        </div>


      </div>


      )}









      {/* Mobile Cards */}


      {!loading &&
      properties.length>0 && (


      <div
        className="
          space-y-4
          md:hidden
        "
      >


      {
      properties.map((property)=>(


        <div

          key={property._id}

          className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-5
            shadow-sm
          "

        >



          <img

            src={
              property.images?.[0]
            }

            className="
              h-40
              w-full
              rounded-xl
              object-cover
            "

            alt=""
          />




          <h3
            className="
              mt-4
              font-semibold
              text-[#1E3A5F]
            "
          >

            {property.title}

          </h3>




          <p
            className="
              text-sm
              text-slate-500
            "
          >

            {property.location}

          </p>




          <p className="mt-3 font-semibold">

            $
            {
              property.price.toLocaleString()
            }

          </p>




          <button

            onClick={()=>
              handleDelete(
                property._id
              )
            }


            className="
              mt-4
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-red-50
              py-2
              text-red-600
            "

          >

            <Trash2 size={17}/>

            Delete Property

          </button>



        </div>


      ))
      }


      </div>


      )}









      {/* Pagination */}


      {
      pagination.totalPages > 1 && (

      <div
        className="
          flex
          items-center
          justify-center
          gap-4
        "
      >


        <button

          disabled={
            page===1
          }

          onClick={()=>
            setPage(page-1)
          }

          className="
            flex
            items-center
            gap-2
            rounded-lg
            border
            px-4
            py-2
            disabled:opacity-50
          "

        >

          <ChevronLeft size={18}/>

          Previous

        </button>





        <span
          className="
            rounded-lg
            bg-[#1E3A5F]
            px-4
            py-2
            text-white
          "
        >

          {page}

          /

          {pagination.totalPages}


        </span>





        <button

          disabled={
            page===pagination.totalPages
          }


          onClick={()=>
            setPage(page+1)
          }


          className="
            flex
            items-center
            gap-2
            rounded-lg
            border
            px-4
            py-2
            disabled:opacity-50
          "

        >

          Next

          <ChevronRight size={18}/>


        </button>



      </div>

      )
      }



    </div>

  );

}