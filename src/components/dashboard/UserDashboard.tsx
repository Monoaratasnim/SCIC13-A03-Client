"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface User {
  name: string;
  email: string;
  role: string;
}

export default function UserDashboard() {

  const [user, setUser] =
    useState<User | null>(null);

  useEffect(() => {

    const storedUser =
      localStorage.getItem("user");

    if (storedUser) {

      setUser(
        JSON.parse(storedUser)
      );

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
          Welcome, {user?.name || "User"} 👋
        </h1>

        <p className="mt-2 text-slate-600">
          Manage your profile, explore properties,
          save your favourite listings, and contact
          property owners.
        </p>

      </section>

      {/* Statistics */}

      <section
        className="
          grid
          gap-6
          md:grid-cols-3
        "
      >

        <div
          className="
            rounded-2xl
            bg-white
            p-6
            shadow-sm
          "
        >

          <h3 className="text-sm text-slate-500">
            Saved Properties
          </h3>

          <p
            className="
              mt-3
              text-3xl
              font-bold
              text-[#1E3A5F]
            "
          >
            0
          </p>

        </div>

        <div
          className="
            rounded-2xl
            bg-white
            p-6
            shadow-sm
          "
        >

          <h3 className="text-sm text-slate-500">
            Contact Requests
          </h3>

          <p
            className="
              mt-3
              text-3xl
              font-bold
              text-[#1E3A5F]
            "
          >
            0
          </p>

        </div>

        <div
          className="
            rounded-2xl
            bg-white
            p-6
            shadow-sm
          "
        >

          <h3 className="text-sm text-slate-500">
            Profile Status
          </h3>

          <p
            className="
              mt-3
              text-lg
              font-semibold
              text-green-600
            "
          >
            Active
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
            lg:grid-cols-2
          "
        >

          <Link
            href="/properties"
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
            Browse Properties
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
            Edit Profile
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
            Contact Support
          </Link>

        </div>

      </section>

    </div>

  );

}