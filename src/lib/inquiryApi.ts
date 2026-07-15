import { API } from "./api";

import type {
  Inquiry,
} from "@/types/inquiry.types";

/*
|--------------------------------------------------------------------------
| Send Inquiry
|--------------------------------------------------------------------------
*/

export async function sendInquiry(
  payload: {
    property: string;
    message: string;
    phone: string;
  }
) {

  const token =
    localStorage.getItem("token");

  const res = await fetch(

    `${API}/inquiries`,

    {

      method: "POST",

      headers: {

        "Content-Type":
          "application/json",

        Authorization:
          `Bearer ${token}`,

      },

      body: JSON.stringify(payload),

    }

  );

  const data =
    await res.json();

  if (!res.ok) {

    throw new Error(

      data.message ||
      "Failed to send inquiry"

    );

  }

  return data.data;

}

/*
|--------------------------------------------------------------------------
| Get User Sent Inquiries
|--------------------------------------------------------------------------
*/

export async function getMyInquiries(): Promise<Inquiry[]> {

  const token =
    localStorage.getItem("token");

  const res = await fetch(

    `${API}/inquiries/my`,

    {

      headers: {

        Authorization:
          `Bearer ${token}`,

      },

      cache: "no-store",

    }

  );

  const data =
    await res.json();

  if (!res.ok) {

    throw new Error(

      data.message ||
      "Failed to fetch inquiries"

    );

  }

  return data.data;

}

/*
|--------------------------------------------------------------------------
| Get Owner Received Inquiries
|--------------------------------------------------------------------------
*/

export async function getOwnerInquiries(): Promise<Inquiry[]> {

  const token =
    localStorage.getItem("token");

  const res = await fetch(

    `${API}/inquiries/owner`,

    {

      headers: {

        Authorization:
          `Bearer ${token}`,

      },

      cache: "no-store",

    }

  );

  const data =
    await res.json();

  if (!res.ok) {

    throw new Error(

      data.message ||
      "Failed to fetch owner inquiries"

    );

  }

  return data.data;

}

/*
|--------------------------------------------------------------------------
| Update Inquiry Status
|--------------------------------------------------------------------------
*/

export async function updateInquiryStatus(

  id: string,

  status:
    | "pending"
    | "contacted"
    | "closed"

) {

  const token =
    localStorage.getItem("token");

  const res = await fetch(

    `${API}/inquiries/${id}/status`,

    {

      method:
        "PATCH",

      headers: {

        "Content-Type":
          "application/json",

        Authorization:
          `Bearer ${token}`,

      },

      body: JSON.stringify({

        status,

      }),

    }

  );

  const data =
    await res.json();

  if (!res.ok) {

    throw new Error(

      data.message ||
      "Failed to update inquiry status"

    );

  }

  return data.data;

}

/*
|--------------------------------------------------------------------------
| Delete Inquiry
|--------------------------------------------------------------------------
*/

export async function deleteInquiry(

  id: string

) {

  const token =
    localStorage.getItem("token");

  const res = await fetch(

    `${API}/inquiries/${id}`,

    {

      method:
        "DELETE",

      headers: {

        Authorization:
          `Bearer ${token}`,

      },

    }

  );

  const data =
    await res.json();

  if (!res.ok) {

    throw new Error(

      data.message ||
      "Failed to delete inquiry"

    );

  }

  return data;

}