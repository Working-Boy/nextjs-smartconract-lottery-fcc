import Image from "next/image";
import styles from "./page.module.css";
import ManualHeader from "../components/ManualHeader";

export default function Home() {
  return (
    <div className={styles.page}>

      <ManualHeader />

    </div>
  );
}
