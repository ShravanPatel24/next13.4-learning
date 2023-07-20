"use client";

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  return (
    <main className={styles.main}>
      <h1>Home Page</h1>
      <button
        style={{ cursor: "pointer" }}
        type="button"
        onClick={() => router.push("/studentlist")}
      >
        Click Me🙂
      </button>
    </main>
  );
}
