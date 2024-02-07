import ButtonDownload from "../SectionKnowledge/BtnDownload/ButtonDownload";
import styles from "./home.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <section className={styles.home_container} id="home">
      <div className={styles.left_col}>
        <div className={styles.title_container}>
          <span> Olá, meu nome é </span>
          <h1>
            <span>Tiago </span>Muniz
          </h1>
          <h2>Full stack Jr</h2>
        </div>
        <p>
          Olá, meu nome é Tiago e sou um desenvolvedor front-end jr, apaixonado
          pela programação. Com aproximadamente 2 anos de experiência, meu
          objetivo é tornar-me fullstack, explorando as amplas possibilidades tecnológicas digitais,
          guiado pela busca incessante pela inovação e conhecimento.
        </p>
        <ButtonDownload
          fileName="TiagoFMuniz_2023.08.07_Geral"
          label="DOWNLOAD CV"
        />
      </div>
      <Image
        className={styles.rigth_col}
        src="/img/profile.png"
        width={300}
        height={327}
        alt=""
      />
    </section>
  );
}
