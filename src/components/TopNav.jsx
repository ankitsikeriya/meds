"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/blogs", label: "Blogs" },
  { href: "/symptom-checker", label: "Symptom Checker" },
  { href: "/doctors", label: "Doctors" },
  { href: "/users", label: "Users" },
  { href: "/admin", label: "Admin" },
];

export default function TopNav() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight">
          Meds
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors hover:text-foreground/80 ${
                pathname === l.href ? "text-foreground" : "text-foreground/70"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-sm hover:opacity-90">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
