"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  MessageSquare,
  User,
  CheckCircle,
  Search,
  Heart,
  Settings,
} from "lucide-react";

import {
  getMyInquiries,
} from "@/lib/inquiryApi";


interface UserData {

  name: string;
  email: string;
  role: string;
  status?: string;

}



export default function UserDashboardPage() {


  const [user, setUser] =
    useState<UserData | null>(null);


  const [inquiryCount, setInquiryCount] =
    useState(0);


  const [loading, setLoading] =
    useState(true);



  useEffect(() => {


    async function loadDashboard() {


      try {


        const storedUser =
          localStorage.getItem("user");


        if (storedUser) {

          const userData =
            JSON.parse(storedUser);


          setUser(userData);

        }



        const inquiries =
          await getMyInquiries();


        setInquiryCount(
          inquiries.length
        );



      } catch (error) {


        console.error(error);


        toast.error(
          "Failed to load dashboard"
        );


      } finally {


        setLoading(false);


      }


    }



    loadDashboard();


  }, []);




return (

  <div className="space-y-10">

    {/* Welcome Section */}

    <section
      className="
        rounded-3xl
        bg-gradient-to-r
        from-[#1E3A5F]
        to-[#315d8a]
        p-6
        text-white
        shadow-sm
        sm:p-8
      "
    >

      <h1
        className="
          text-2xl
          font-bold
          leading-tight
          sm:text-3xl
          lg:text-4xl
        "
      >
        Welcome{" "}
        {user?.name || "User"} 👋
      </h1>

      <p
        className="
          mt-3
          max-w-2xl
          text-sm
          leading-7
          text-blue-100
          sm:text-base
        "
      >
        Manage your property inquiries,
        account details and activities
        from one place.
      </p>

    </section>



    {/* Statistics Cards */}

    <section
      className="
        grid
        grid-cols-1
        gap-6
        sm:grid-cols-2
        xl:grid-cols-3
      "
    >

      <StatCard
        icon={<MessageSquare size={22} />}
        title="My Inquiries"
        value={
          loading
            ? "..."
            : inquiryCount
        }
      />

      <StatCard
        icon={<User size={22} />}
        title="Account Role"
        value={user?.role || "-"}
      />

      <StatCard
        icon={<CheckCircle size={22} />}
        title="Account Status"
        value={user?.status || "Active"}
      />

    </section>



    {/* Quick Links */}

    <section
      className="
        rounded-3xl
        bg-white
        p-6
        shadow-sm
        sm:p-8
      "
    >

      <div
        className="
          flex
          flex-col
          gap-2
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >

        <div>

          <h2
            className="
              text-xl
              font-bold
              text-[#1E3A5F]
            "
          >
            Quick Links
          </h2>

          <p className="text-sm text-slate-500">
            Quickly access the features you use most.
          </p>

        </div>

      </div>

      <div
        className="
          mt-6
          grid
          grid-cols-1
          gap-5
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >

        <QuickLink
          href="/properties"
          icon={<Search size={20} />}
          title="Browse Properties"
        />

        <QuickLink
          href="/dashboard/my-inquiries"
          icon={<MessageSquare size={20} />}
          title="My Inquiries"
        />

        <QuickLink
          href="/dashboard/profile"
          icon={<Settings size={20} />}
          title="Profile"
        />

      </div>

    </section>

  </div>

);

}

function StatCard({

  icon,
  title,
  value,

}:{

  icon: React.ReactNode;
  title: string;
  value: string | number;

}) {

  return (

    <div
      className="
        flex
        h-full
        items-center
        gap-4
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >

      <div
        className="
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-2xl
          bg-blue-50
          text-[#1E3A5F]
        "
      >

        {icon}

      </div>

      <div className="min-w-0">

        <p
          className="
            text-sm
            font-medium
            text-slate-500
          "
        >

          {title}

        </p>

        <h3
          className="
            mt-1
            text-2xl
            font-bold
            capitalize
            text-[#1E3A5F]
          "
        >

          {value}

        </h3>

      </div>

    </div>

  );

}
function QuickLink({

  href,
  icon,
  title,

}:{

  href: string;
  icon: React.ReactNode;
  title: string;

}) {

  return (

    <Link

      href={href}

      className="
        flex
        h-full
        items-center
        gap-4
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#1E3A5F]
        hover:bg-blue-50
        hover:shadow-md
      "

    >

      <div
        className="
          flex
          h-12
          w-12
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-slate-100
          text-[#1E3A5F]
        "
      >

        {icon}

      </div>

      <div className="min-w-0">

        <h3
          className="
            text-base
            font-semibold
            text-slate-800
          "
        >

          {title}

        </h3>

        <p
          className="
            mt-1
            text-sm
            text-slate-500
          "
        >

          Open →

        </p>

      </div>

    </Link>

  );

}