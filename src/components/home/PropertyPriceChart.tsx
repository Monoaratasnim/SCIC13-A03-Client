"use client";

import Link from "next/link";

import {
  Building2,
  Users,
  MapPinned,
  Headphones,
  ArrowRight,
} from "lucide-react";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const chartData = [
  {
    name: "Under 20L",
    value: 18,
  },
  {
    name: "20L - 50L",
    value: 35,
  },
  {
    name: "50L - 1Cr",
    value: 22,
  },
  {
    name: "Above 1Cr",
    value: 10,
  },
];

const COLORS = [
  "#1E3A5F",
  "#3B82F6",
  "#C89B3C",
  "#94A3B8",
];

const stats = [
  {
    icon: Building2,
    value: "450+",
    label: "Verified Properties",
  },
  {
    icon: Users,
    value: "120+",
    label: "Happy Buyers",
  },
  {
    icon: MapPinned,
    value: "8",
    label: "Divisions Covered",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "Customer Support",
  },
];

export default function PropertyInsights() {
  return (

    <section className="bg-slate-50 py-20">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span
            className="
              inline-flex
              rounded-full
              bg-[#1E3A5F]/10
              px-4
              py-2
              text-sm
              font-semibold
              text-[#1E3A5F]
            "
          >
            📊 Property Insights
          </span>

          <h2
            className="
              mt-5
              bg-gradient-to-r
              from-[#1E3A5F]
              to-[#C89B3C]
              bg-clip-text
              text-3xl
              font-bold
              text-transparent
              md:text-5xl
            "
          >
            Bangladesh Property Market Overview
          </h2>

          <p
            className="
              mt-5
              text-base
              leading-8
              text-slate-600
            "
          >
            Explore our growing property marketplace with
            verified listings, satisfied customers, nationwide
            coverage and property price distribution.
          </p>

        </div>

        {/* Main Card */}

        <div
          className="
            grid
            gap-10
            rounded-[30px]
            border
            border-slate-200
            bg-white
            p-8
            shadow-sm
            lg:grid-cols-2
          "
        >
                      {/* Left Side */}

          <div>

            <div className="grid gap-5 sm:grid-cols-2">

              {stats.map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.label}
                    className="
                      rounded-2xl
                      border
                      border-slate-200
                      bg-slate-50
                      p-6
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#1E3A5F]
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
                        bg-[#1E3A5F]/10
                        text-[#1E3A5F]
                      "
                    >

                      <Icon size={28} />

                    </div>

                    <h3
                      className="
                        mt-6
                        text-3xl
                        font-bold
                        text-[#1E3A5F]
                      "
                    >

                      {item.value}

                    </h3>

                    <p
                      className="
                        mt-2
                        text-sm
                        text-slate-600
                      "
                    >

                      {item.label}

                    </p>

                  </div>

                );

              })}

            </div>

            <div
              className="
                mt-10
                rounded-2xl
                bg-gradient-to-r
                from-[#1E3A5F]
                to-[#315d8a]
                p-6
                text-white
              "
            >

              <h3
                className="
                  text-2xl
                  font-bold
                "
              >

                Find Your Dream Home

              </h3>

              <p
                className="
                  mt-3
                  text-blue-100
                  leading-7
                "
              >

                Browse hundreds of verified properties
                across Bangladesh and discover the
                perfect place to call home.

              </p>

              <Link
                href="/properties"
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-white
                  px-6
                  py-3
                  font-semibold
                  text-[#1E3A5F]
                  transition
                  hover:scale-105
                "
              >

                Explore Properties

                <ArrowRight size={18} />

              </Link>

            </div>

          </div>

          {/* Right Side */}

          <div
            className="
              rounded-3xl
              border
              border-slate-200
              bg-slate-50
              p-6
            "
          >

            <div className="text-center">

              <span
                className="
                  rounded-full
                  bg-[#1E3A5F]/10
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  text-[#1E3A5F]
                "
              >

                Property Price Distribution

              </span>

            </div>

            <div className="mt-6 h-[320px]">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <PieChart>

                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={70}
                    outerRadius={110}
                    paddingAngle={4}
                  >

                    {chartData.map((entry, index) => (

                      <Cell
                        key={index}
                        fill={COLORS[index]}
                      />

                    ))}

                  </Pie>

                  <Tooltip />

                </PieChart>

              </ResponsiveContainer>

            </div>

            <div className="mt-6 space-y-4">

              {chartData.map((item, index) => (

                <div
                  key={item.name}
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >

                    <span
                      className="h-4 w-4 rounded-full"
                      style={{
                        backgroundColor: COLORS[index],
                      }}
                    />

                    <span className="text-slate-700">

                      {item.name}

                    </span>

                  </div>

                  <span
                    className="
                      font-semibold
                      text-[#1E3A5F]
                    "
                  >

                    {item.value}

                  </span>

                </div>

              ))}

            </div>

          </div>
                  </div>

      </div>

    </section>

  );

}