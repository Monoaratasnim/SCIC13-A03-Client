"use client";

export default function FeaturedPropertiesSkeleton() {
  return (
    <section className="py-20">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto mb-14 max-w-2xl text-center">

          <div className="mx-auto h-4 w-28 animate-pulse rounded-full bg-slate-200" />

          <div className="mx-auto mt-5 h-10 w-80 animate-pulse rounded-xl bg-slate-200" />

          <div className="mx-auto mt-5 h-5 w-full animate-pulse rounded bg-slate-200" />

          <div className="mx-auto mt-3 h-5 w-3/4 animate-pulse rounded bg-slate-200" />

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {Array.from({ length: 6 }).map((_, index) => (

            <div
              key={index}
              className="
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-sm
              "
            >
              {/* Image */}

              <div className="h-64 animate-pulse bg-slate-200" />

              {/* Content */}

              <div className="p-6">

                <div className="h-7 w-3/4 animate-pulse rounded bg-slate-200" />

                <div className="mt-4 h-4 w-1/2 animate-pulse rounded bg-slate-200" />

                <div className="mt-6 space-y-3">

                  <div className="h-4 animate-pulse rounded bg-slate-200" />

                  <div className="h-4 animate-pulse rounded bg-slate-200" />

                  <div className="h-4 w-5/6 animate-pulse rounded bg-slate-200" />

                </div>

                {/* Stats */}

                <div className="mt-8 grid grid-cols-3 gap-3">

                  {Array.from({ length: 3 }).map((_, i) => (

                    <div
                      key={i}
                      className="
                        h-20
                        animate-pulse
                        rounded-2xl
                        bg-slate-100
                      "
                    />

                  ))}

                </div>

                {/* Button */}

                <div className="mt-8 h-12 animate-pulse rounded-2xl bg-slate-200" />

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}