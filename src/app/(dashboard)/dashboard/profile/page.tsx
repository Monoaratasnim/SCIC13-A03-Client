// "use client";

// import { useEffect, useState } from "react";

// interface User {
//   name: string;
//   email: string;
//   role: "user" | "owner" | "admin";
// }

// export default function ProfilePage() {
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");

//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   return (
//     <div className="space-y-8">

      
//       {/* Profile + Account Overview */}

//       <div
//         className="
//           grid
//           gap-6
//           xl:grid-cols-5
//         "
//       >

//         {/* Left Card */}

//         <section
//           className="
//             rounded-3xl
//             bg-white
//             p-8
//             text-center
//             shadow-sm
//             xl:col-span-2
//           "
//         >

//           <div
//             className="
//               mx-auto
//               flex
//               h-28
//               w-28
//               items-center
//               justify-center
//               rounded-full
//               bg-[#1E3A5F]
//               text-4xl
//               font-bold
//               text-white
//             "
//           >
//             {user?.name?.charAt(0).toUpperCase() || "U"}
//           </div>

//           <h2
//             className="
//               mt-6
//               text-3xl
//               font-bold
//               text-[#1E3A5F]
//             "
//           >
//             {user?.name || "User"}
//           </h2>

//           <p
//             className="
//               mt-2
//               break-all
//               text-slate-500
//             "
//           >
//             {user?.email || "No email"}
//           </p>

//           <div
//             className="
//               mt-6
//               flex
//               flex-wrap
//               justify-center
//               gap-3
//             "
//           >

//             <span
//               className="
//                 rounded-full
//                 bg-[#F5EFE6]
//                 px-4
//                 py-2
//                 text-sm
//                 font-semibold
//                 capitalize
//                 text-[#1E3A5F]
//               "
//             >
//               {user?.role}
//             </span>

//             <span
//               className="
//                 rounded-full
//                 border
//                 border-[#1E3A5F]/20
//                 bg-blue-50
//                 px-4
//                 py-2
//                 text-sm
//                 font-semibold
//                 text-[#1E3A5F]
//               "
//             >
//               Active
//             </span>

//           </div>

//         </section>

//         {/* Right Card */}

//         <section
//           className="
//             rounded-3xl
//             bg-white
//             p-8
//             shadow-sm
//             xl:col-span-3
//           "
//         >

//           <h2
//             className="
//               mb-8
//               text-2xl
//               font-bold
//               text-[#1E3A5F]
//             "
//           >
//             Account Overview
//           </h2>

//           <div
//             className="
//               grid
//               gap-5
//               sm:grid-cols-2
//             "
//           >

//             <InfoCard
//               label="Full Name"
//               value={user?.name || "-"}
//             />

//             <InfoCard
//               label="Email Address"
//               value={user?.email || "-"}
//             />

//             <InfoCard
//               label="Role"
//               value={user?.role || "-"}
//               capitalize
//             />

//             <InfoCard
//               label="Status"
//               value="Active"
//             />

//             <InfoCard
//               label="Member Since"
//               value="July 2026"
//             />

//             <InfoCard
//               label="Verification"
//               value="Verified"
//             />

//           </div>

//         </section>

//       </div>

//     </div>
//   );
// }

// function InfoCard({
//   label,
//   value,
//   capitalize = false,
// }: {
//   label: string;
//   value: string;
//   capitalize?: boolean;
// }) {
//   return (
//     <div
//       className="
//         rounded-2xl
//         border
//         border-slate-200
//         bg-slate-50
//         p-5
//       "
//     >
//       <p
//         className="
//           text-sm
//           text-slate-500
//         "
//       >
//         {label}
//       </p>

//       <h3
//         className={`
//           mt-2
//           text-lg
//           font-semibold
//           text-[#1E3A5F]
//           ${capitalize ? "capitalize" : ""}
//         `}
//       >
//         {value}
//       </h3>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";

interface User {
  name: string;
  email: string;
  role: "user" | "owner" | "admin";
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="space-y-8">

      {/* Page Header */}

      <section
        className="
          rounded-3xl
          bg-white
          p-6
          shadow-sm
          sm:p-8
        "
      >
        <h1
          className="
            text-2xl
            font-bold
            text-[#1E3A5F]
            sm:text-3xl
          "
        >
          My Profile
        </h1>

        <p
          className="
            mt-2
            text-sm
            text-slate-500
            sm:text-base
          "
        >
          View your personal information and account details.
        </p>
      </section>

      {/* Main Content */}

      <div
        className="
          grid
          gap-6
          xl:grid-cols-5
        "
      >
        {/* Profile Card */}

        <section
          className="
            rounded-3xl
            bg-white
            p-6
            text-center
            shadow-sm
            sm:p-8
            xl:col-span-2
          "
        >
          <div
            className="
              mx-auto
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              bg-[#1E3A5F]
              text-3xl
              font-bold
              text-white
              sm:h-28
              sm:w-28
              sm:text-4xl
            "
          >
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </div>

          <h2
            className="
              mt-6
              text-2xl
              font-bold
              text-[#1E3A5F]
              sm:text-3xl
            "
          >
            {user?.name || "User"}
          </h2>

          <p
            className="
              mt-2
              break-all
              text-sm
              text-slate-500
              sm:text-base
            "
          >
            {user?.email || "No email available"}
          </p>

          <div
            className="
              mt-6
              flex
              flex-wrap
              justify-center
              gap-2
              sm:gap-3
            "
          >
            <span
              className="
                rounded-full
                bg-[#F5EFE6]
                px-4
                py-2
                text-sm
                font-semibold
                capitalize
                text-[#1E3A5F]
              "
            >
              {user?.role}
            </span>

            <span
              className="
                rounded-full
                border
                border-[#1E3A5F]/20
                bg-blue-50
                px-4
                py-2
                text-sm
                font-semibold
                text-[#1E3A5F]
              "
            >
              Active
            </span>
          </div>
        </section>

        {/* Account Overview */}

        <section
          className="
            rounded-3xl
            bg-white
            p-6
            shadow-sm
            sm:p-8
            xl:col-span-3
          "
        >
          <h2
            className="
              mb-8
              text-xl
              font-bold
              text-[#1E3A5F]
              sm:text-2xl
            "
          >
            Account Overview
          </h2>

          <div
            className="
              grid
              gap-5
              sm:grid-cols-2
            "
          >
            <InfoCard
              label="Full Name"
              value={user?.name || "-"}
            />

            <InfoCard
              label="Email Address"
              value={user?.email || "-"}
            />

            <InfoCard
              label="Role"
              value={user?.role || "-"}
              capitalize
            />

            <InfoCard
              label="Status"
              value="Active"
            />

            <InfoCard
              label="Member Since"
              value="July 2026"
            />

            <InfoCard
              label="Verification"
              value="Verified"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
function InfoCard({
  label,
  value,
  capitalize = false,
}: {
  label: string;
  value: string;
  capitalize?: boolean;
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200
        bg-slate-50
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#1E3A5F]/20
        hover:bg-white
        hover:shadow-md
      "
    >
      <p
        className="
          text-xs
          font-medium
          uppercase
          tracking-wide
          text-slate-500
          sm:text-sm
        "
      >
        {label}
      </p>

      <h3
        className={`
          mt-3
          break-words
          text-base
          font-semibold
          text-[#1E3A5F]
          sm:text-lg
          ${capitalize ? "capitalize" : ""}
        `}
      >
        {value}
      </h3>
    </div>
  );
}