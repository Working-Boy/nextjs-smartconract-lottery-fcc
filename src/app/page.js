import Image from "next/image";
import styles from "./page.module.css";
// import ManualHeader from "../components/ManualHeader";
import AutoHeader from "../components/AutoHeader";

export default function Home() {
  return (
    <div className={styles.page}>

      {/*<ManualHeader />*/}
      <AutoHeader />

    </div>
  );
}
