"use client";

import { ReactNode, useState } from "react";
import { Menu, X } from "lucide-react";

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const [open, setOpen] = useState(false);

  return (
    <section className="min-h-screen overflow-x-hidden bg-slate-50">

      {/* Mobile Header */}

      <header
        className="
          sticky
          top-0
          z-40
          flex
          items-center
          justify-between
          border-b
          border-slate-200
          bg-white
          px-4
          py-4
          md:hidden
        "
      >
        <button
          onClick={() => setOpen(true)}
          className="rounded-lg p-2 hover:bg-slate-100"
        >
          <Menu size={24} />
        </button>

        <h1 className="text-lg font-bold text-[#1E3A5F]">
          Dashboard
        </h1>

        <div className="w-8" />
      </header>

      {/* Mobile Sidebar */}

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              h-screen
              w-72
              bg-white
              shadow-xl
            "
          >
            <div className="flex justify-end p-4">
              <button onClick={() => setOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <DashboardSidebar />
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}

      <aside
        className="
          fixed
          left-0
          top-0
          hidden
          h-screen
          w-72
          md:block
        "
      >
        <DashboardSidebar />
      </aside>

      {/* Main */}

      <main
        className="
          min-w-0
          px-4
          py-6
          sm:px-6
          lg:px-8
          md:ml-72
        "
      >
        {children}
      </main>
    </section>
  );
}