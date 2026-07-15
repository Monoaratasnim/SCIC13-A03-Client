"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { Building2, ShieldCheck, House } from "lucide-react";

type AuthLayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export default function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <section className="min-h-screen overflow-hidden bg-slate-50">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid w-full overflow-hidden rounded-[32px] bg-white shadow-2xl lg:grid-cols-2">
          {/* Left Side */}
          <div className="hidden flex-col justify-between bg-[#1E3A5F] p-12 text-white lg:flex">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-3"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C89B3C]">
                  <House className="h-6 w-6 text-white" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold">
                    PropertyNest
                  </h2>

                  <p className="text-sm text-white/70">
                    Find your dream property
                  </p>
                </div>
              </Link>

              <div className="mt-16">
                <h1 className="text-4xl font-bold leading-tight">
                  Buy, Sell & Discover
                  <span className="block text-[#C89B3C]">
                    Premium Properties
                  </span>
                </h1>

                <p className="mt-6 max-w-md leading-8 text-white/80">
                  PropertyNest helps buyers, owners, and
                  investors connect through a modern and
                  secure real estate platform.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <ShieldCheck className="h-6 w-6 text-[#C89B3C]" />
                <div>
                  <h4 className="font-semibold">
                    Verified Owners
                  </h4>
                  <p className="text-sm text-white/70">
                    Trusted property listings.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                <Building2 className="h-6 w-6 text-[#C89B3C]" />
                <div>
                  <h4 className="font-semibold">
                    Premium Listings
                  </h4>
                  <p className="text-sm text-white/70">
                    Apartments, villas and commercial spaces.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12">
            <div className="w-full max-w-md">
              <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-[#1E3A5F]">
                  {title}
                </h1>

                <p className="mt-3 text-gray-500">
                  {subtitle}
                </p>
              </div>

              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}