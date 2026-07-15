"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { sendInquiry } from "@/lib/inquiryApi";


interface ContactOwnerProps {
  propertyId: string;
  disabled?: boolean;
}



export default function ContactOwner({
  propertyId,
  disabled = false,
}: ContactOwnerProps) {


  const [open, setOpen] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [loading, setLoading] =
    useState(false);





  useEffect(() => {

    document.body.style.overflow =
      open ? "hidden" : "auto";


    return () => {

      document.body.style.overflow =
        "auto";

    };

  }, [open]);







  const handleOpen = () => {

    const token =
      localStorage.getItem("token");


    if (!token) {

      window.location.href = "/login";

      return;

    }


    setOpen(true);

  };








  const handleSubmit = async (
    e: React.FormEvent
  ) => {


    e.preventDefault();



    if (
      !phone.trim() ||
      !message.trim()
    ) {

      toast.error(
        "Please fill all fields"
      );

      return;

    }




    try {


      setLoading(true);



      await sendInquiry({

        property: propertyId,

        phone: phone.trim(),

        message: message.trim(),

      });



      toast.success(
        "Inquiry sent successfully"
      );



      setPhone("");

      setMessage("");

      setOpen(false);



    } catch(error) {


      toast.error(

        error instanceof Error
          ? error.message
          : "Failed to send inquiry"

      );


    } finally {


      setLoading(false);


    }


  };







  return (

    <>


      <button

        type="button"

        disabled={disabled}

        onClick={handleOpen}

        className={`
          w-full
          rounded-2xl
          py-3
          font-semibold
          transition-all

          ${
            disabled

            ?

            `
            cursor-not-allowed
            bg-gray-300
            text-gray-600
            `

            :

            `
            bg-[#C89B3C]
            text-white
            hover:bg-[#b88a2d]
            hover:shadow-lg
            `

          }
        `}

      >

        {
          disabled
            ? "Your Property"
            : "✉️ Send Inquiry"
        }


      </button>









      {
        open && (

          <div

            onClick={() =>
              setOpen(false)
            }

            className="
              fixed
              inset-0
              z-[999999]
              flex
              items-center
              justify-center

              bg-black/50

              px-4
              pt-24
            "

          >





            <div

              onClick={(e) =>
                e.stopPropagation()
              }

              className="
                w-full
                max-w-lg

                rounded-3xl
                bg-white

                p-6

                shadow-2xl

                sm:p-8
              "

            >






              {/* Header */}


              <div

                className="
                  mb-6
                  flex
                  items-start
                  justify-between
                  gap-4
                "

              >


                <div>


                  <h2

                    className="
                      text-xl
                      font-bold
                      text-[#1E3A5F]

                      sm:text-2xl
                    "

                  >

                    Send Inquiry

                  </h2>



                  <p

                    className="
                      mt-1
                      text-sm
                      text-gray-500
                    "

                  >

                    Contact property owner

                  </p>



                </div>





                <button

                  type="button"

                  onClick={() =>
                    setOpen(false)
                  }


                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center

                    rounded-full

                    bg-slate-100

                    text-xl
                    text-gray-500

                    hover:bg-slate-200
                  "

                >

                  ×

                </button>



              </div>









              <form

                onSubmit={handleSubmit}

                className="space-y-5"

              >





                <div>


                  <label

                    className="
                      mb-2
                      block

                      text-sm
                      font-medium
                      text-slate-700
                    "

                  >

                    Phone Number

                  </label>




                  <input

                    type="tel"

                    value={phone}

                    onChange={(e) =>
                      setPhone(e.target.value)
                    }

                    placeholder="01XXXXXXXXX"


                    className="
                      w-full

                      rounded-xl

                      border
                      border-slate-200

                      px-4
                      py-3

                      text-sm

                      outline-none

                      focus:border-[#C89B3C]

                      focus:ring-2

                      focus:ring-[#C89B3C]/20
                    "

                    required

                  />


                </div>









                <div>


                  <label

                    className="
                      mb-2
                      block

                      text-sm
                      font-medium
                      text-slate-700
                    "

                  >

                    Message

                  </label>





                  <textarea

                    rows={4}

                    value={message}

                    onChange={(e) =>
                      setMessage(e.target.value)
                    }

                    placeholder="I am interested in this property..."


                    className="
                      w-full

                      resize-none

                      rounded-xl

                      border
                      border-slate-200

                      p-4

                      text-sm

                      outline-none


                      focus:border-[#C89B3C]

                      focus:ring-2

                      focus:ring-[#C89B3C]/20
                    "

                    required

                  />


                </div>







                <button

                  type="submit"

                  disabled={loading}

                  className="
                    w-full

                    rounded-xl

                    bg-[#1E3A5F]

                    py-3

                    font-semibold

                    text-white


                    hover:bg-[#162d4a]


                    disabled:cursor-not-allowed

                    disabled:opacity-60
                  "

                >

                  {
                    loading
                      ? "Sending..."
                      : "Send Inquiry"
                  }


                </button>





              </form>






            </div>





          </div>


        )
      }




    </>

  );

}