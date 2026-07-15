"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { register } from "@/lib/authApi";

import PasswordInput from "./PasswordInput";
import RoleSelector from "./RoleSelector";

import toast from "react-hot-toast";

import type {
  RegisterData,
} from "@/types/auth.types";


export default function RegisterForm() {


  const router = useRouter();



  const [formData, setFormData] =
    useState<RegisterData>({
      name: "",
      email: "",
      password: "",
      role: "user",
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






  const handleRoleChange = (
    role: "user" | "owner"
  ) => {

    setFormData((prev) => ({
      ...prev,
      role,
    }));

  };









  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();



    try {


      setLoading(true);



      await register(formData);




      toast.success(
        "Account created successfully 🎉 Please login."
      );



      router.push("/login");




    } catch(error) {



      if(error instanceof Error){


        toast.error(
          error.message
        );


      }
      else{


        toast.error(
          "Registration failed"
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






      {/* Name */}

      <div className="mb-4">


        <label

          className="
          mb-2
          block
          text-sm
          font-medium
          text-[#1E3A5F]
          "

        >

          Full Name

        </label>




        <input


          name="name"


          value={formData.name}


          onChange={handleChange}


          placeholder="Enter your name"




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









      {/* Email */}


      <div className="mb-4">


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


      <div className="mb-5">


        <PasswordInput


          label="Password"


          name="password"


          value={formData.password}


          onChange={handleChange}




          placeholder="Minimum 6 characters"



        />


      </div>









      {/* Role */}


      <div className="mb-6">


        <RoleSelector


          value={formData.role}


          onChange={handleRoleChange}



        />


      </div>









      {/* Submit Button */}



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

          "Creating Account..."

          :

          "Create Account"
        }



      </button>









      {/* Login Link */}



      <p

        className="
        mt-6
        text-center
        text-sm
        text-gray-500
        "

      >


        Already have an account?



        <Link


          href="/login"


          className="
          ml-1
          font-semibold
          text-[#1E3A5F]

          transition

          hover:text-[#C89B3C]

          "

        >

          Login


        </Link>



      </p>





    </form>


  );


}