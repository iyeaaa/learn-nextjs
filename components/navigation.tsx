// app/Navigation.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/" className={pathname === "/" ? "font-bold" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about-us"
            className={pathname === "/about-us" ? "font-bold" : ""}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
