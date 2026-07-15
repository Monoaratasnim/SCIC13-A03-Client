"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { getProperties } from "@/lib/propertyApi";
import type { Property } from "@/types/property.types";

import FeaturedPropertyCard from "./FeaturedPropertyCard";
import FeaturedPropertySkeleton from "./FeaturedPropertiesSkeleton";
export default function FeaturedProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProperties();
  }, []);

  async function fetchFeaturedProperties() {
    try {
      setLoading(true);

      const res = await getProperties(1, 6);

      setProperties(res.properties);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="flex flex-col items-center text-center">

          <span
            className="
              rounded-full
              bg-[#C89B3C]/10
              px-4
              py-2
              text-sm
              font-semibold
              text-[#C89B3C]
            "
          >
            Featured Collection
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
            Featured Properties
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              text-gray-600
              leading-8
            "
          >
            Explore our latest hand-picked properties across Bangladesh.
            Every listing is verified to help you buy, rent, or invest with
            complete confidence.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
            mt-14
            grid
            gap-8
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <FeaturedPropertySkeleton key={index} />
              ))
            : properties.map((property) => (
                <FeaturedPropertyCard
                  key={property._id}
                  property={property}
                />
              ))}
        </div>

        {/* Empty */}

        {!loading && properties.length === 0 && (
          <div
            className="
              mt-10
              rounded-3xl
              bg-white
              py-16
              text-center
              shadow-sm
            "
          >
            <h3
              className="
                text-2xl
                font-bold
                text-[#1E3A5F]
              "
            >
              No Featured Properties
            </h3>

            <p className="mt-3 text-gray-500">
              New properties will appear here soon.
            </p>
          </div>
        )}

        {/* Button */}

        {!loading && properties.length > 0 && (
          <div className="mt-14 flex justify-center">

            <Link
              href="/properties"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-[#1E3A5F]
                px-7
                py-3
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#162d4a]
                hover:shadow-xl
              "
            >
              View All Properties

              <ArrowRight className="h-5 w-5" />
            </Link>

          </div>
        )}
      </div>
    </section>
  );
}