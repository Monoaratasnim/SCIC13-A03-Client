"use client";

import { useState } from "react";
import {
  Eye,
  EyeOff,
  Lock,
} from "lucide-react";


type PasswordInputProps = {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  error?: string;

  autoComplete?: 
    "current-password" |
    "new-password";

  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};



export default function PasswordInput({
  label,
  name,
  value,
  placeholder = "Enter password",
  error,
  autoComplete = "new-password",
  onChange,
}: PasswordInputProps) {


  const [
    showPassword,
    setShowPassword,
  ] = useState(false);



  return (

    <div className="space-y-2">


      <label
        htmlFor={name}
        className="
        block
        text-sm
        font-medium
        text-[#1E3A5F]
        "
      >
        {label}
      </label>



      <div className="relative">


        <Lock
          className="
          pointer-events-none
          absolute
          left-4
          top-1/2
          h-5
          w-5
          -translate-y-1/2
          text-slate-400
          "
        />



        <input

          id={name}

          name={name}

          type={
            showPassword
            ? "text"
            : "password"
          }

          value={value}

          placeholder={placeholder}

          autoComplete={autoComplete}

          onChange={onChange}


          className={`
          h-12
          w-full
          rounded-2xl
          border
          bg-white
          px-12
          text-sm
          text-slate-700
          outline-none
          transition

          ${
            error
            ? 
            "border-red-400 focus:ring-4 focus:ring-red-100"
            :
            "border-slate-200 focus:border-[#1E3A5F] focus:ring-4 focus:ring-[#1E3A5F]/10"
          }
          `}
        />



        <button

          type="button"

          aria-label={
            showPassword
            ? "Hide password"
            : "Show password"
          }

          onClick={() =>
            setShowPassword(
              (prev)=>!prev
            )
          }

          className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          text-slate-400
          transition
          hover:text-[#1E3A5F]
          "

        >

          {
            showPassword
            ?
            <EyeOff className="h-5 w-5"/>
            :
            <Eye className="h-5 w-5"/>
          }


        </button>


      </div>



      {
        error && (

          <p className="
          text-sm
          text-red-500
          ">
            {error}
          </p>

        )
      }


    </div>

  );
}