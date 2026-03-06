import SustainabilityCard from "./SustainabilityCard";

export const cards = [
  {
    id: 1,
    title: "Supplier Legal Plot",
    description:
      "Understanding the legal boundaries of your product's sources ensures supplier compliance and prevents penalties for illegal plantations.",
    image: "/img/article.jpg",
    href: "#",
  },
  {
    id: 2,
    title: "Supplier Legal Plot",
    description:
      "Understanding the legal boundaries of your product's sources ensures supplier compliance and prevents penalties for illegal plantations.",
    image: "/img/article.jpg",
    href: "#",
  },
  {
    id: 3,
    title: "Supplier Legal Plot",
    description:
      "Understanding the legal boundaries of your product's sources ensures supplier compliance and prevents penalties for illegal plantations.",
    image: "/img/article.jpg",
    href: "#",
  },
  {
    id: 4,
    title: "Supplier Legal Plot",
    description:
      "Understanding the legal boundaries of your product's sources ensures supplier compliance and prevents penalties for illegal plantations.",
    image: "/img/article.jpg",
    href: "#",
  },
  {
    id: 5,
    title: "Supplier Legal Plot",
    description:
      "Understanding the legal boundaries of your product's sources ensures supplier compliance and prevents penalties for illegal plantations.",
    image: "/img/article.jpg",
    href: "#",
  },
  {
    id: 6,
    title: "Supplier Legal Plot",
    description:
      "Understanding the legal boundaries of your product's sources ensures supplier compliance and prevents penalties for illegal plantations.",
    image: "/img/article.jpg",
    href: "#",
  },
];

export default function SustainabilityGoals() {
  return (
    <section className="bg-gray-50 px-6 py-16 font-sans">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl sm:text-6xl font-bold text-gray-900 text-center leading-tight mb-12">
          Guiding Businesses Toward
          <br />
          Sustainability Goals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <SustainabilityCard key={card.id} card={card} />
          ))}
        </div>

      </div>
    </section>
  );
}