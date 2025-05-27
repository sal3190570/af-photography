"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
function Item({ label, number }: { label: string; number: number }) {
  const [isHovered, setIsHovered] = useState(false);

  // Generate valid path
  const path =
    label === "Home" ? "/" : `/${label.toLowerCase().replace(/\s+/g, "-")}`;
  const content = (
    <>
      <Link href={path}>
        <span className={styles.numberLabel}>0{number}</span>
        {label}
      </Link>
    </>
  );

  return (
    <motion.li
      className={styles.item}
      style={{
        justifyContent: isHovered ? "flex-end" : "flex-start",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.span layout className={styles.text}>
        {content}
      </motion.span>
      <motion.span layout className={styles.text} aria-hidden>
        {content}
      </motion.span>
    </motion.li>
  );
}

function TextReveal() {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <ul className={styles.list}>
        <Item label="Home" number={1} />
        <Item label="Bookings" number={2} />
        <Item label="Gallery" number={3} />
        <Item label="Contact" number={4} />
        <Item label="About Us" number={5} />
      </ul>
    </div>
  );
}

export default function Navbar() {
  return (
    <nav style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <TextReveal />
    </nav>
  );
}
