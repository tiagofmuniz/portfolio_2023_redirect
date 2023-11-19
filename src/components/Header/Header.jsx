import style from "./header.module.scss";
import Image from "next/image";
export default function Header() {
  return (
    <nav className={style.header_container}>
      <div className={style.logo_container}>
        <Image
          className={style.img}
          src={"/img/logo_default.png"}
          width={150}
          height={150}
          alt=""
        />
        <h1>
          TIAGO
          <br />
          <p>MUNIZ</p>
        </h1>
      </div>
      <ul>
        <li>
          <a href="#home">Início</a>
        </li>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#projects">Projetos</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </nav>
  );
}
