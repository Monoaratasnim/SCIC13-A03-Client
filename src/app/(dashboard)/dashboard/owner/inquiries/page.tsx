"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  getOwnerInquiries,
  updateInquiryStatus,
  deleteInquiry,
} from "@/lib/inquiryApi";

import type {
  Inquiry,
} from "@/types/inquiry.types";

export default function InquiriesPage() {

  const [inquiries, setInquiries] =
    useState<Inquiry[]>([]);

  const [loading, setLoading] =
    useState(true);

  const fetchInquiries = async () => {

    try {

      setLoading(true);

      const data =
        await getOwnerInquiries();

      setInquiries(data);

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to load inquiries"
      );

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchInquiries();

  }, []);

  const handleStatusChange = async (
    id: string,
    status:
      | "pending"
      | "contacted"
      | "closed"
  ) => {

    try {

      await updateInquiryStatus(
        id,
        status
      );

      toast.success(
        "Status updated"
      );

      fetchInquiries();

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to update status"
      );

    }

  };

  const handleDelete = async (
    id: string
  ) => {

    try {

      await deleteInquiry(id);

      setInquiries((prev) =>
        prev.filter(
          (item) =>
            item._id !== id
        )
      );

      toast.success(
        "Inquiry deleted"
      );

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to delete inquiry"
      );

    }

  };

  if (loading) {

    return (

      <div
        className="
          rounded-2xl
          bg-white
          p-10
          text-center
          text-slate-500
        "
      >

        Loading inquiries...

      </div>

    );

  }

  return (

    <div
      className="
        space-y-8
      "
    >
            {/* Header */}

      <section
        className="
          rounded-2xl
          bg-white
          p-6
          shadow-sm
        "
      >

        <h1
          className="
            text-3xl
            font-bold
            text-[#1E3A5F]
          "
        >

          Property Inquiries

        </h1>

        <p
          className="
            mt-2
            text-slate-500
          "
        >

          Manage messages from users interested
          in your properties.

        </p>

      </section>

      {inquiries.length === 0 ? (

        <section
          className="
            rounded-2xl
            bg-white
            p-10
            text-center
            shadow-sm
          "
        >

          <h2
            className="
              text-xl
              font-semibold
              text-[#1E3A5F]
            "
          >

            No inquiries yet

          </h2>

          <p
            className="
              mt-2
              text-slate-500
            "
          >

            When users contact you,
            their messages will appear here.

          </p>

        </section>

      ) : (

        <section
          className="
            grid
            gap-6
          "
        >

          {inquiries.map((inquiry) => (

            <div
              key={inquiry._id}
              className="
                rounded-2xl
                bg-white
                p-6
                shadow-sm
                space-y-5
              "
            >

              {/* Sender + Status */}

              <div
                className="
                  flex
                  flex-col
                  gap-4
                  md:flex-row
                  md:items-center
                  md:justify-between
                "
              >

                <div>

                  <h2
                    className="
                      text-xl
                      font-bold
                      text-[#1E3A5F]
                    "
                  >

                    {typeof inquiry.sender === "object"
                      ? inquiry.sender.name
                      : "User"}

                  </h2>

                  <p
                    className="
                      text-sm
                      text-slate-500
                    "
                  >

                    {typeof inquiry.sender === "object"
                      ? inquiry.sender.email
                      : ""}

                  </p>

                </div>

                <select
                  value={inquiry.status}
                  onChange={(e) =>
                    handleStatusChange(
                      inquiry._id,
                      e.target.value as
                        | "pending"
                        | "contacted"
                        | "closed"
                    )
                  }
                  className="
                    rounded-xl
                    border
                    border-slate-300
                    px-4
                    py-2
                    text-sm
                  "
                >

                  <option value="pending">
                    Pending
                  </option>

                  <option value="contacted">
                    Contacted
                  </option>

                  <option value="closed">
                    Closed
                  </option>

                </select>

              </div>

              {/* Property */}

              <div
                className="
                  rounded-xl
                  bg-slate-50
                  p-4
                "
              >

                <p
                  className="
                    text-sm
                    text-slate-500
                  "
                >

                  Property

                </p>

                <h3
                  className="
                    mt-1
                    font-semibold
                    text-[#1E3A5F]
                  "
                >

                  {typeof inquiry.property === "object"
                    ? inquiry.property.title
                    : "Property"}

                </h3>

              </div>
                            {/* Message */}

              <div>

                <h3
                  className="
                    font-semibold
                    text-[#1E3A5F]
                  "
                >

                  Message

                </h3>

                <p
                  className="
                    mt-2
                    leading-7
                    text-slate-600
                  "
                >

                  {inquiry.message}

                </p>

              </div>

              {/* Footer */}

              <div
                className="
                  flex
                  flex-col
                  gap-4
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >

                <div>

                  <p
                    className="
                      text-sm
                      text-slate-500
                    "
                  >

                    Phone: {inquiry.phone}

                  </p>

                  <span
                    className={`
                      mt-2
                      inline-block
                      rounded-full
                      px-3
                      py-1
                      text-xs
                      font-medium

                      ${
                        inquiry.status === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : inquiry.status === "contacted"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }
                    `}
                  >

                    {inquiry.status}

                  </span>

                </div>

                <button
                  onClick={() =>
                    handleDelete(
                      inquiry._id
                    )
                  }
                  className="
                    rounded-xl
                    bg-red-500
                    px-5
                    py-2
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-red-600
                  "
                >

                  Delete Inquiry

                </button>

              </div>

            </div>

          ))}

        </section>

      )}

    </div>

  );

}