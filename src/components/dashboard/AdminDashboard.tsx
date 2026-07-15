"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface User {
  name: string;
  email: string;
  role: string;
}

export default function AdminDashboard() {

  const [user, setUser] =
    useState<User | null>(null);

  useEffect(() => {

    const storedUser =
      localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

  }, []);

  return (

    <div className="space-y-8">

      {/* Welcome */}

      <section
        className="
          rounded-2xl
          bg-white
          p-6
          shadow-sm
        "
      >

        <h1
          className="
            text-3xl
            font-bold
            text-[#1E3A5F]
          "
        >
          Welcome, {user?.name || "Admin"} 👋
        </h1>

        <p className="mt-2 text-slate-600">
          Manage users, property listings, reports,
          and keep the PropertyNest platform running
          smoothly.
        </p>

      </section>

      {/* Statistics */}

      <section
        className="
          grid
          gap-6
          md:grid-cols-2
          xl:grid-cols-4
        "
      >

        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <h3 className="text-sm text-slate-500">
            Total Users
          </h3>

          <p className="mt-3 text-3xl font-bold text-[#1E3A5F]">
            0
          </p>

        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <h3 className="text-sm text-slate-500">
            Total Properties
          </h3>

          <p className="mt-3 text-3xl font-bold text-[#1E3A5F]">
            0
          </p>

        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <h3 className="text-sm text-slate-500">
            Pending Reports
          </h3>

          <p className="mt-3 text-3xl font-bold text-[#1E3A5F]">
            0
          </p>

        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <h3 className="text-sm text-slate-500">
            System Status
          </h3>

          <p className="mt-3 text-lg font-semibold text-green-600">
            Healthy
          </p>

        </div>

      </section>

      {/* Quick Actions */}

      <section
        className="
          rounded-2xl
          bg-white
          p-6
          shadow-sm
        "
      >

        <h2
          className="
            text-xl
            font-semibold
            text-[#1E3A5F]
          "
        >
          Quick Actions
        </h2>

        <div
          className="
            mt-6
            grid
            gap-4
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          <Link
            href="/dashboard/users"
            className="
              rounded-xl
              bg-[#1E3A5F]
              px-5
              py-3
              text-center
              font-medium
              text-white
              transition
              hover:opacity-90
            "
          >
            Manage Users
          </Link>

          <Link
            href="/dashboard/properties"
            className="
              rounded-xl
              border
              border-slate-300
              px-5
              py-3
              text-center
              font-medium
              transition
              hover:bg-slate-50
            "
          >
            Manage Properties
          </Link>

          <Link
            href="/dashboard/reports"
            className="
              rounded-xl
              border
              border-slate-300
              px-5
              py-3
              text-center
              font-medium
              transition
              hover:bg-slate-50
            "
          >
            Review Reports
          </Link>

          <Link
            href="/dashboard/profile"
            className="
              rounded-xl
              border
              border-slate-300
              px-5
              py-3
              text-center
              font-medium
              transition
              hover:bg-slate-50
            "
          >
            Admin Profile
          </Link>

          <Link
            href="/properties"
            className="
              rounded-xl
              border
              border-slate-300
              px-5
              py-3
              text-center
              font-medium
              transition
              hover:bg-slate-50
            "
          >
            View Website
          </Link>

          <Link
            href="/contact"
            className="
              rounded-xl
              border
              border-slate-300
              px-5
              py-3
              text-center
              font-medium
              transition
              hover:bg-slate-50
            "
          >
            Support Center
          </Link>

        </div>

      </section>

    </div>

  );

}