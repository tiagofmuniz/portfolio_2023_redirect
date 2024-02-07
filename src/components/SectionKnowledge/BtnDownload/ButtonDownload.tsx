// ButtonDownload.tsx
"use client";
import style from "./buttonDownload.module.scss";
interface ButtonDownloadProps {
  label: string;
}
export default function ButtonDownload({ label }: ButtonDownloadProps) {
  const fileName = "TiagoFMuniz_2023.08.07_Geral.pdf";
  return (
    <a className={style.button} href={`/TiagoFMuniz_2023.08.07_Geral.pdf`} download={fileName}>
      {label}
    </a>
  );
}
