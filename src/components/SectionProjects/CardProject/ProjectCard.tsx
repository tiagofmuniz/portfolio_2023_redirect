import "../../../styles/custom.module.scss";
import style from "./projectCard.module.scss";
import Image from "next/image";
import Link from 'next/link'

interface CardProject {
  name: string;
  src: string;
  urlimg: string;
  github: string;
  url: string;
  description: string;
  tecnologias: String[];
}
export default function ProjectCard({
  name,
  urlimg,
  github,
  url,
  description,
  tecnologias,
}: CardProject) {
  return (
    <div className={style.project_card_container}>
      {github ? (
        <div className={style.github}>
          <a href={github}>
            <Image
              className={style.imggit}
              src="/img/github-sign.png"
              width={20}
              height={20}
              alt="logo github"
            ></Image>
          </a>
        </div>
      ) : (
        ""
      )}
      <Image
        className={style.img}
        src={`/img/${urlimg}`}
        width={120}
        height={120}
        alt=""
      />

      <div className={style.content}>
        <h1>{name}</h1>
        <p>{description}</p>
        <div className={style.address}>
          <p>
            {url ? (
              <div>
                <span> Visitar: </span>
                <a href={url}>{url}</a>
              </div>
            ) : (
              ""
            )}
          </p>
        </div>
        <p className={style.tecnologias}>
          {tecnologias ? (
            <div>
              <span className={style.title}> Tecnologias: </span>
              <span>{tecnologias.join().replaceAll(",", ", ")}</span>{" "}
            </div>
          ) : (
            ""
          )}
        </p>
        <Link href={`/projects/${name}`}>
          {" "}
          <a>Detalhes do projeto no Github</a>
        </Link>
      </div>
    </div>
  );
}
