"use client";

type Filters = {
  search: string;
  category: string;
  propertyType: string;
  sort: string;
};

type PropertyFiltersProps = {
  filters: Filters;
  setFilters: React.Dispatch<
    React.SetStateAction<Filters>
  >;
};


export default function PropertyFilters({
  filters,
  setFilters,
}: PropertyFiltersProps) {


  const handleChange = (
    field: keyof Filters,
    value: string
  ) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };


  const inputStyle = `
    h-12
    w-full
    rounded-xl
    bg-gray-50
    px-4
    text-sm
    text-gray-700
    outline-none
    ring-1
    ring-gray-200
    transition
    focus:bg-white
    focus:ring-2
    focus:ring-[#C89B3C]
  `;


  return (

    <section
      className="
      mb-10
      rounded-3xl
      bg-white
      p-5
      shadow-[0_10px_35px_rgba(0,0,0,0.08)]
      sm:p-6
      "
    >


      {/* Header */}

      <div className="mb-5">

        <h2
          className="
          text-xl
          font-bold
          text-[#1E3A5F]
          "
        >
          Find Your Dream Property
        </h2>


        <p
          className="
          mt-1
          text-sm
          text-gray-500
          "
        >
          Search apartments, villas and commercial spaces.
        </p>

      </div>





      <div
        className="
        grid
        grid-cols-1
        gap-4
        sm:grid-cols-2
        lg:grid-cols-4
        "
      >



        {/* Search */}

        <div>

          <label
            className="
            mb-2
            block
            text-sm
            font-medium
            text-[#1E3A5F]
            "
          >
            Search
          </label>


          <input

            type="text"

            placeholder="Search properties..."

            value={filters.search}

            onChange={(e)=>
              handleChange(
                "search",
                e.target.value
              )
            }

            className={inputStyle}

          />

        </div>





        {/* Category */}

        <div>

          <label
            className="
            mb-2
            block
            text-sm
            font-medium
            text-[#1E3A5F]
            "
          >
            Category
          </label>


          <select

            value={filters.category}

            onChange={(e)=>
              handleChange(
                "category",
                e.target.value
              )
            }

            className={inputStyle}

          >

            <option value="">
              All Categories
            </option>

            <option value="Residential">
              Residential
            </option>

            <option value="Commercial">
              Commercial
            </option>

          </select>


        </div>






        {/* Property Type */}

        <div>


          <label
            className="
            mb-2
            block
            text-sm
            font-medium
            text-[#1E3A5F]
            "
          >
            Property Type
          </label>



          <select

            value={filters.propertyType}

            onChange={(e)=>
              handleChange(
                "propertyType",
                e.target.value
              )
            }

            className={inputStyle}

          >

            <option value="">
              All Types
            </option>

            <option value="Apartment">
              Apartment
            </option>

            <option value="Villa">
              Villa
            </option>

            <option value="Duplex">
              Duplex
            </option>

            <option value="Commercial">
              Commercial
            </option>

            <option value="Land">
              Land
            </option>


          </select>


        </div>







        {/* Sort */}

        <div>


          <label
            className="
            mb-2
            block
            text-sm
            font-medium
            text-[#1E3A5F]
            "
          >
            Sort By
          </label>



          <select

            value={filters.sort}

            onChange={(e)=>
              handleChange(
                "sort",
                e.target.value
              )
            }

            className={inputStyle}

          >

            <option value="newest">
              Newest
            </option>


            <option value="price_asc">
              Price: Low → High
            </option>


            <option value="price_desc">
              Price: High → Low
            </option>


          </select>


        </div>



      </div>


    </section>

  );
}