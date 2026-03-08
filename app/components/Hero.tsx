"use client";
import { Grip } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-(--color-gray-light)">

      {/* Badge */}
      <div className="mb-6">
        <span className="inline-flex items-center gap-2 bg-(--color-white) border text-(--color-emerald) text-sm px-2 py-1 rounded-lg shadow-sm">
          <Grip />
          EUDR Specialist
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-semibold text-(--color-black) leading-tight max-w-4xl">
        Insights for Building a
        <br />
        Sustainable Future
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-(--color-gray) text-base md:text-lg max-w-2xl">
        Introducing the Agriplot Due-Diligence system:
        <br />
        Your partner for compliance with EU Deforestation Regulation.
      </p>

      {/* Tags */}
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="bg-(--color-white) border border-(--color-gray) font-bold text-sm px-3 py-1 rounded-lg shadow-sm"
          >
            Team Group
          </span>
        ))}
      </div>

    </section>
  );
}