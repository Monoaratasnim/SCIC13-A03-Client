"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import PropertyDetails from "@/components/properties/PropertyDetails";
import { getProperty } from "@/lib/propertyApi";

import type { Property } from "@/types/property.types";

export default function PropertyDetailsPage() {
  const params = useParams();

  const id = params.id as string;

  const [property, setProperty] =
    useState<Property | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    async function fetchProperty() {
      try {
        const data = await getProperty(id);

        setProperty(data);
      } catch (err) {
        console.error(err);

        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Failed to load property.");
        }
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchProperty();
    }
  }, [id]);

  if (loading) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-12">
        <div className="animate-pulse space-y-6">
          <div className="h-96 rounded-3xl bg-gray-200" />
          <div className="h-8 w-1/2 rounded bg-gray-200" />
          <div className="h-5 w-1/3 rounded bg-gray-200" />
          <div className="h-32 rounded bg-gray-200" />
        </div>
      </main>
    );
  }

  if (error || !property) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-4">
        <div className="rounded-3xl border border-red-100 bg-white p-10 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-[#1E3A5F]">
            Property Not Found
          </h2>

          <p className="mt-3 text-gray-500">
            {error || "This property does not exist."}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <PropertyDetails property={property} />
    </main>
  );
}