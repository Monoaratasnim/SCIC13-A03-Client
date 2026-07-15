"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  Home,
  MessageSquare,
  User,
  CheckCircle,
  PlusCircle,
  Building2,
  Settings,
} from "lucide-react";

import {
  getMyProperties,
} from "@/lib/propertyApi";

import {
  getOwnerInquiries,
} from "@/lib/inquiryApi";

interface UserData {

  name: string;
  email: string;
  role: string;
  status?: string;

}

export default function OwnerDashboardPage() {

  const [user, setUser] =
    useState<UserData | null>(null);

  const [propertyCount, setPropertyCount] =
    useState(0);

  const [inquiryCount, setInquiryCount] =
    useState(0);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    async function loadData() {

      try {

        const storedUser =
          localStorage.getItem("user");

        if (storedUser) {

          setUser(
            JSON.parse(storedUser)
          );

        }

        const properties =
          await getMyProperties();

        setPropertyCount(
          properties.length
        );

        const inquiries =
          await getOwnerInquiries();

        setInquiryCount(
          inquiries.length
        );

      } catch (error) {

        console.log(error);

        toast.error(
          "Failed to load dashboard"
        );

      } finally {

        setLoading(false);

      }

    }

    loadData();

  }, []);

  return (

    <div className="space-y-10">

      {/* Welcome */}

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
          {user?.name || "Owner"} 👋

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

          Manage your property listings,
          customer inquiries and account
          information from one place.

        </p>

      </section>



      {/* Statistics */}

      <section
        className="
          grid
          grid-cols-1
          gap-6
          sm:grid-cols-2
          xl:grid-cols-4
        "
      >

        <StatCard
          icon={<Building2 size={22} />}
          title="My Properties"
          value={
            loading
              ? "..."
              : propertyCount
          }
        />

        <StatCard
          icon={<MessageSquare size={22} />}
          title="Inquiries"
          value={
            loading
              ? "..."
              : inquiryCount
          }
        />

        <StatCard
          icon={<User size={22} />}
          title="Role"
          value={
            user?.role || "-"
          }
        />

        <StatCard
          icon={<CheckCircle size={22} />}
          title="Status"
          value={
            user?.status || "Active"
          }
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

          <p
            className="
              mt-1
              text-sm
              text-slate-500
            "
          >

            Quickly access your owner tools.

          </p>

        </div>

        <div
          className="
            mt-6
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >

          <QuickLink
            href="/dashboard/add-property"
            icon={<PlusCircle size={20} />}
            title="Add Property"
          />

          <QuickLink
            href="/dashboard/my-properties"
            icon={<Home size={20} />}
            title="My Properties"
          />

          <QuickLink
            href="/dashboard/owner/inquiries"
            icon={<MessageSquare size={20} />}
            title="Owner Inquiries"
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
        hover:border-[#1E3A5F]/20
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

      <div className="min-w-0 flex-1">

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
            truncate
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
        group
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
          transition-colors
          group-hover:bg-[#1E3A5F]
          group-hover:text-white
        "
      >

        {icon}

      </div>

      <div className="min-w-0 flex-1">

        <h3
          className="
            truncate
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