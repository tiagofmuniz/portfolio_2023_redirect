import Link from "next/link";
import styles from "./LineIconKeyValue.module.scss";


export default function LineIconKeyValue({ icon, label, value,url }) {
  // console.log(label, value)
  return (
    <div className={styles.lineIconKeyValue_container} href={url}>
      {icon}
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
