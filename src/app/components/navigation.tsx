"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav>
      <Link
        href="/"
        className={pathname === "/" ? "font-bold mr-4" : "text-blue-500 mr-4"}
      >
        Home
      </Link>
      <Link href="/about" className={
          pathname === "/about" ? "font-bold mr-4" : "text-blue-500 mr-4"
        }>
        About
      </Link>
      <Link href="/products/1" className={
          pathname.startsWith("/products/1")
            ? "font-bold mr-4"
            : "text-blue-500 mr-4"
        }>
        Product 1
      </Link>
    </nav>
  );
};
/* Before adding 'use client':-
Error: You're importing a component that needs `usePathname`. This React Hook only works in a Client Component. To fix, mark the file (or its parent) with the `"use client"` directive. */
