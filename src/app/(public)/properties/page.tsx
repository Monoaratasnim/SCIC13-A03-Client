"use client";

import { useEffect, useState } from "react";

import PropertyFilters from "@/components/properties/PropertyFilters";
import PropertyGrid from "@/components/properties/PropertyGrid";

type Property = {
  _id: string;
  title: string;
  shortDescription: string;
  price: number;
  location: string;
  images: string[];
  category: string;
  propertyType: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
};

type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);

  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    limit: 8,
    total: 0,
    totalPages: 1,
  });

  const [filters, setFilters] = useState({
    search: "",
    category: "",
    propertyType: "",
    sort: "newest",
  });

  useEffect(() => {
    fetchProperties();
  }, [filters, page]);

  async function fetchProperties() {
    try {
      setLoading(true);

      const params = new URLSearchParams({
        search: filters.search,
        category: filters.category,
        propertyType: filters.propertyType,
        sort: filters.sort,
        page: page.toString(),
      });

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/properties?${params.toString()}`
      );

      const data = await res.json();

      setProperties(data.data || []);

      setPagination(
        data.pagination || {
          page: 1,
          limit: 8,
          total: 0,
          totalPages: 1,
        }
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold md:text-4xl">
          Explore Properties
        </h1>

        <p className="mt-3 max-w-2xl text-gray-500">
          Discover apartments, villas, duplexes, commercial spaces, and land
          across Bangladesh.
        </p>
      </div>

      <PropertyFilters
        filters={filters}
        setFilters={setFilters}
      />

      <PropertyGrid
        loading={loading}
        properties={properties}
        pagination={pagination}
        setPage={setPage}
      />
    </main>
  );
}