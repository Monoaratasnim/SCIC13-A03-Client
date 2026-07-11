// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X } from "lucide-react";
// import { useEffect, useState } from "react";

// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "Properties", href: "/properties" },
//   { name: "About", href: "/about" },
//   { name: "Contact", href: "/contact" },
// ];

// export default function Navbar() {
//   const pathname = usePathname();

//   // Temporary auth state
//   const isLoggedIn = false;

//   // Mobile menu (Part 2)
//   const [mobileOpen, setMobileOpen] = useState(false);

//   // Navbar scroll effect
//   const [scrolled, setScrolled] = useState(false);
//   // Close mobile menu on route change
// useEffect(() => {
//   setMobileOpen(false);
// }, [pathname]);

// // Close mobile menu with Escape key
// useEffect(() => {
//   const handleKeyDown = (event: KeyboardEvent) => {
//     if (event.key === "Escape") {
//       setMobileOpen(false);
//     }
//   };

//   window.addEventListener("keydown", handleKeyDown);

//   return () => window.removeEventListener("keydown", handleKeyDown);
// }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     handleScroll();

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
//         scrolled
//           ? "border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-lg"
//           : "bg-white"
//       }`}
//     >
//       <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
//         {/* ================= Logo ================= */}

//         <Link
//           href="/"
//           className="flex items-center gap-1 text-2xl font-bold tracking-tight transition-opacity hover:opacity-90"
//         >
//           <span className="text-slate-900">Property</span>
//           <span className="text-blue-600">Nest</span>
//         </Link>

//         {/* ================= Desktop Navigation ================= */}

//         <div className="hidden items-center rounded-full border border-slate-200 bg-white px-2 py-2 lg:flex">
//           {navigation.map((item) => {
//             const active = pathname === item.href;

//             return (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
//                   active
//                     ? "bg-blue-600 text-white shadow-sm"
//                     : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             );
//           })}
//         </div>

//         {/* ================= Right Side ================= */}

//         <div className="hidden items-center gap-3 lg:flex">
//           {isLoggedIn ? (
//             <>
//               <Link
//                 href="/dashboard"
//                 className="rounded-xl bg-blue-600 px-6 py-2.5 font-medium text-white transition hover:bg-blue-700"
//               >
//                 Dashboard
//               </Link>

//               <button className="rounded-xl border border-slate-300 px-6 py-2.5 font-medium transition hover:bg-slate-100">
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link
//                 href="/login"
//                 className="rounded-xl border border-slate-300 px-6 py-2.5 font-medium text-slate-700 transition hover:bg-slate-100"
//               >
//                 Login
//               </Link>

//               <Link
//                 href="/register"
//                 className="rounded-xl bg-blue-600 px-6 py-2.5 font-medium text-white transition hover:bg-blue-700"
//               >
//                 Register
//               </Link>
//             </>
//           )}
//         </div>

//       {/* ================= Mobile Button ================= */}

// <button
//   onClick={() => setMobileOpen((prev) => !prev)}
//   className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
//   aria-label="Toggle navigation menu"
//   aria-expanded={mobileOpen}
// >
//   {mobileOpen ? <X size={28} /> : <Menu size={28} />}
// </button>
//       </nav>
// {/* ================= Mobile Menu ================= */}

// {mobileOpen && (
//   <div className="border-t border-slate-200 bg-white shadow-lg lg:hidden">
//     <div className="space-y-2 px-4 py-5">
//       {navigation.map((item) => {
//         const active = pathname === item.href;

//         return (
//           <Link
//             key={item.name}
//             href={item.href}
//             className={`block rounded-xl px-4 py-3 font-medium transition ${
//               active
//                 ? "bg-blue-600 text-white"
//                 : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"
//             }`}
//           >
//             {item.name}
//           </Link>
//         );
//       })}

//       <div className="my-4 border-t border-slate-200" />

//       {isLoggedIn ? (
//         <div className="space-y-3">
//           <Link
//             href="/dashboard"
//             className="block rounded-xl bg-blue-600 px-4 py-3 text-center font-medium text-white transition hover:bg-blue-700"
//           >
//             Dashboard
//           </Link>

//           <button className="w-full rounded-xl border border-slate-300 px-4 py-3 font-medium transition hover:bg-slate-100">
//             Logout
//           </button>
//         </div>
//       ) : (
//         <div className="space-y-3">
//           <Link
//             href="/login"
//             className="block rounded-xl border border-slate-300 px-4 py-3 text-center font-medium transition hover:bg-slate-100"
//           >
//             Login
//           </Link>

