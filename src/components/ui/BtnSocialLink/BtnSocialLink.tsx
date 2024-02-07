import styles from "./BtnSocialLink.module.scss";
import Link from "next/link";

export default function BtnSocialLink({ icon, url, label }) {
  // console.log(icon);
  return (
    <div>
      <Link href={url} className={styles.socialContainer} target="_blank">
        <div className={styles.socialItem}>
          {icon}
          <span>{label}</span>
        </div>
      </Link>
    </div>
  );
}
