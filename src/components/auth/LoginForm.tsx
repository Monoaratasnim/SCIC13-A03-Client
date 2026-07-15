"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { login } from "@/lib/authApi";

import PasswordInput from "./PasswordInput";

import toast from "react-hot-toast";

import type {
  LoginData,
} from "@/types/auth.types";



export default function LoginForm() {


  const router = useRouter();



  const [formData, setFormData] =
    useState<LoginData>({
      email: "",
      password: "",
    });



  const [loading, setLoading] =
    useState(false);






  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {


    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.value,
    }));


  };






  const handleSubmit = async (
    e: React.FormEvent
  ) => {


    e.preventDefault();



    try {


      setLoading(true);



      const result =
        await login(formData);




      localStorage.setItem(
        "token",
        result.data.token
      );



      localStorage.setItem(
        "user",
        JSON.stringify(
          result.data.user
        )
      );




      toast.success(
        "Login successful 🎉"
      );



      router.push("/");




    } catch(error) {


      if(error instanceof Error){


        toast.error(
          error.message
        );


      }
      else{


        toast.error(
          "Login failed"
        );


      }



    } finally {


      setLoading(false);


    }


  };









  return (


    <form

      onSubmit={handleSubmit}


      className="
      w-full
      rounded-3xl
      bg-white
      p-5
      shadow-xl
      sm:p-8
      "

    >






      {/* Email */}


      <div className="mb-5">


        <label
          className="
          mb-2
          block
          text-sm
          font-medium
          text-[#1E3A5F]
          "
        >

          Email

        </label>





        <input


          type="email"


          name="email"


          value={formData.email}


          onChange={handleChange}


          placeholder="example@email.com"



          className="
          h-12
          w-full
          rounded-2xl
          border
          border-slate-200
          px-4
          text-sm
          outline-none
          transition
          focus:border-[#1E3A5F]
          focus:ring-4
          focus:ring-[#1E3A5F]/10
          "


          required


        />


      </div>







      {/* Password */}


      <div className="mb-6">


        <PasswordInput


          label="Password"


          name="password"


          value={formData.password}


          onChange={handleChange}


          autoComplete="current-password"


        />


      </div>







      {/* Login Button */}


      <button

        disabled={loading}


        className="
        w-full
        rounded-xl
        bg-[#1E3A5F]
        py-3
        font-semibold
        text-white
        transition
        hover:bg-[#152b46]
        disabled:cursor-not-allowed
        disabled:opacity-60
        "

      >

        {
          loading
          ?
          "Logging in..."
          :
          "Login"
        }


      </button>








      {/* Divider */}


      <div
        className="
        my-6
        flex
        items-center
        gap-3
        "
      >

        <div className="h-px flex-1 bg-gray-200" />


        <span className="text-sm text-gray-400">
          OR
        </span>


        <div className="h-px flex-1 bg-gray-200" />


      </div>








      {/* Google Login */}


      <button


        type="button"


        onClick={() => {

          window.location.href =
            `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;

        }}



        className="
        flex
        w-full
        items-center
        justify-center
        gap-3
        rounded-xl
        border
        border-gray-200
        bg-white
        py-3
        font-semibold
        text-gray-700
        transition
        hover:bg-gray-50
        "

      >


        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >

          <path
            fill="#4285F4"
            d="M21.35 12.23c0-.72-.06-1.41-.2-2.08H12v3.94h5.26a4.5 4.5 0 0 1-1.95 2.96v2.46h3.16c1.85-1.7 2.88-4.2 2.88-7.28z"
          />


          <path
            fill="#34A853"
            d="M12 22c2.65 0 4.87-.88 6.5-2.38l-3.16-2.46c-.88.59-2 .94-3.34.94-2.57 0-4.75-1.73-5.53-4.06H3.2v2.54A10 10 0 0 0 12 22z"
          />


          <path
            fill="#FBBC05"
            d="M6.47 14.04a6 6 0 0 1 0-3.84V7.66H3.2a10 10 0 0 0 0 8.68l3.27-2.3z"
          />


          <path
            fill="#EA4335"
            d="M12 5.94c1.45 0 2.75.5 3.77 1.48l2.82-2.82C16.87 2.98 14.65 2 12 2A10 10 0 0 0 3.2 7.66l3.27 2.54C7.25 7.67 9.43 5.94 12 5.94z"
          />

        </svg>



        Continue with Google


      </button>








      {/* Register Link */}


      <p

        className="
        mt-6
        text-center
        text-sm
        text-gray-500
        "

      >

        Don't have an account?


        <a

          href="/register"

          className="
          ml-1
          font-semibold
          text-[#1E3A5F]
          transition
          hover:text-[#C89B3C]
          "

        >

          Create Account


        </a>


      </p>





    </form>


  );


}