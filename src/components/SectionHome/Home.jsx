import ButtonDownload from "../SectionKnowledge/BtnDownload/ButtonDownload";
import styles from "./home.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <section className={styles.home_container} id="home">
      <div className={styles.left_col}>
        <h1>
          Olá, aqui é o, <span>Tiago</span>
        </h1>
        <h2>Full stack Jr</h2>
        <p>
          Entusiasta da programação, impulsionado pela curiosidade em explorar
          as amplas possibilidades tecnológicas digitais, guiado pela busca
          incessante pela inovação e conhecimento.
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
