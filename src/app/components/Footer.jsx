import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-8 text-slate-600 sm:px-8">
      <div className="footer footer-center flex flex-col gap-4">
        <aside>
          <p className="text-lg font-bold text-blue-900">Shoping</p>
          <p className="text-sm">Simple shopping demo built with Next.js</p>
        </aside>

        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
          <Link href="/" className="transition hover:text-blue-600">
            Home
          </Link>
          <Link href="/products" className="transition hover:text-blue-600">
            Products
          </Link>
          <Link href="/sign-in" className="transition hover:text-blue-600">
            Sign In
          </Link>
          <Link href="/sign-up" className="transition hover:text-blue-600">
            Sign Up
          </Link>
        </nav>

        <p className="text-xs">
          © 2026 Shoping. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
