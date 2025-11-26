"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ShoppingCart, User } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const navLinks = [{ href: "/", label: "Home" }];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { count } = useCart();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold">
            M
          </div>
          <span className="text-lg font-semibold tracking-tight">
            MyShop
          </span>
        </Link>

        <nav className="hidden gap-6 text-sm md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition ${
                pathname === link.href
                  ? "text-blue-400"
                  : "text-slate-300 hover:text-blue-300"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {user?.role === "admin" && (
            <Link
              href="/admin"
              className={`transition ${
                pathname.startsWith("/admin")
                  ? "text-blue-400"
                  : "text-slate-300 hover:text-blue-300"
              }`}
            >
              Admin
            </Link>
          )}

          {user?.role === "user" && (
            <Link
              href="/user"
              className={`transition ${
                pathname.startsWith("/user")
                  ? "text-blue-400"
                  : "text-slate-300 hover:text-blue-300"
              }`}
            >
              Akun Saya
            </Link>
          )}
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="hidden text-xs text-slate-400 sm:inline">
                {user.email} ({user.role})
              </span>
              <button
                onClick={handleLogout}
                className="hidden rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-100 hover:bg-slate-700 sm:inline"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/auth/login"
              className="flex items-center gap-1 text-sm text-slate-300 hover:text-blue-300"
            >
              <User size={18} />
              <span className="hidden sm:inline">Login</span>
            </Link>
          )}

          <Link
            href="/cart"
            className="relative flex items-center rounded-full bg-slate-800 px-3 py-1.5 text-sm text-slate-100 hover:bg-slate-700"
          >
            <ShoppingCart size={18} />
            <span className="ml-2 hidden sm:inline">Cart</span>
            {count > 0 && (
              <span className="ml-2 rounded-full bg-blue-500 px-2 text-xs font-semibold">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
