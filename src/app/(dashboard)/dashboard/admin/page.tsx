"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";

import {
  Users,
  UserRoundCheck,
  Home,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

import {
  getAdminStats,
} from "@/lib/adminApi";


interface AdminStats {

  totalUsers:number;

  totalOwners:number;

  totalProperties:number;

  totalInquiries:number;

}



export default function AdminDashboardPage(){


  const [stats,setStats] =
    useState<AdminStats | null>(null);


  const [loading,setLoading] =
    useState(true);



  useEffect(()=>{


    async function loadDashboard(){


      try{


        const data =
          await getAdminStats();


        setStats(data);


      }
      catch(error){


        console.error(error);


        toast.error(
          "Failed to load dashboard"
        );


      }
      finally{

        setLoading(false);

      }


    }



    loadDashboard();



  },[]);




  const cards = [

    {
      title:"Total Users",
      value:stats?.totalUsers,
      icon:<Users size={22}/>,
    },

    {
      title:"Total Owners",
      value:stats?.totalOwners,
      icon:<UserRoundCheck size={22}/>,
    },


    {
      title:"Properties",
      value:stats?.totalProperties,
      icon:<Home size={22}/>,
    },


    {
      title:"Inquiries",
      value:stats?.totalInquiries,
      icon:<MessageSquare size={22}/>,
    },

  ];



  return (

    <div
      className="
        space-y-6
        sm:space-y-8
      "
    >


      {/* Welcome */}


      <section
        className="
          rounded-2xl
          bg-gradient-to-r
          from-[#1E3A5F]
          to-[#315d8a]
          p-5
          text-white
          sm:p-6
        "
      >

        <h1
          className="
            text-xl
            font-bold
            sm:text-3xl
          "
        >

          Admin Dashboard 👑

        </h1>


        <p
          className="
            mt-2
            max-w-xl
            text-sm
            text-blue-100
            sm:text-base
          "
        >

          Monitor users, properties and
          inquiries from one place.

        </p>


      </section>





      {/* Stats */}


      <section
        className="
          grid
          grid-cols-1
          gap-4

          sm:grid-cols-2

          xl:grid-cols-4
        "
      >


        {
          cards.map((card)=>(


            <div
              key={card.title}
              className="
                rounded-2xl
                bg-white
                p-5
                shadow-sm

                transition

                hover:shadow-md
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
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-50
                    text-[#1E3A5F]
                  "
                >

                  {card.icon}

                </div>



                <div
                  className="
                    min-w-0
                  "
                >

                  <p
                    className="
                      truncate
                      text-sm
                      text-slate-500
                    "
                  >

                    {card.title}

                  </p>


                  <h2
                    className="
                      mt-1
                      text-2xl
                      font-bold
                      text-[#1E3A5F]

                      sm:text-3xl
                    "
                  >

                    {
                      loading
                      ?
                      "..."
                      :
                      card.value ?? 0
                    }

                  </h2>


                </div>


              </div>


            </div>


          ))
        }


      </section>





      {/* Quick Links */}


      <section
        className="
          rounded-2xl
          bg-white
          p-5
          shadow-sm

          sm:p-6
        "
      >


        <h2
          className="
            text-lg
            font-bold
            text-[#1E3A5F]

            sm:text-xl
          "
        >

          Quick Actions

        </h2>




        <div
          className="
            mt-5
            border-slate-200
            grid
            grid-cols-1
            gap-3

            sm:grid-cols-2

            lg:grid-cols-3
          "
        >



          <QuickAction

            href="/dashboard/admin/manage-users"

            title="Manage Users"

          />



          <QuickAction

            href="/dashboard/admin/manage-properties"

            title="Manage Properties"

          />

          
          <QuickAction

            href="/dashboard/profile"

            title="Admin Profile"

          />



        </div>



      </section>



    </div>

  );

}





function QuickAction({

  href,

  title,

}:{

  href:string;

  title:string;

}){


return (

<Link

href={href}

className="
group

flex

items-center

justify-between

rounded-xl

border
border-slate-300

p-4

transition

hover:border-[#6d94c7]

hover:bg-blue-50
"

>


<span
className="
font-medium
text-slate-700
"
>

{title}

</span>


<ArrowRight

size={18}

className="
text-slate-400
transition

group-hover:translate-x-1
"

/>


</Link>

);


}