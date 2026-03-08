import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-(--color-bg-dark) text-(--color-white)">
      {/* Hero CTA Section */}
      <div className="px-6 md:px-8 py-12 md:py-16 flex flex-col gap-8 md:flex-row md:items-start md:justify-between max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-semibold text-(--color-white) mb-4 leading-tight">
            Creating Lasting Change, Together
          </h2>
          <p className="text-(--color-gray) text-base leading-relaxed">
            Empowering your business with transparent, sustainable solutions to meet today's
            challenges and secure tomorrow's future.
          </p>
        </div>

        <div className="flex gap-3 shrink-0">
          <button className="bg-(--color-white) text-(--color-black) px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors whitespace-nowrap">
            Get in touch
          </button>
          <button className="border border-(--color-white) text-(--color-white) px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors whitespace-nowrap">
            Dashboard
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-dashed border-(--color-gray) mx-6 md:mx-8" />

      {/* Footer Links Section */}
      <div className="px-6 md:px-8 py-10 md:py-12 max-w-7xl mx-auto grid grid-cols-2 gap-10 md:flex md:items-start md:justify-between">

        {/* Logo + tagline — pleine largeur sur mobile */}
        <div className="col-span-2 md:max-w-xs">
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/img/logo.png"
              alt="Inovasi Agriplot logo"
              width={48}
              height={48}
            />
            <div>
              <div className="text-xs text-(--color-gray) uppercase tracking-widest">inovasi</div>
              <div className="text-lg font-bold text-(--color-white) leading-none">agriplot</div>
            </div>
          </div>
          <p className="text-(--color-gray) text-sm leading-relaxed">
            Ensure Compliance Regulation with Agriplot's Due Diligence System
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-(--color-gray) text-sm font-medium mb-4">Explore</h3>
          <ul className="space-y-3">
            <li><Link href="/about" className="text-(--color-white) text-sm">About us</Link></li>
            <li><Link href="/features" className="text-(--color-white) text-sm">Features</Link></li>
            <li><Link href="/blog" className="text-(--color-white) text-sm">Blog</Link></li>
            <li><Link href="/faqs" className="text-(--color-white) text-sm">FAQs</Link></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-(--color-gray) text-sm font-medium mb-4">Connect</h3>
          <ul className="space-y-3">
            <li>
              <a href="mailto:agriplot@inovasidigital.asia" className="text-(--color-white) text-sm break-all">
                agriplot@inovasidigital.asia
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-(--color-white) text-sm">
                Linkedin
              </a>
            </li>
          </ul>
        </div>

        {/* Addresses */}
        <div>
          <h3 className="text-(--color-gray) text-sm font-medium mb-4">Addresses</h3>
          <ul className="space-y-3">
            <li className="text-(--color-white) text-sm">Jakarta, Indonesia</li>
            <li className="text-(--color-white) text-sm">Kuala Lumpur, Malaysia</li>
            <li className="text-(--color-white) text-sm">Rotterdam, Netherlands</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 md:px-8 py-5 max-w-7xl mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-(--color-gray) text-sm">
          © Inovasi Agriplot 2024. All Rights Reserved
        </p>
        <div className="flex gap-6">
          <Link href="/privacy" className="text-(--color-gray) text-sm hover:text-(--color-white) transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-(--color-gray) text-sm hover:text-(--color-white) transition-colors">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}