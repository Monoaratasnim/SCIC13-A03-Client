"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Spinner from "@/components/common/Spinner";

import {
  getMyProperties,
  deleteProperty,
} from "@/lib/propertyApi";

import type { Property } from "@/types/property.types";

export default function MyPropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProperties();
  }, []);

  async function loadProperties() {
    try {
      setLoading(true);

      const data = await getMyProperties();

      setProperties(data);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Failed to load properties.");
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this property?"
    );

    if (!confirmDelete) return;

    try {
      await deleteProperty(id);

      setProperties((prev) =>
        prev.filter((property) => property._id !== id)
      );

      toast.success("Property deleted successfully.");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Failed to delete property.");
      }
    }
  }

  if (loading) {
    return <Spinner text="Loading your properties..." />;
  }

  return (
    <div className="space-y-6 overflow-x-hidden">

      {/* ==========================================
          Header
      ========================================== */}

      <section
        className="
          rounded-3xl
          bg-white
          p-5
          shadow-sm
          ring-1
          ring-slate-100
          sm:p-6
          lg:p-8
        "
      >
        <div
          className="
            flex
            flex-col
            gap-5
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <div className="min-w-0">

            <h1
              className="
                text-2xl
                font-bold
                text-[#1E3A5F]
                sm:text-3xl
              "
            >
              My Properties
            </h1>

            <p
              className="
                mt-2
                max-w-2xl
                text-sm
                text-slate-500
                sm:text-base
              "
            >
              Manage, monitor and organize all your property listings.
            </p>

          </div>

          <Link
            href="/dashboard/add-property"
            className="
              inline-flex
              w-full
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-r
              from-[#1E3A5F]
              to-[#C89B3C]
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              duration-200
              hover:scale-[1.02]
              hover:shadow-lg
              sm:w-auto
            "
          >
            + Add Property
          </Link>

        </div>
      </section>

      {/* ==========================================
          Desktop Table
      ========================================== */}

      <section
        className="
          hidden
          overflow-hidden
          rounded-3xl
          bg-white
          shadow-sm
          ring-1
          ring-slate-100
          lg:block
        "
      >
        <div className="overflow-x-auto">

          <table className="w-full table-fixed">

            <thead
              className="
                border-b
                border-slate-100
                bg-slate-50
              "
            >
              <tr>

                <th className="w-[38%] px-8 py-5 text-left text-sm font-semibold text-slate-600">
                  Property
                </th>

                <th className="w-[22%] px-6 py-5 text-left text-sm font-semibold text-slate-600">
                  Location
                </th>

                <th className="w-[15%] px-6 py-5 text-left text-sm font-semibold text-slate-600">
                  Price
                </th>

                <th className="w-[12%] px-6 py-5 text-left text-sm font-semibold text-slate-600">
                  Status
                </th>

                <th className="w-[13%] px-6 py-5 text-center text-sm font-semibold text-slate-600">
                  Actions
                </th>

              </tr>
            </thead>

            <tbody>
              {properties.length === 0 ? (

  <tr>

    <td
      colSpan={5}
      className="py-20 text-center"
    >
      <h3 className="text-xl font-semibold text-[#1E3A5F]">
        No Properties Found
      </h3>

      <p className="mt-2 text-slate-500">
        Start by adding your first property.
      </p>

      <Link
        href="/dashboard/add-property"
        className="
          mt-6
          inline-flex
          rounded-xl
          bg-[#1E3A5F]
          px-6
          py-3
          font-medium
          text-white
          transition
          hover:bg-[#173250]
        "
      >
        Add Property
      </Link>
    </td>

  </tr>

) : (

  properties.map((property) => (

    <tr
      key={property._id}
      className="
        border-b
        border-slate-100
        transition-colors
        hover:bg-slate-50
      "
    >

      {/* Property */}

      <td className="px-8 py-5">

        <div className="flex items-center gap-4 min-w-0">

          <Image
            src={
              property.images?.[0] ??
              "/placeholder-property.jpg"
            }
            alt={property.title}
            width={112}
            height={80}
            className="
              h-20
              w-28
              shrink-0
              rounded-2xl
              object-cover
            "
          />

          <div className="min-w-0 flex-1">

            <h3
              className="
                truncate
                text-base
                font-semibold
                text-[#1E3A5F]
              "
              title={property.title}
            >
              {property.title}
            </h3>

            <p className="mt-1 truncate text-sm text-slate-500">
              {property.propertyType}
            </p>

          </div>

        </div>

      </td>

      {/* Location */}

      <td className="px-6 py-5">

        <div
          className="flex items-center gap-2 min-w-0"
          title={property.location}
        >
          <span className="shrink-0">
            📍
          </span>

          <span className="truncate text-slate-600">
            {property.location}
          </span>
        </div>

      </td>

      {/* Price */}

      <td className="px-6 py-5">

        <div className="flex items-center whitespace-nowrap">

          <span className="mr-1 text-[#C89B3C]">
            ৳
          </span>

          <span
            className="
              text-lg
              font-bold
              text-[#C89B3C]
            "
          >
            {property.price.toLocaleString()}
          </span>

        </div>

      </td>

      {/* Status */}

      <td className="px-6 py-5">

        <span
          className={`
            inline-flex
            rounded-full
            px-4
            py-1.5
            text-xs
            font-semibold
            capitalize

            ${
              property.status === "available"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }
          `}
        >
          {property.status}
        </span>

      </td>

      {/* Actions */}

      <td className="px-6 py-5">

        <div className="flex items-center justify-center gap-2">

          <Link
            href={`/properties/${property._id}`}
            className="
              rounded-xl
              border
              border-slate-200
              px-4
              py-2
              text-sm
              font-medium
              transition
              hover:bg-slate-100
            "
          >
            View
          </Link>

          <button
            onClick={() =>
              handleDelete(property._id)
            }
            className="
              rounded-xl
              bg-red-500
              px-4
              py-2
              text-sm
              font-medium
              text-white
              transition
              hover:bg-red-600
            "
          >
            Delete
          </button>

        </div>

      </td>

    </tr>

  ))

)}

</tbody>

</table>

</div>

</section>
      {/* ============================
          Mobile Cards
      ============================ */}

      <section className="grid gap-6 lg:hidden">

        {properties.length === 0 ? (

          <div
            className="
              rounded-3xl
              bg-white
              p-10
              text-center
              shadow-sm
              ring-1
              ring-slate-100
            "
          >
            <h2 className="text-xl font-bold text-[#1E3A5F]">
              No Properties Found
            </h2>

            <p className="mt-2 text-slate-500">
              Start by adding your first property.
            </p>

            <Link
              href="/dashboard/add-property"
              className="
                mt-6
                inline-flex
                rounded-xl
                bg-[#1E3A5F]
                px-6
                py-3
                font-medium
                text-white
                transition
                hover:bg-[#173250]
              "
            >
              Add Property
            </Link>

          </div>

        ) : (

          properties.map((property) => (

            <article
              key={property._id}
              className="
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-sm
                ring-1
                ring-slate-100
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >

              {/* Image */}

              <div className="relative h-56 w-full">

                <Image
                  src={
                    property.images?.[0] ??
                    "/placeholder-property.jpg"
                  }
                  alt={property.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />

                <span
                  className="
                    absolute
                    left-4
                    top-4
                    rounded-full
                    bg-white/90
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    text-[#1E3A5F]
                    backdrop-blur
                  "
                >
                  {property.propertyType}
                </span>

              </div>

              {/* Content */}

              <div className="space-y-5 p-5">

                <div>

                  <h2
                    className="
                      truncate
                      text-xl
                      font-bold
                      text-[#1E3A5F]
                    "
                  >
                    {property.title}
                  </h2>

                  <div className="mt-3 flex items-center gap-2">

                    <span className="shrink-0">
                      📍
                    </span>

                    <p
                      className="truncate text-slate-500"
                      title={property.location}
                    >
                      {property.location}
                    </p>

                  </div>

                </div>

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >

                  <span
                    className="
                      whitespace-nowrap
                      text-2xl
                      font-bold
                      text-[#C89B3C]
                    "
                  >
                    ৳ {property.price.toLocaleString()}
                  </span>

                  <span
                    className={`
                      rounded-full
                      px-4
                      py-1.5
                      text-xs
                      font-semibold
                      capitalize

                      ${
                        property.status === "available"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }
                    `}
                  >
                    {property.status}
                  </span>

                </div>

                {/* Stats */}

                <div
                  className="
                    grid
                    grid-cols-3
                    rounded-2xl
                    bg-slate-50
                    p-4
                  "
                >

                  <div className="text-center">

                    <p className="text-lg font-bold text-[#1E3A5F]">
                      {property.bedrooms ?? "-"}
                    </p>

                    <span className="text-xs text-slate-500">
                      Beds
                    </span>

                  </div>

                  <div className="text-center">

                    <p className="text-lg font-bold text-[#1E3A5F]">
                      {property.bathrooms ?? "-"}
                    </p>

                    <span className="text-xs text-slate-500">
                      Baths
                    </span>

                  </div>

                  <div className="text-center">

                    <p className="text-lg font-bold text-[#1E3A5F]">
                      {property.area ?? "-"}
                    </p>

                    <span className="text-xs text-slate-500">
                      Sqft
                    </span>

                  </div>

                </div>

                {/* Buttons */}

                <div className="grid grid-cols-2 gap-3">

                  <Link
                    href={`/properties/${property._id}`}
                    className="
                      rounded-xl
                      border
                      border-slate-200
                      py-3
                      text-center
                      font-medium
                      transition
                      hover:bg-slate-100
                    "
                  >
                    View
                  </Link>

                  <button
                    onClick={() =>
                      handleDelete(property._id)
                    }
                    className="
                      rounded-xl
                      bg-red-500
                      py-3
                      font-medium
                      text-white
                      transition
                      hover:bg-red-600
                    "
                  >
                    Delete
                  </button>

                </div>

              </div>

            </article>

          ))

        )}

      </section>

    </div>

  );
}