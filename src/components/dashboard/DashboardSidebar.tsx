"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  LayoutDashboard,
  User,
  Home,
  Heart,
  Phone,
  PlusCircle,
  Building2,
  Users,
  Shield,
} from "lucide-react";


type UserRole = "user" | "owner" | "admin";


type MenuItem = {
  label: string;
  href: string;
  icon: React.ElementType;
};



export default function DashboardSidebar() {


  const pathname = usePathname();


  const [role, setRole] =
    useState<UserRole>("user");




  useEffect(() => {


    const storedUser =
      localStorage.getItem("user");



    if (storedUser) {


      try {


        const user =
          JSON.parse(storedUser);



        setRole(
          user?.role || "user"
        );


      } catch(error) {


        setRole("user");


      }


    }


  }, []);








  const userMenu: MenuItem[] = [

    {
      label: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },

    {
      label: "My Profile",
      href: "/dashboard/profile",
      icon: User,
    },


    {
      label: "My Inquiries",
      href: "/dashboard/my-inquiries",
      icon: Phone,
    },

  ];








 const ownerMenu: MenuItem[] = [

  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    label: "My Profile",
    href: "/dashboard/profile",
    icon: User,
  },

  {
    label: "Add Property",
    href: "/dashboard/add-property",
    icon: PlusCircle,
  },

  {
    label: "My Properties",
    href: "/dashboard/my-properties",
    icon: Building2,
  },

  {
    label: "Property Inquiries",
    href: "/dashboard/owner/inquiries",
    icon: Phone,
  },

  {
    label: "My Sent Inquiries",
    href: "/dashboard/my-inquiries",
    icon: Heart,
  },

];






  const adminMenu: MenuItem[] = [

    {
      label: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },

    {
      label: "Manage Users",
      href: "/dashboard/admin/manage-users",
      icon: Users,
    },

    {
      label: "Manage Properties",
      href: "/dashboard/admin/manage-properties",
      icon: Home,
    },

    {
      label: "Admin Profile",
      href: "/dashboard/profile",
      icon: Shield,
    },

  ];









  const menu =

    role === "admin"

      ? adminMenu

      : role === "owner"

      ? ownerMenu

      : userMenu;









  return (

 <aside
  className="
    w-72
    border-r
    border-slate-200
    bg-white
    min-h-screen
  "
>


      <div className="p-6">





        <div className="mb-8">


          <p

            className="
              text-xs
              uppercase
              tracking-wider
              text-slate-500
            "

          >

            {role} Panel


          </p>




          <h2

            className="
              mt-1
              text-xl
              font-bold
              text-[#1E3A5F]
            "

          >

            Dashboard


          </h2>



        </div>









        <nav className="space-y-2">


          {
            menu.map((item)=>{


              const Icon =
                item.icon;



              const active =
                pathname === item.href;





              return (

                <Link

                  key={item.href}

                  href={item.href}


                  className={`
                    
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    transition-all


                    ${
                      active

                      ?

                      `
                      bg-gradient-to-r
                      from-[#1E3A5F]
                      to-[#C89B3C]
                      text-white
                      `


                      :

                      `
                      text-slate-700
                      hover:bg-[#F5EFE6]
                      hover:text-[#1E3A5F]
                      `

                    }

                  `}

                >


                  <Icon size={18} />


                  {item.label}



                </Link>


              );


            })
          }


        </nav>






      </div>


    </aside>


  );

}