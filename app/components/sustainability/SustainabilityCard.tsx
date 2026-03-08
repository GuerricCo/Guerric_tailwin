import Image from "next/image";
import Link from "next/link";

export default function SustainabilityCard({ card }: { card: any }) {
  return (
    <div className="group flex flex-col">

      <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-4">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="text-base font-bold text-(--color-black) mb-2">
        {card.title}
      </h3>

      <p className="text-sm text-(--color-gray) leading-relaxed mb-4 flex-1">
        {card.description}
      </p>

      <Link
        href={card.href}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-(--color-emerald) w-fit"
      >
        Learn More
        <span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </Link>

    </div>
  );
}