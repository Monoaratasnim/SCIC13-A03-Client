"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";


export default function GoogleAuthHandler() {

  const router = useRouter();

  const searchParams = useSearchParams();


  useEffect(() => {

    const token =
      searchParams.get("token");


    if (!token) return;


    // Save token

    localStorage.setItem(
      "token",
      token
    );



    // Decode JWT payload

    const payload =
      JSON.parse(
        atob(
          token.split(".")[1]
        )
      );



    const user = {

      id: payload.id,

      email: payload.email,

      role: payload.role,

      name: payload.name || "User",

    };



    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );



    // remove token from URL

   router.replace("/");
router.refresh();


  },[searchParams,router]);



  return null;

}