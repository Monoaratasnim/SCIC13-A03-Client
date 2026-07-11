"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/properties" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const categories = [
  "Apartment",
  "Villa",
  "Duplex",
  "Commercial",
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#DED6C8] bg-[#1E3A5F] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* ================= Brand ================= */}
          <div>
            <Link
              href="/"
              className="text-3xl font-bold transition-opacity hover:opacity-90"
            >
              <span className="text-white">Property</span>
              <span className="text-[#C89B3C]">Nest</span>
            </Link>
<p className="mt-5 leading-7 text-slate-300">
  PropertyNest helps you discover verified properties,
  connect with trusted agents, and find your perfect
  home across Bangladesh.
</p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
                className="rounded-full bg-white/10 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-[#C89B3C]"
              >
                <FaFacebookF size={18} />
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
                className="rounded-full bg-white/10 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-[#C89B3C]"
              >
                <FaInstagram size={18} />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
                className="rounded-full bg-white/10 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-[#C89B3C]"
              >
                <FaLinkedinIn size={18} />
              </Link>

              <Link
                href="https://x.com"
                target="_blank"
                aria-label="X"
                className="rounded-full bg-white/10 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-[#C89B3C]"
              >
                <FaXTwitter size={18} />
              </Link>
            </div>
          </div>

          {/* ================= Quick Links ================= */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-[#C89B3C]">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 transition duration-300 hover:text-[#C89B3C]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= Property Types ================= */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-[#C89B3C]">
              Property Types
            </h3>

            <ul className="space-y-3">
              {categories.map((item) => (
                <li
                  key={item}
                  className="text-slate-300 transition duration-300 hover:text-[#C89B3C]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ================= Contact ================= */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-[#C89B3C]">
              Contact
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-1 text-[#C89B3C]"
                />

                <p className="text-slate-300">
                  Dhaka, Bangladesh
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-[#C89B3C]"
                />

                <p className="text-slate-300">
                  +880 1712-345678
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-[#C89B3C]"
                />

                <p className="text-slate-300">
                  support@propertynest.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Bottom ================= */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">
              PropertyNest
            </span>
            . All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="transition hover:text-[#C89B3C]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-[#C89B3C]"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}