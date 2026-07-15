"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface User {
  name: string;
  email: string;
  role: string;
}

export default function OwnerDashboard() {
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
          Welcome, {user?.name || "Owner"} 👋
        </h1>

        <p className="mt-2 text-slate-600">
          Manage your properties, monitor inquiries,
          and grow your property listings.
        </p>
      </section>

      {/* Statistics */}

      <section
        className="
          grid
          gap-6
          md:grid-cols-4
        "
      >
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
            Total Inquiries
          </h3>

          <p className="mt-3 text-3xl font-bold text-[#1E3A5F]">
            0
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-sm text-slate-500">
            Total Views
          </h3>

          <p className="mt-3 text-3xl font-bold text-[#1E3A5F]">
            0
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-sm text-slate-500">
            Account Status
          </h3>

          <p className="mt-3 text-lg font-semibold text-green-600">
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
            lg:grid-cols-3
          "
        >
          <Link
            href="/dashboard/add-property"
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
            Add Property
          </Link>

          <Link
            href="/dashboard/my-properties"
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
            My Properties
          </Link>

          <Link
            href="/dashboard/my-inquiries"
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
            My Sent Inquiries
          </Link>

          <Link
            href="/dashboard/owner/inquiries"
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
            Received Inquiries
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