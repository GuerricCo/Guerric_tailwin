"use client";
import Link from "next/link";

const faqs = [
  "What Is The EUDR?",
  "Who Is Impacted By EUDR?",
  "Can Small Companies Be Impacted By EUDR?",
  "What Penalties Are There For Non-Compliance?",
  "Where Can I Get Help With EUDR Compliance?",
  "What Is The Due Diligence Process Under The EUDR?",
];

export default function FaqSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-(--color-black) leading-tight">
          Have a question?<br />
          We are here to answer.
        </h2>

        <div className="flex items-center gap-4 sm:pt-2">
          <p className="text-sm text-(--color-gray) leading-snug max-w-[160px]">
            Still confuse? no need to worry, just contact us
          </p>
          <Link
            href="#"
            className="bg-(--color-black) text-(--color-white) text-sm font-medium px-5 py-2.5 rounded-full whitespace-nowrap"
          >
            Contact us
          </Link>
        </div>
      </div>

      {/* FAQ List */}
      <div className="border-t border-(--color-gray-light)">
        {faqs.map((question, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-5 border-b border-(--color-gray-light)"
          >
            <span className="text-sm sm:text-base text-(--color-black)">
              {question}
            </span>
            <span className="text-(--color-black) text-lg leading-none">+</span>
          </div>
        ))}
      </div>
    </section>
  );
}