"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getMyProperties,
  deleteProperty,
} from "@/lib/propertyApi";

import type {
  Property,
} from "@/types/property.types";

export default function MyPropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProperties();
  }, []);

  async function loadProperties() {
    try {
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

  return (
    <div className="space-y-8">

      <section className="rounded-2xl bg-white p-6 shadow-sm">

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>

            <h1 className="text-3xl font-bold text-[#1E3A5F]">
              My Properties
            </h1>

            <p className="mt-2 text-slate-600">
              Manage all your property listings.
            </p>

          </div>

          <Link
            href="/dashboard/add-property"
            className="
              rounded-xl
              bg-[#1E3A5F]
              px-6
              py-3
              text-center
              font-semibold
              text-white
              transition
              hover:bg-[#16304d]
            "
          >
            + Add Property
          </Link>

        </div>

      </section>

  
  {/* Desktop Table */}
  <section
    className="
      hidden
      lg:block
      overflow-x-auto
      rounded-2xl
      bg-white
      shadow-sm
    "
  >
    <table className="min-w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-6 py-4 text-left">
                Property
              </th>

              <th className="px-6 py-4 text-left">
                Location
              </th>

              <th className="px-6 py-4 text-left">
                Price
              </th>

              <th className="px-6 py-4 text-left">
                Status
              </th>

              <th className="px-6 py-4 text-center">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {loading ? (

              <tr>

                <td
                  colSpan={5}
                  className="py-12 text-center"
                >
                  Loading properties...
                </td>

              </tr>

            ) : properties.length === 0 ? (

              <tr>

                <td
                  colSpan={5}
                  className="py-12 text-center text-slate-500"
                >
                  No properties found.
                </td>

              </tr>

            ) : (

              properties.map((property) => (

                <tr
                  key={property._id}
                  className="border-t"
                >

                  <td className="px-6 py-4">

                    <div className="flex items-center gap-4">

                      <Image
                        src={
                          property.images?.[0] ||
                          "/placeholder-property.jpg"
                        }
                        alt={property.title}
                        width={120}
                        height={80}
                        className="h-16 w-24 rounded-lg object-cover"
                      />

                      <span className="font-medium">
                        {property.title}
                      </span>

                    </div>

                  </td>

                  <td className="px-6 py-4">
                    {property.location}
                  </td>

                  <td className="px-6 py-4">
                    ৳ {property.price.toLocaleString()}
                  </td>

                  <td className="px-6 py-4">

                    <span
                      className={`
                        rounded-full
                        px-3
                        py-1
                        text-sm
                        font-medium

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

                  <td className="px-6 py-4">

                    <div className="flex justify-center gap-3">

                      <Link
                        href={`/properties/${property._id}`}
                        className="
                          rounded-lg
                          border
                          px-4
                          py-2
                          text-sm
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
                          rounded-lg
                          bg-red-500
                          px-4
                          py-2
                          text-sm
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

      </section>
      <section
  className="
    grid
    gap-5
    lg:hidden
  "
>
  {loading ? (
    <div className="rounded-2xl bg-white p-10 text-center">
      Loading properties...
    </div>
  ) : properties.length === 0 ? (
    <div className="rounded-2xl bg-white p-10 text-center text-slate-500">
      No properties found.
    </div>
  ) : (
    properties.map((property) => (
      <div
        key={property._id}
        className="
          rounded-2xl
          bg-white
          p-5
          shadow-sm
          space-y-4
        "
      >
        <Image
          src={
            property.images?.[0] ||
            "/placeholder-property.jpg"
          }
          alt={property.title}
          width={600}
          height={400}
          className="
            h-48
            w-full
            rounded-xl
            object-cover
          "
        />

        <div>
          <h2
            className="
              text-xl
              font-bold
              text-[#1E3A5F]
            "
          >
            {property.title}
          </h2>

          <p className="mt-2 text-slate-600">
            📍 {property.location}
          </p>

          <p className="mt-2 font-semibold">
            ৳ {property.price.toLocaleString()}
          </p>

          <span
            className={`
              mt-3
              inline-block
              rounded-full
              px-3
              py-1
              text-sm
              font-medium

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

        <div className="flex gap-3">
          <Link
            href={`/properties/${property._id}`}
            className="
              flex-1
              rounded-lg
              border
              py-2
              text-center
              text-sm
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
              flex-1
              rounded-lg
              bg-red-500
              py-2
              text-sm
              text-white
              hover:bg-red-600
            "
          >
            Delete
          </button>
        </div>
      </div>
    ))
  )}
</section>

    </div>
  );
}