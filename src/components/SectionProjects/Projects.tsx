import ProjectCard from "./CardProject/ProjectCard";
import style from "./projects.module.scss";

import Projetos from "../../data/projetos.json";
export default function Projects() {
  console.log(Projetos);
  return (
    <div className={style.projects_container} id="projects">
      <h1>PROJETOS</h1>
      <div className={style.content}>
        {Projetos.map((projeto) => (
          <ProjectCard
            key={projeto.name}
            name={projeto.name}
            urlimg={projeto.hrefCover}
            github={projeto.github}
            url={projeto.url}
            description={projeto.description}
            src=""
            tecnologias={projeto.tecnologias}
          />
        ))}
      </div>
    </div>
  );
}
