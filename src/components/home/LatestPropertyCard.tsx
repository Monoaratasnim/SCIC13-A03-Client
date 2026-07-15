"use client";

import Image from "next/image";
import Link from "next/link";

import type { Property } from "@/types/property.types";

type Props = {
  property: Property;
};

export default function LatestPropertyCard({
  property,
}: Props) {

  return (

    <article
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-3xl
        bg-white
        shadow-[0_8px_30px_rgb(0,0,0,0.06)]
        transition
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_15px_35px_rgb(0,0,0,0.12)]
      "
    >

      {/* Image */}

      <div
        className="
          relative
          h-40
          overflow-hidden
        "
      >

        <Image
          src={
            property.images?.[0] ||
            "/images/property-placeholder.jpg"
          }
          alt={property.title}
          fill
          sizes="
            (max-width:768px)100vw,
            (max-width:1200px)50vw,
            25vw
          "
          className="
            object-cover
            transition
            duration-500
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            left-3
            top-3
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
          {property.category}
        </div>

      </div>

      {/* Content */}

      <div
        className="
          flex
          flex-1
          flex-col
          p-4
        "
      >

        <div
          className="
            text-xs
            font-semibold
            uppercase
            tracking-wide
            text-[#C89B3C]
          "
        >
          {property.propertyType}
        </div>

        <h2
          className="
            mt-2
            line-clamp-1
            text-base
            font-bold
            text-[#1E3A5F]
          "
        >
          {property.title}
        </h2>

        <p
          className="
            mt-2
            line-clamp-2
            text-sm
            text-gray-500
          "
        >
          {property.shortDescription}
        </p>

        <p
          className="
            mt-2
            line-clamp-1
            text-sm
            text-gray-500
          "
        >
          📍 {property.location}
        </p>

        {/* Features */}

        <div
          className="
            mt-3
            grid
            grid-cols-3
            rounded-xl
            bg-[#F8FAFC]
            p-2
            text-center
          "
        >

          <div>

            <p
              className="
                text-sm
                font-bold
                text-[#1E3A5F]
              "
            >
              {property.bedrooms ?? "-"}
            </p>

            <span className="text-[11px] text-gray-500">
              Beds
            </span>

          </div>

          <div>

            <p
              className="
                text-sm
                font-bold
                text-[#1E3A5F]
              "
            >
              {property.bathrooms ?? "-"}
            </p>

            <span className="text-[11px] text-gray-500">
              Baths
            </span>

          </div>

          <div>

            <p
              className="
                text-sm
                font-bold
                text-[#1E3A5F]
              "
            >
              {property.area ?? "-"}
            </p>

            <span className="text-[11px] text-gray-500">
              Sqft
            </span>

          </div>

        </div>

        {/* Bottom */}

        <div
          className="
            mt-auto
            flex
            items-center
            justify-between
            gap-2
            pt-4
          "
        >

          <span
            className="
              text-sm
              font-bold
              text-[#C89B3C]
            "
          >
            ৳ {property.price.toLocaleString()}
          </span>

          <Link
            href={`/properties/${property._id}`}
            className="
              rounded-xl
              bg-[#1E3A5F]
              px-3
              py-2
              text-xs
              font-semibold
              text-white
              transition
              hover:bg-[#152b46]
            "
          >
            View Details
          </Link>

        </div>

      </div>

    </article>

  );

}