"use client";

import Image from "next/image";

type GoogleButtonProps = {
  onClick: () => void;
  loading?: boolean;
};

export default function GoogleButton({
  onClick,
  loading = false,
}: GoogleButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className="
        flex
        h-12
        w-full
        items-center
        justify-center
        gap-3
        rounded-2xl
        border
        border-slate-200
        bg-white
        text-sm
        font-semibold
        text-[#1E3A5F]
        shadow-sm
        transition-all
        duration-200
        hover:border-[#C89B3C]
        hover:shadow-md
        disabled:cursor-not-allowed
        disabled:opacity-60
      "
    >
      <Image
        src="/images/google.png"
        alt="Google"
        width={20}
        height={20}
      />

      {loading ? "Connecting..." : "Continue with Google"}
    </button>
  );
}