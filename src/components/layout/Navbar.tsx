"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/properties" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

type User = {
  name?: string;
  email?: string;
  role?: "user" | "owner" | "admin";
};

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  /*
  |--------------------------------------------------------------------------
  | Get Logged In User
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, [pathname]);

  /*
  |--------------------------------------------------------------------------
  | Close Mobile Menu
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  /*
  |--------------------------------------------------------------------------
  | Navbar Scroll Effect
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Logout
  |--------------------------------------------------------------------------
  */

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);

    toast.success("Logged out successfully");

    router.push("/login");
  };

  /*
  |--------------------------------------------------------------------------
  | Role Label
  |--------------------------------------------------------------------------
  */

  const roleLabel = {
    admin: "Administrator",
    owner: "Property Owner",
    user: "Customer",
  }[user?.role || "user"];

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? "border-b border-border bg-[#F7F3EC]/90 backdrop-blur-lg shadow-md"
            : "bg-[#F7F3EC]"
        }
      `}
    >
      <nav
        className="
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
          h-20
          flex
          items-center
        "
      >
                {/* Left : Logo */}

        <div
          className="
            flex
            flex-1
            items-center
          "
        >
          <Link
            href="/"
            className="
              text-2xl
              font-bold
              tracking-tight
              whitespace-nowrap
            "
          >
            <span className="text-primary">
              Property
            </span>

            <span className="text-secondary">
              Nest
            </span>
          </Link>
        </div>

        {/* Center : Navigation */}

        <div
          className="
            hidden
            lg:flex
            flex-1
            justify-center
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
              rounded-full
              border
              border-border
              bg-white
              px-2
              py-1
              shadow-sm
            "
          >
            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    rounded-full
                    px-5
                    py-2
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    ${
                      active
                        ? "bg-gradient-to-r from-[#1E3A5F] to-[#C89B3C] text-white shadow-md"
                        : "text-foreground hover:bg-[#F5EFE6] hover:text-primary"
                    }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right : Actions */}

        <div
          className="
            hidden
            lg:flex
            flex-1
            justify-end
            items-center
            gap-4
          "
        >
          {user ? (
            <>
              <div className="text-right leading-tight">
                <p
                  className="
                    text-sm
                    font-semibold
                    text-[#1E3A5F]
                  "
                >
                  {user.name}
                </p>

                <p
                  className="
                    text-xs
                    text-gray-500
                  "
                >
                  {roleLabel}
                </p>
              </div>

              <Link
                href="/dashboard"
                className="
                  rounded-xl
                  bg-gradient-to-r
                  from-[#1E3A5F]
                  to-[#C89B3C]
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-white
                  transition
                  hover:shadow-lg
                "
              >
                Dashboard
              </Link>

              <button
                onClick={logout}
                className="
                  rounded-xl
                  border
                  border-border
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  transition
                  hover:bg-[#F5EFE6]
                "
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="
                  rounded-xl
                  border
                  border-border
                  px-6
                  py-2.5
                  font-medium
                  transition
                  hover:bg-[#F5EFE6]
                "
              >
                Login
              </Link>

              <Link
                href="/register"
                className="
                  rounded-xl
                  bg-gradient-to-r
                  from-[#1E3A5F]
                  to-[#C89B3C]
                  px-6
                  py-2.5
                  font-medium
                  text-white
                  transition
                  hover:shadow-lg
                "
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() =>
            setMobileOpen(!mobileOpen)
          }
          className="
            rounded-lg
            p-2
            text-primary
            transition
            hover:bg-[#F5EFE6]
            lg:hidden
          "
          aria-label="Toggle Menu"
        >
          {mobileOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </nav>
            {/* Mobile Menu */}

      {mobileOpen && (
        <div
          className="
            border-t
            border-border
            bg-white
            shadow-lg
            lg:hidden
          "
        >
          <div
            className="
              space-y-3
              px-4
              py-5
            "
          >
            {/* Navigation */}

            {navigation.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    block
                    rounded-xl
                    px-4
                    py-3
                    font-medium
                    transition
                    ${
                      active
                        ? "bg-gradient-to-r from-[#1E3A5F] to-[#C89B3C] text-white"
                        : "text-foreground hover:bg-[#F5EFE6]"
                    }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="my-5 border-t border-border" />

            {/* Logged In */}

            {user ? (
              <>
                <div
                  className="
                    rounded-2xl
                    bg-[#F8FAFC]
                    p-4
                    text-center
                  "
                >
                  <p
                    className="
                      text-base
                      font-semibold
                      text-[#1E3A5F]
                    "
                  >
                    {user.name}
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-gray-500
                    "
                  >
                    {roleLabel}
                  </p>
                </div>

                <Link
                  href="/dashboard"
                  className="
                    block
                    rounded-xl
                    bg-gradient-to-r
                    from-[#1E3A5F]
                    to-[#C89B3C]
                    px-4
                    py-3
                    text-center
                    font-medium
                    text-white
                    transition
                    hover:shadow-lg
                  "
                >
                  Dashboard
                </Link>

                <button
                  onClick={logout}
                  className="
                    w-full
                    rounded-xl
                    border
                    border-border
                    px-4
                    py-3
                    font-medium
                    transition
                    hover:bg-[#F5EFE6]
                  "
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="
                    block
                    rounded-xl
                    border
                    border-border
                    px-4
                    py-3
                    text-center
                    font-medium
                    transition
                    hover:bg-[#F5EFE6]
                  "
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="
                    block
                    rounded-xl
                    bg-gradient-to-r
                    from-[#1E3A5F]
                    to-[#C89B3C]
                    px-4
                    py-3
                    text-center
                    font-medium
                    text-white
                    transition
                    hover:shadow-lg
                  "
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}