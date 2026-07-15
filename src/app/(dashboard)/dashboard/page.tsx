"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {

  const router = useRouter();

  useEffect(() => {

    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      router.replace("/login");
      return;
    }

    const user = JSON.parse(storedUser);

    const role = user.role;

    if (role === "owner") {
      router.replace("/dashboard/owner");
      return;
    }

    if (role === "admin") {
      router.replace("/dashboard/admin");
      return;
    }

    router.replace("/dashboard/user");

  }, [router]);


  return (
    <div className="
      flex
      min-h-screen
      items-center
      justify-center
      text-slate-600
    ">
      Loading dashboard...
    </div>
  );
}