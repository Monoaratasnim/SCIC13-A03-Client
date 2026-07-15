"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  LayoutDashboard,
  User,
  Home,
  Heart,
  Phone,
  PlusCircle,
  Building2,
  Users,
  Shield,
} from "lucide-react";

type UserRole = "user" | "owner" | "admin";

type MenuItem = {
  label: string;
  href: string;
  icon: React.ElementType;
};

export default function DashboardSidebar() {
  const pathname = usePathname();

  const [role, setRole] = useState<UserRole>("user");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);

        setRole(user?.role || "user");
      } catch (error) {
        setRole("user");
      }
    }
  }, []);

  const userMenu: MenuItem[] = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "My Profile",
      href: "/dashboard/profile",
      icon: User,
    },
    {
      label: "My Inquiries",
      href: "/dashboard/my-inquiries",
      icon: Phone,
    },
  ];

  const ownerMenu: MenuItem[] = [
   {
  label: "Dashboard",
  href: "/dashboard/owner",
  icon: LayoutDashboard,
},
    {
      label: "My Profile",
      href: "/dashboard/profile",
      icon: User,
    },
    {
      label: "Add Property",
      href: "/dashboard/add-property",
      icon: PlusCircle,
    },
    {
      label: "My Properties",
      href: "/dashboard/my-properties",
      icon: Building2,
    },
    {
      label: "Property Inquiries",
      href: "/dashboard/owner/inquiries",
      icon: Phone,
    },
    {
      label: "My Sent Inquiries",
      href: "/dashboard/my-inquiries",
      icon: Heart,
    },
  ];

  const adminMenu: MenuItem[] = [
    {
  label: "Dashboard",
  href: "/dashboard/admin",
  icon: LayoutDashboard,
},
    {
      label: "Manage Users",
      href: "/dashboard/admin/manage-users",
      icon: Users,
    },
    {
      label: "Manage Properties",
      href: "/dashboard/admin/manage-properties",
      icon: Home,
    },
    {
      label: "Admin Profile",
      href: "/dashboard/profile",
      icon: Shield,
    },
  ];

  const menu =
    role === "admin"
      ? adminMenu
      : role === "owner"
      ? ownerMenu
      : userMenu;

  return (
    <aside
      className="
        sticky
        top-0
        h-screen
        w-64
        xl:w-72
        shrink-0
        overflow-y-auto
        border-r
        border-slate-200
        bg-white
        shadow-sm
      "
    >
      <div className="flex h-full flex-col px-6 py-8">
        {/* Header */}

        <div className="mb-10">
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-slate-500
            "
          >
            {role} Panel
          </p>

          <h2
            className="
              mt-2
              text-2xl
              font-bold
              text-[#1E3A5F]
            "
          >
            Dashboard
          </h2>
        </div>

        {/* Navigation */}

        <nav className="flex flex-1 flex-col gap-2">
          {menu.map((item) => {
            const Icon = item.icon;

          const active =
  pathname === item.href ||
  (item.href !== "/dashboard" &&
    pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  group
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  px-4
                  py-3.5
                  text-sm
                  font-medium
                  transition-all
                  duration-200

                  ${
                    active
                      ? `
                        bg-gradient-to-r
                        from-[#1E3A5F]
                        to-[#C89B3C]
                        text-white
                        shadow-md
                      `
                      : `
                        text-slate-700
                        hover:bg-[#F8F5EF]
                        hover:text-[#1E3A5F]
                        hover:translate-x-1
                      `
                  }
                `}
              >
                <Icon
                  size={19}
                  className="shrink-0 transition-transform duration-200 group-hover:scale-110"
                />

                <span className="truncate">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}