//           <Link
//             href="/register"
//             className="block rounded-xl bg-blue-600 px-4 py-3 text-center font-medium text-white transition hover:bg-blue-700"
//           >
//             Register
//           </Link>
//         </div>
//       )}
//     </div>
//   </div>
// )}
//     </header>
//   );
// }
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/properties" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  // Temporary auth state
  // Later replace with Better Auth session
  const isLoggedIn = false;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  // Close mobile menu after route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);


  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };

  }, []);


  // Escape close
  useEffect(() => {
    const handleEscape = (
      event: KeyboardEvent
    ) => {

      if(event.key === "Escape"){
        setMobileOpen(false);
      }

    };


    window.addEventListener(
      "keydown",
      handleEscape
    );


    return () =>
      window.removeEventListener(
        "keydown",
        handleEscape
      );

  }, []);



  return (

    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300

        ${
          scrolled
          ? `
           bg-[#F7F3EC]/90
            backdrop-blur-lg
            shadow-md
            border-b
            border-border
          `
          :
          `
           bg-[#F7F3EC]
          `
        }

      `}
    >


      <nav
        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-4
          sm:px-6
          lg:px-8
        "
      >


        {/* Logo */}

        <Link
          href="/"
          className="
            text-2xl
            font-bold
            tracking-tight
          "
        >

          <span className="text-primary">
            Property
          </span>

          <span className="text-secondary">
            Nest
          </span>

        </Link>



        {/* Desktop Navigation */}


        <div
          className="
            hidden
            lg:flex
            items-center
            rounded-full
            border
            border-border
            bg-white
            p-1
            shadow-sm
          "
        >

          {
            navigation.map((item)=>{

              const active =
                item.href === "/"
                ?
                pathname === "/"
                :
                pathname.startsWith(
                  item.href
                );


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
                      ?
                      `
                        bg-gradient-to-r
                        from-[#1E3A5F]
                        to-[#C89B3C]
                        text-white
                        shadow-md
                      `
                      :
                      `
                        text-foreground
                        hover:bg-[#F5EFE6]
                        hover:text-primary
                      `
                    }

                  `}
                >

                  {item.name}

                </Link>

              );

            })
          }


        </div>



        {/* Desktop Actions */}

        <div
          className="
            hidden
            lg:flex
            items-center
            gap-3
          "
        >

          {
            isLoggedIn
            ?

            <>

              <Link
                href="/dashboard"
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
                Dashboard
              </Link>


              <button
                className="
                  rounded-xl
                  border
                  border-border
                  px-6
                  py-2.5
                  font-medium
                  hover:bg-[#F5EFE6]
                "
              >
                Logout
              </button>

            </>


            :

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
                  hover:shadow-lg
                "
              >
                Register
              </Link>

            </>

          }


        </div>



        {/* Mobile Button */}

        <button
          onClick={()=>
            setMobileOpen(
              !mobileOpen
            )
          }
          className="
            rounded-lg
            p-2
            text-primary
            hover:bg-[#F5EFE6]
            lg:hidden
          "
          aria-label="Toggle menu"
        >

          {
            mobileOpen
            ?
            <X size={28}/>
            :
            <Menu size={28}/>
          }

        </button>


      </nav>
      
      {/* Mobile Menu */}

      {
        mobileOpen && (

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
                sm:px-6
              "
            >


              {/* Mobile Links */}

              {
                navigation.map((item)=>{

                  const active =
                    item.href === "/"
                    ?
                    pathname === "/"
                    :
                    pathname.startsWith(
                      item.href
                    );


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
                        transition-all
                        duration-300


                        ${
                          active
                          ?
                          `
                            bg-gradient-to-r
                            from-[#1E3A5F]
                            to-[#C89B3C]
                            text-white
                            shadow-md
                          `
                          :
                          `
                            text-foreground
                            hover:bg-[#F5EFE6]
                            hover:text-primary
                          `
                        }

                      `}
                    >

                      {item.name}

                    </Link>

                  );


                })
              }



              <div
                className="
                  my-5
                  border-t
                  border-border
                "
              />



              {/* Mobile Auth */}

              {
                isLoggedIn

                ?

                <div
                  className="
                    space-y-3
                  "
                >

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
                      hover:shadow-lg
                    "
                  >

                    Dashboard

                  </Link>


                  <button
                    className="
                      w-full
                      rounded-xl
                      border
                      border-border
                      px-4
                      py-3
                      font-medium
                      hover:bg-[#F5EFE6]
                    "
                  >

                    Logout

                  </button>


                </div>


                :


                <div
                  className="
                    space-y-3
                  "
                >


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
                      hover:shadow-lg
                    "
                  >

                    Register

                  </Link>


                </div>

              }


            </div>


          </div>

        )
      }


    </header>

  );

}