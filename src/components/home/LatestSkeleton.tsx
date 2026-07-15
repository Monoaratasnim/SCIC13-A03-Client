"use client";

export default function LatestSkeleton() {
  return (
    <div
      className="
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-sm
        animate-pulse
      "
    >
      {/* Image */}

      <div
        className="
          h-56
          w-full
          bg-slate-200
        "
      />

      {/* Content */}

      <div className="p-6">

        {/* Title */}

        <div
          className="
            h-6
            w-3/4
            rounded
            bg-slate-200
          "
        />

        {/* Description */}

        <div className="mt-4 space-y-2">

          <div className="h-4 rounded bg-slate-200" />

          <div className="h-4 w-5/6 rounded bg-slate-200" />

        </div>

        {/* Location */}

        <div
          className="
            mt-5
            h-4
            w-2/3
            rounded
            bg-slate-200
          "
        />

        {/* Features */}

        <div
          className="
            mt-6
            grid
            grid-cols-3
            gap-3
          "
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="
                rounded-xl
                bg-slate-100
                p-4
              "
            >
              <div
                className="
                  mx-auto
                  h-5
                  w-5
                  rounded-full
                  bg-slate-200
                "
              />

              <div
                className="
                  mx-auto
                  mt-3
                  h-4
                  w-8
                  rounded
                  bg-slate-200
                "
              />

              <div
                className="
                  mx-auto
                  mt-2
                  h-3
                  w-10
                  rounded
                  bg-slate-200
                "
              />

            </div>
          ))}
        </div>

        {/* Footer */}

        <div
          className="
            mt-6
            flex
            items-center
            justify-between
          "
        >
          <div>

            <div
              className="
                h-3
                w-20
                rounded
                bg-slate-200
              "
            />

            <div
              className="
                mt-2
                h-7
                w-28
                rounded
                bg-slate-200
              "
            />

          </div>

          <div
            className="
              h-11
              w-32
              rounded-xl
              bg-slate-200
            "
          />

        </div>

      </div>

    </div>
  );
}