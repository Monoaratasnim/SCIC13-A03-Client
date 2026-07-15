"use client";

import { Building2, User } from "lucide-react";

type Role = "user" | "owner";

type RoleSelectorProps = {
  value: Role;
  onChange: (role: Role) => void;
};

export default function RoleSelector({
  value,
  onChange,
}: RoleSelectorProps) {
  const roles = [
    {
      value: "user" as const,
      title: "User",
      description: "Browse and purchase properties",
      icon: User,
    },
    {
      value: "owner" as const,
      title: "Owner",
      description: "List and manage your properties",
      icon: Building2,
    },
  ];

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-[#1E3A5F]">
        Register As
      </label>

      <div className="grid grid-cols-2 gap-4">
        {roles.map((role) => {
          const Icon = role.icon;
          const active = value === role.value;

          return (
            <button
              key={role.value}
              type="button"
              onClick={() => onChange(role.value)}
              className={`
                rounded-2xl
                border-2
                p-5
                text-left
                transition-all
                duration-200

                ${
                  active
                    ? "border-[#1E3A5F] bg-[#1E3A5F]/5 shadow-md"
                    : "border-slate-200 bg-white hover:border-[#C89B3C] hover:shadow-sm"
                }
              `}
            >
              <div
                className={`
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  transition

                  ${
                    active
                      ? "bg-[#1E3A5F] text-white"
                      : "bg-slate-100 text-[#1E3A5F]"
                  }
                `}
              >
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mt-4 font-semibold text-[#1E3A5F]">
                {role.title}
              </h3>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                {role.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}