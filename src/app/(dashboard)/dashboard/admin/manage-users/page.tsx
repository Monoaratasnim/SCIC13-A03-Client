"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  Trash2,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  getAllUsers,
  updateUserRole,
  deleteUser,
} from "@/lib/userApi";

import type {
  User,
  UserRole,
} from "@/types/user.types";



export default function ManageUsersPage() {


  const [users,setUsers] =
    useState<User[]>([]);


  const [loading,setLoading] =
    useState(true);


  const [page,setPage] =
    useState(1);



  const [pagination,setPagination] =
    useState({

      page:1,

      limit:10,

      totalUsers:0,

      totalPages:1,

    });





  const getUserId = (user:User)=>{

    return user.id || user._id || "";

  };







  async function fetchUsers(){


    try{


      setLoading(true);



      const result =
        await getAllUsers(
          page,
          10
        );



      setUsers(
        result.users
      );



      setPagination(
        result.pagination
      );



    }catch(error:any){


      toast.error(
        error.message ||
        "Failed to load users"
      );


    }finally{


      setLoading(false);


    }


  }





  useEffect(()=>{


    fetchUsers();


  },[page]);









  async function handleRoleChange(

    id:string,

    role:UserRole

  ){


    try{


      await updateUserRole(
        id,
        role
      );


      toast.success(
        "Role updated successfully"
      );


      fetchUsers();



    }catch(error:any){


      toast.error(
        error.message
      );


    }


  }









  async function handleDelete(

    id:string

  ){


    const confirmDelete =
      window.confirm(
        "Delete this user?"
      );


    if(!confirmDelete)
      return;



    try{


      await deleteUser(id);



      toast.success(
        "User deleted"
      );



      fetchUsers();



    }catch(error:any){


      toast.error(
        error.message
      );


    }


  }









  return (

    <div
      className="
        space-y-6
      "
    >




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

            <Users size={26}/>

          </div>



          <div>

            <h1
              className="
                text-2xl
                font-bold
                text-[#1E3A5F]
              "
            >
              Manage Users
            </h1>


            <p
              className="
                text-sm
                text-slate-500
              "
            >
              Manage accounts, roles and permissions
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

          Loading users...

        </div>

      )}








      {/* Table */}


      {!loading && users.length > 0 && (

      <div
        className="
          overflow-hidden
          rounded-2xl
          border
          border-slate-200
          bg-white
          shadow-sm
        "
      >


        <div
          className="
            overflow-x-auto
          "
        >


        <table
          className="
            min-w-[800px]
            w-full
          "
        >


          <thead>

            <tr
              className="
                bg-slate-50
                border-b
                border-slate-200
              "
            >

              <th className="p-4 text-left text-sm font-semibold text-slate-600">
                User
              </th>


              <th className="p-4 text-left text-sm font-semibold text-slate-600">
                Email
              </th>


              <th className="p-4 text-left text-sm font-semibold text-slate-600">
                Role
              </th>


              <th className="p-4 text-left text-sm font-semibold text-slate-600">
                Joined
              </th>


              <th className="p-4 text-center text-sm font-semibold text-slate-600">
                Action
              </th>


            </tr>

          </thead>





          <tbody>


          {
          users.map((user)=>(


            <tr
              key={getUserId(user)}
              className="
                border-b
                border-slate-100
                hover:bg-slate-50
                transition
              "
            >


              <td
                className="
                  p-4
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-[#1E3A5F]
                      text-white
                      font-semibold
                    "
                  >

                    {user.name.charAt(0)}

                  </div>


                  <span className="font-medium">
                    {user.name}
                  </span>


                </div>


              </td>





              <td
                className="
                  p-4
                  text-slate-600
                "
              >

                {user.email}

              </td>







              <td className="p-4">


                <select

                  value={user.role}

                  onChange={(e)=>
                    handleRoleChange(
                      getUserId(user),
                      e.target.value as UserRole
                    )
                  }


                  className="
                    rounded-lg
                    border
                    border-slate-300
                    bg-white
                    px-3
                    py-2
                    text-sm
                    outline-none
                  "

                >

                  <option value="user">
                    User
                  </option>


                  <option value="owner">
                    Owner
                  </option>


                  <option value="admin">
                    Admin
                  </option>


                </select>


              </td>






              <td
                className="
                  p-4
                  text-sm
                  text-slate-500
                "
              >

                {
                new Date(
                  user.createdAt
                ).toLocaleDateString()
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
                      getUserId(user)
                    )
                  }


                  className="
                    rounded-lg
                    p-2
                    text-red-600
                    hover:bg-red-50
                    transition
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


      {!loading && users.length > 0 && (

      <div
        className="
          space-y-4
          md:hidden
        "
      >

      {
      users.map((user)=>(


        <div
          key={getUserId(user)}
          className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-5
            shadow-sm
          "
        >


          <div
            className="
              flex
              items-center
              gap-3
            "
          >

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[#1E3A5F]
                text-white
                font-semibold
              "
            >
              {user.name.charAt(0)}
            </div>


            <div>

              <h3 className="font-semibold">
                {user.name}
              </h3>

              <p className="text-sm text-slate-500">
                {user.email}
              </p>

            </div>


          </div>





          <select

            value={user.role}

            onChange={(e)=>
              handleRoleChange(
                getUserId(user),
                e.target.value as UserRole
              )
            }


            className="
              mt-5
              w-full
              rounded-lg
              border
              px-3
              py-2
            "

          >

            <option value="user">
              User
            </option>

            <option value="owner">
              Owner
            </option>

            <option value="admin">
              Admin
            </option>


          </select>





          <button

            onClick={()=>
              handleDelete(
                getUserId(user)
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
            Delete User

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

          disabled={page===1}

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

          {page} / {pagination.totalPages}

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