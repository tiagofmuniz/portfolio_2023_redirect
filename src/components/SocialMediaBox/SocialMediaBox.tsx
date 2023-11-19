// SocialMediaBox.js

import Image from "next/image";
import style from "./socialMediaBox.module.scss";
interface SocialMediaInfo {
  imageSrc: string;
  text: string;
  url: string;
  customClass: string;
}
export default function SocialMediaBox({
  imageSrc,
  text,
  url,
  customClass,
}: SocialMediaInfo) {
  const dynamicClass = customClass ? style[customClass] : style.socialMediaBox;

  return (
    <div className={dynamicClass}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Image
          className={style.icon}
          src={imageSrc}
          width={30}
          height={30}
          alt=""
        />
        <p className={style.text}>{text}</p>
      </a>
    </div>
  );
}
