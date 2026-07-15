"use client";

import Image from "next/image";
import {
  BedDouble,
  Bath,
  Ruler,
  MapPin,
  Home,
} from "lucide-react";

import ContactOwner from "./ContactOwner";

type Property = {
  _id: string;
  title: string;
  shortDescription: string;
  description: string;
  location: string;
  price: number;
  images: string[];
  category: string;
  propertyType: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;

  owner?: {
    _id: string;
    name: string;
    email: string;
    phone?: string;
    avatar?: string;
  };
};

type Props = {
  property: Property;
};

export default function PropertyDetails({
  property,
}: Props) {

const currentUser =
  typeof window !== "undefined"
    ? JSON.parse(
        localStorage.getItem("user") || "null"
      )
    : null;


const currentUserId =
  currentUser?.id ||
  currentUser?._id ||
  currentUser?.user?.id ||
  currentUser?.user?._id;


const ownerId =
  property.owner?._id;


const isOwner =
  Boolean(
    currentUserId &&
    ownerId &&
    currentUserId.toString() === ownerId.toString()
  );


const isAdmin =
  currentUser?.role === "admin";


const canSendInquiry =
  !isOwner &&
  !isAdmin;
  return (
    <section className="space-y-8">

      {/* =============================================== */}
      {/* Hero */}
      {/* =============================================== */}

      <section className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">

        {/* Image */}

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

          <div className="relative h-[260px] sm:h-[360px] lg:h-[500px]">

            <Image
              src={
                property.images?.[0] ||
                "/images/property-placeholder.jpg"
              }
              alt={property.title}
              fill
              priority
              sizes="(max-width:1024px)100vw,65vw"
              className="object-cover transition duration-500 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

            <div className="absolute left-5 top-5 flex flex-wrap gap-3">

              <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#1E3A5F] backdrop-blur">

                {property.category}

              </span>

              <span className="rounded-full bg-[#C89B3C] px-4 py-2 text-xs font-semibold text-white">

                {property.propertyType}

              </span>

            </div>

          </div>

        </div>

        {/* =============================================== */}
        {/* Summary Card */}
        {/* =============================================== */}

        <aside className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

          <p className="text-sm font-semibold uppercase tracking-wider text-[#C89B3C]">

            Featured Property

          </p>

          <h1 className="mt-3 text-2xl font-bold leading-tight text-[#1E3A5F] lg:text-3xl">

            {property.title}

          </h1>

          <div className="mt-5 flex items-center gap-2 text-gray-500">

            <MapPin className="h-5 w-5 text-[#C89B3C]" />

            <span>{property.location}</span>

          </div>

          {/* Price */}

          <div className="mt-6 rounded-2xl bg-[#F8FAFC] p-5">

            <p className="text-sm text-gray-500">

              Starting Price

            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#1E3A5F]">

              ৳ {property.price.toLocaleString()}

            </h2>

          </div>

          {/* Quick Info */}

          <div className="mt-6 space-y-3">

            <div className="flex items-center justify-between rounded-2xl bg-[#F8FAFC] px-4 py-3">

              <div className="flex items-center gap-3">

                <BedDouble className="h-5 w-5 text-[#1E3A5F]" />

                <span>Bedrooms</span>

              </div>

              <span className="font-bold text-[#1E3A5F]">

                {property.bedrooms ?? "-"}

              </span>

            </div>

            <div className="flex items-center justify-between rounded-2xl bg-[#F8FAFC] px-4 py-3">

              <div className="flex items-center gap-3">

                <Bath className="h-5 w-5 text-[#C89B3C]" />

                <span>Bathrooms</span>

              </div>

              <span className="font-bold text-[#1E3A5F]">

                {property.bathrooms ?? "-"}

              </span>

            </div>

            <div className="flex items-center justify-between rounded-2xl bg-[#F8FAFC] px-4 py-3">

              <div className="flex items-center gap-3">

                <Ruler className="h-5 w-5 text-[#1E3A5F]" />

                <span>Area</span>

              </div>

              <span className="font-bold text-[#1E3A5F]">

                {property.area ?? "-"} sqft

              </span>

            </div>

            <div className="flex items-center justify-between rounded-2xl bg-[#F8FAFC] px-4 py-3">

              <div className="flex items-center gap-3">

                <Home className="h-5 w-5 text-[#C89B3C]" />

                <span>Type</span>

              </div>

              <span className="font-semibold text-[#1E3A5F]">

                {property.propertyType}

              </span>

            </div>

          </div>

        </aside>

      </section>
            {/* =============================================== */}
      {/* Overview + Property Information */}
      {/* =============================================== */}

      <section className="grid gap-8 lg:grid-cols-[2fr_1fr]">

        {/* Left Side */}

        <div className="space-y-8">

          {/* Overview */}

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

            <h2 className="text-2xl font-bold text-[#1E3A5F]">
              Property Overview
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              {property.description}
            </p>

          </div>

          {/* Property Information */}

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

            <h2 className="text-2xl font-bold text-[#1E3A5F]">
              Property Information
            </h2>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

              <div className="rounded-2xl bg-slate-50 p-5">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E3A5F]/10">

                  <BedDouble className="h-6 w-6 text-[#1E3A5F]" />

                </div>

                <h3 className="mt-4 text-2xl font-bold text-[#1E3A5F]">
                  {property.bedrooms ?? "-"}
                </h3>

                <p className="text-sm text-gray-500">
                  Bedrooms
                </p>

              </div>

              <div className="rounded-2xl bg-slate-50 p-5">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C89B3C]/15">

                  <Bath className="h-6 w-6 text-[#C89B3C]" />

                </div>

                <h3 className="mt-4 text-2xl font-bold text-[#1E3A5F]">
                  {property.bathrooms ?? "-"}
                </h3>

                <p className="text-sm text-gray-500">
                  Bathrooms
                </p>

              </div>

              <div className="rounded-2xl bg-slate-50 p-5">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E3A5F]/10">

                  <Ruler className="h-6 w-6 text-[#1E3A5F]" />

                </div>

                <h3 className="mt-4 text-2xl font-bold text-[#1E3A5F]">
                  {property.area ?? "-"}
                </h3>

                <p className="text-sm text-gray-500">
                  Square Feet
                </p>

              </div>

              <div className="rounded-2xl bg-slate-50 p-5">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C89B3C]/15">

                  <MapPin className="h-6 w-6 text-[#C89B3C]" />

                </div>

                <h3 className="mt-4 line-clamp-1 text-lg font-bold text-[#1E3A5F]">
                  {property.location}
                </h3>

                <p className="text-sm text-gray-500">
                  Location
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* =============================================== */}
        {/* Contact Owner */}
        {/* =============================================== */}

        <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">

          <h2 className="text-2xl font-bold text-[#1E3A5F]">
            Contact Owner
          </h2>

          <p className="mt-3 text-sm leading-7 text-gray-500">

            {isOwner
              ? "This is your property listing."
              : "Login to contact the property owner directly."}

          </p>

          {/* Owner */}

          <div className="mt-7 flex items-center gap-4">

            <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-[#C89B3C]/30">

              <Image
                src={
                  property.owner?.avatar ||
                  "/images/default-avatar.png"
                }
                alt="Owner"
                fill
                className="object-cover"
              />

            </div>

            <div>

              <h3 className="font-bold text-[#1E3A5F]">

                {property.owner?.name || "Property Owner"}

              </h3>

              <p className="text-sm text-gray-500">
                Verified Owner
              </p>

            </div>

          </div>
{/* Buttons */}
{/* Contact Information */}

<div className="mt-8 space-y-4">

  {!canSendInquiry ? (

  <div
    className="
      rounded-2xl
      bg-slate-100
      p-4
      text-center
    "
  >

    <p className="font-semibold text-slate-700">

      {
        isAdmin
        ? "Admin cannot send inquiries."
        : "This is your property."
      }

    </p>


    <p className="mt-2 text-sm text-slate-500">

      Contact options are disabled.

    </p>


  </div>


) : (

  <>

    <div
      className="
        rounded-2xl
        border
        border-slate-200
        bg-slate-50
        p-4
      "
    >

      <p className="text-sm font-medium text-slate-500">
        Contact Email
      </p>


      {property.owner?.email ? (

        <a
          href={`mailto:${property.owner.email}`}
          className="
            mt-2
            block
            break-all
            font-semibold
            text-[#1E3A5F]
            hover:underline
          "
        >

          {property.owner.email}

        </a>

      ) : (

        <p className="mt-2 text-slate-500">
          Email unavailable
        </p>

      )}

    </div>



    {
      property.owner?._id ? (

        <ContactOwner
          propertyId={property._id}
        />

      ) : (

        <button
          disabled
          className="
            w-full
            rounded-2xl
            bg-gray-300
            py-3
            font-semibold
            text-gray-600
          "
        >

          Owner Information Unavailable

        </button>

      )
    }


  </>

)}
</div>

        </aside>

      </section>
            {/* =============================================== */}
      {/* Related Properties */}
      {/* =============================================== */}

      <section className="space-y-6 pt-4">

        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <p className="text-sm font-semibold uppercase tracking-wider text-[#C89B3C]">
              Explore More
            </p>

            <h2 className="mt-1 text-3xl font-bold text-[#1E3A5F]">
              Related Properties
            </h2>

            <p className="mt-2 max-w-2xl text-gray-500">
              Discover similar properties based on category and
              location. This section will automatically display
              recommendations from our latest listings.
            </p>

          </div>

        </div>

        {/* Placeholder */}

        <div
          className="
            rounded-3xl
            border
            border-dashed
            border-slate-300
            bg-gradient-to-br
            from-slate-50
            to-white
            px-6
            py-16
            text-center
            sm:px-10
            sm:py-20
          "
        >

          <div
            className="
              mx-auto
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              bg-[#1E3A5F]/10
            "
          >

            <svg
              className="h-10 w-10 text-[#1E3A5F]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10L12 3l9 7v10a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V10z"
              />

            </svg>

          </div>

          <h3 className="mt-6 text-2xl font-bold text-[#1E3A5F]">
            More Properties Coming Soon
          </h3>

          <p className="mx-auto mt-3 max-w-xl leading-7 text-gray-500">
            Once related property recommendations are connected
            to the backend, similar listings from the same
            category or nearby location will automatically
            appear here.
          </p>

        </div>

      </section>

    </section>
  );
}