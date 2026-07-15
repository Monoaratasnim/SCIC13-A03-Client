"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Home,
  Building2,
  Users,
  ShieldCheck,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

const stats = [
  {
    value: "500+",
    label: "Properties Listed",
    icon: Home,
  },
  {
    value: "200+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    value: "50+",
    label: "Verified Owners",
    icon: BadgeCheck,
  },
  {
    value: "100%",
    label: "Secure Platform",
    icon: ShieldCheck,
  },
];

const values = [
  {
    title: "Trusted Listings",
    description:
      "Every property is carefully reviewed before becoming available on our platform.",
    icon: BadgeCheck,
  },
  {
    title: "Modern Experience",
    description:
      "Browse, compare and discover properties with a fast and responsive experience.",
    icon: Building2,
  },
  {
    title: "Verified Owners",
    description:
      "Connect directly with genuine property owners for reliable communication.",
    icon: Users,
  },
];

export default function AboutPage() {
  return (
    <main className="bg-slate-50">

      {/* Hero Section */}

      <section className="relative overflow-hidden bg-[#1E3A5F]">

        <div className="absolute inset-0 bg-black/20" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center lg:px-8">

          <span
            className="
              rounded-full
              border
              border-white/30
              bg-white/10
              px-5
              py-2
              text-sm
              font-medium
              text-white
              backdrop-blur
            "
          >
            About Our Platform
          </span>

          <h1
            className="
              mt-6
              max-w-4xl
              text-4xl
              font-bold
              leading-tight
              text-white
              md:text-5xl
            "
          >
            Helping You Find The Perfect Property With Confidence
          </h1>

          <p
            className="
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-slate-200
            "
          >
            Our real estate platform connects buyers, renters, and property
            owners through a secure, modern, and easy-to-use experience.
            Discover verified listings, explore detailed property information,
            and contact owners directly.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/properties"
              className="
                rounded-xl
                bg-[#C89B3C]
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:bg-[#b88d34]
              "
            >
              Browse Properties
            </Link>

            <Link
              href="/contact"
              className="
                rounded-xl
                border
                border-white
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:bg-white
                hover:text-[#1E3A5F]
              "
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>



      {/* About Content */}

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div
          className="
            grid
            items-center
            gap-14
            lg:grid-cols-2
          "
        >

          {/* Image */}

          <div className="relative">

            <div className="relative h-[450px] overflow-hidden rounded-3xl">

              <Image
                src="/images/hero9.jpg"
                alt="About Real Estate"
                fill
                className="object-cover"
              />

            </div>

          </div>

          {/* Content */}

          <div>

            <span className="font-semibold text-[#C89B3C]">
              WHO WE ARE
            </span>

            <h2
              className="
                mt-3
                text-3xl
                font-bold
                text-[#1E3A5F]
                md:text-4xl
              "
            >
              A Modern Real Estate Platform Built For Everyone
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              We provide a seamless platform where users can discover
              apartments, villas, duplexes, offices, and commercial spaces
              while property owners can showcase their listings to thousands of
              potential buyers and renters.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Our mission is to simplify property discovery with verified
              listings, transparent communication, responsive design, and a
              secure user experience.
            </p>

          </div>

        </div>

      </section>
            {/* Our Values */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">

            <span className="font-semibold text-[#C89B3C]">
              OUR VALUES
            </span>

            <h2
              className="
                mt-3
                text-3xl
                font-bold
                text-[#1E3A5F]
                md:text-4xl
              "
            >
              Why Thousands Trust Our Platform
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-gray-600">
              We focus on providing a secure, transparent, and modern
              property marketplace that makes buying, selling, and
              renting properties easier for everyone.
            </p>

          </div>

          <div
            className="
              mt-14
              grid
              gap-8
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    rounded-3xl
                    border
                    border-slate-200
                    bg-slate-50
                    p-8
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#C89B3C]
                    hover:bg-white
                    hover:shadow-lg
                  "
                >
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#EEF4FB]
                    "
                  >
                    <Icon className="h-7 w-7 text-[#1E3A5F]" />
                  </div>

                  <h3
                    className="
                      mt-6
                      text-xl
                      font-bold
                      text-[#1E3A5F]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      leading-7
                      text-gray-600
                    "
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </section>

      {/* Mission & Vision */}

      <section className="py-20">

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-8
            px-6
            lg:grid-cols-2
            lg:px-8
          "
        >

          {/* Mission */}

          <div
            className="
              rounded-3xl
              bg-white
              p-10
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
              Our Mission
            </h3>

            <p
              className="
                mt-5
                leading-8
                text-gray-600
              "
            >
              Our mission is to simplify the real estate experience by
              providing a secure, transparent, and user-friendly
              platform where buyers, renters, and property owners can
              connect with confidence.
            </p>

          </div>

          {/* Vision */}

          <div
            className="
              rounded-3xl
              bg-[#1E3A5F]
              p-10
              text-white
            "
          >

            <h3 className="text-2xl font-bold">
              Our Vision
            </h3>

            <p
              className="
                mt-5
                leading-8
                text-slate-200
              "
            >
              We aim to become one of the most trusted real estate
              platforms by offering innovative technology, verified
              property listings, and an exceptional experience for every
              user.
            </p>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="pb-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div
            className="
              overflow-hidden
              rounded-[32px]
              bg-gradient-to-r
              from-[#1E3A5F]
              to-[#294b75]
              px-8
              py-16
              text-center
              text-white
              md:px-16
            "
          >

            <h2
              className="
                text-3xl
                font-bold
                md:text-4xl
              "
            >
              Ready To Find Your Dream Property?
            </h2>

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-slate-200
              "
            >
              Explore our latest listings, connect with verified
              property owners, and discover the perfect place for your
              next home or business.
            </p>

            <Link
              href="/properties"
              className="
                mt-10
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-[#C89B3C]
                px-7
                py-3
                font-semibold
                text-white
                transition
                hover:bg-[#b88d34]
              "
            >
              Browse Properties

              <ArrowRight className="h-5 w-5" />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}