import style from "./genericButtonLink.module.scss";
interface ButtonInfoProps {
  link: string;
  text: string;
}
export default function GenericButtonLink({ link, text }: ButtonInfoProps) {
  return (
    <a href={link} className={style.button}>
      {text}
    </a>
  );
}
