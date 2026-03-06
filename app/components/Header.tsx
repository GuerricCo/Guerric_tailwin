"use client";
import Image from "next/image";

import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 flex justify-center mt-10">
            <div className="w-[50%] max-w-6xl bg-[#0E1117] text-white rounded-full px-6 py-3 flex items-center justify-between shadow-lg border border-white/10">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/img/inovasi_logo.png"
                            alt="Inovasi Logo"
                            width={100}
                            height={100}
                            className="w-8 h-8 md:w-35 md:h-8 object-contain"
                        />
                    </div>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-12 text-sm text-gray-300">
                    <Link href="/" className="hover:text-white transition">
                        Home
                    </Link>
                    <Link href="/about" className="hover:text-white transition">
                        About
                    </Link>
                    <Link href="/features" className="hover:text-white transition">
                        Features
                    </Link>
                </nav>

                {/* Dashboard Button */}
                <Link
                    href="/dashboard"
                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 transition px-4 py-2 rounded-full text-sm border border-white/10"
                >
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Dashboard
                </Link>

            </div>
        </header>
    );
}