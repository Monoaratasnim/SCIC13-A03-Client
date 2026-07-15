import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-slate-50
        px-6
      "
    >
      <div className="text-center">

        <h1
          className="
            text-8xl
            font-extrabold
            text-[#1E3A5F]
          "
        >
          404
        </h1>

        <h2
          className="
            mt-4
            text-3xl
            font-bold
            text-gray-800
          "
        >
          Property Not Found
        </h2>

        <p
          className="
            mt-3
            max-w-md
            text-gray-500
          "
        >
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          href="/"
          className="
            mt-8
            inline-flex
            rounded-xl
            bg-[#1E3A5F]
            px-8
            py-3
            font-semibold
            text-white
            transition
            hover:bg-[#16304f]
          "
        >
          Go Home
        </Link>

      </div>
    </main>
  );
}