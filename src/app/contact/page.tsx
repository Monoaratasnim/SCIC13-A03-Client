"use client";

import Link from "next/link";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    value: "Chattogram, Bangladesh",
  },
  {
    icon: Phone,
    title: "Phone Number",
    value: "+880 1712-345678",
  },
  {
    icon: Mail,
    title: "Email Address",
    value: "support@estatehub.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Sat - Thu : 9:00 AM - 6:00 PM",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-slate-50">

      {/* Hero */}

      <section className="bg-[#1E3A5F]">

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            items-center
            px-6
            py-24
            text-center
            lg:px-8
          "
        >
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
            "
          >
            Contact Us
          </span>

          <h1
            className="
              mt-6
              text-4xl
              font-bold
              text-white
              md:text-5xl
            "
          >
            We'd Love To Hear From You
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
            Whether you're searching for your dream property,
            have questions about listings, or need assistance,
            our team is always ready to help.
          </p>

        </div>

      </section>

      {/* Contact Cards */}

      <section className="mx-auto -mt-10 max-w-7xl px-6 lg:px-8">

        <div
          className="
            grid
            gap-6
            rounded-3xl
            bg-white
            p-8
            shadow-lg
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="text-center"
              >
                <div
                  className="
                    mx-auto
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
                    mt-4
                    text-lg
                    font-bold
                    text-[#1E3A5F]
                  "
                >
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-600">
                  {item.value}
                </p>

              </div>
            );
          })}
        </div>

      </section>

      {/* Contact Form */}

      <section className="py-20">

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-12
            px-6
            lg:grid-cols-2
            lg:px-8
          "
        >

          {/* Left */}

          <div>

            <span className="font-semibold text-[#C89B3C]">
              GET IN TOUCH
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
              Send Us A Message
            </h2>

            <p
              className="
                mt-5
                leading-8
                text-gray-600
              "
            >
              Have a question or need assistance?
              Fill out the form and our team will get
              back to you as soon as possible.
            </p>

          </div>

          {/* Form */}

          <form
            className="
              rounded-3xl
              bg-white
              p-8
              shadow-sm
            "
          >

            <div className="grid gap-6 sm:grid-cols-2">

              <div>

                <label className="mb-2 block font-medium text-[#1E3A5F]">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-300
                    px-4
                    py-3
                    outline-none
                    transition
                    focus:border-[#C89B3C]
                  "
                />

              </div>

              <div>

                <label className="mb-2 block font-medium text-[#1E3A5F]">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-slate-300
                    px-4
                    py-3
                    outline-none
                    transition
                    focus:border-[#C89B3C]
                  "
                />

              </div>

            </div>

            <div className="mt-6">

              <label className="mb-2 block font-medium text-[#1E3A5F]">
                Subject
              </label>

              <input
                type="text"
                placeholder="Subject"
                className="
                  w-full
                  rounded-xl
                  border
                  border-slate-300
                  px-4
                  py-3
                  outline-none
                  transition
                  focus:border-[#C89B3C]
                "
              />

            </div>
                        <div className="mt-6">

              <label className="mb-2 block font-medium text-[#1E3A5F]">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-slate-300
                  px-4
                  py-3
                  outline-none
                  transition
                  focus:border-[#C89B3C]
                "
              />

            </div>

            <button
              type="submit"
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-[#1E3A5F]
                px-6
                py-3
                font-semibold
                text-white
                transition
                hover:bg-[#162d4a]
              "
            >
              Send Message

              <ArrowRight className="h-5 w-5" />
            </button>

          </form>

        </div>

      </section>

      {/* Google Map */}

      <section className="pb-20">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div
            className="
              overflow-hidden
              rounded-3xl
              border
              border-slate-200
              shadow-sm
            "
          >

            <iframe
              title="Office Location"
              src="https://www.google.com/maps?q=Chattogram,Bangladesh&output=embed"
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="pb-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div
            className="
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
                leading-8
                text-slate-200
              "
            >
              Browse verified property listings, connect with trusted
              owners, and discover the perfect place for your next
              home or investment.
            </p>

            <Link
              href="/properties"
              className="
                mt-8
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
                hover:bg-[#b78c33]
              "
            >
              Explore Properties

              <ArrowRight className="h-5 w-5" />
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}