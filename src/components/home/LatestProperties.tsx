"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { getProperties } from "@/lib/propertyApi";
import type { Property } from "@/types/property.types";

import LatestPropertyCard from "./LatestPropertyCard";
import LatestSkeleton from "./LatestSkeleton";
export default function LatestProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLatestProperties();
  }, []);

  async function fetchLatestProperties() {
    try {
      setLoading(true);

      const res = await getProperties(1, 20);

      const latest = [...res.properties]
        .sort((a, b) => {
          return (
            new Date(b.createdAt ?? "").getTime() -
            new Date(a.createdAt ?? "").getTime()
          );
        })
        .slice(0, 4);

      setProperties(latest);
    } catch (error) {
      console.error("Failed to load latest properties", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <span
              className="
                inline-flex
                rounded-full
                bg-[#C89B3C]/10
                px-4
                py-2
                text-sm
                font-semibold
                text-[#C89B3C]
              "
            >
              New Listings
            </span>

            <h2
              className="
                mt-5
                text-3xl
                font-bold
                text-[#1E3A5F]
                sm:text-4xl
              "
            >
              Latest Properties
            </h2>

            <p
              className="
                mt-4
                max-w-2xl
                leading-7
                text-gray-500
              "
            >
              Discover the newest properties added to our platform.
              Browse apartments, villas, duplexes, offices, and shops
              available for sale or rent.
            </p>

          </div>

          <Link
            href="/properties"
            className="
              inline-flex
              items-center
              justify-center
              rounded-xl
              bg-[#1E3A5F]
              px-6
              py-3
              font-semibold
              text-white
              transition
              hover:bg-[#152b46]
            "
          >
            View All Properties
          </Link>

        </div>

        {/* Cards */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {loading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <LatestSkeleton key={index} />
            ))
          ) : properties.length > 0 ? (
            properties.map((property) => (
              <LatestPropertyCard
                key={property._id}
                property={property}
              />
            ))
          ) : (
            <div
              className="
                col-span-full
                rounded-3xl
                border
                border-dashed
                border-slate-300
                py-16
                text-center
              "
            >
              <h3 className="text-2xl font-bold text-[#1E3A5F]">
                No Properties Found
              </h3>

              <p className="mt-3 text-gray-500">
                Latest properties will appear here once they are added.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}