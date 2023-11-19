"use client";
import React, { useState, useEffect, useRef } from "react";
import Tecnologias from "../../data/tecnologias.json";
import SkillItem from "./TechCard/TechCard";
import style from "./knowledge.module.scss";
import GenericButtonLink from "../BtnLink/GenericButtonLink";

export default function Skills() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [heightState, setHeightState] = useState<number | null>(null);
  const useRefContainer = useRef();

  useEffect(() => {
    if (useRefContainer.current) {
      const height = useRefContainer.current.offsetHeight;
      setHeightState(height);
    }
  }, [selectedTech]);

  useEffect(() => {
    const handleResize = () => {
      if (useRefContainer.current) {
        const height = useRefContainer.current.offsetHeight;
        setHeightState(height);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [useRefContainer.current]);

  function toggleModal(tech: string) {
    if (tech === selectedTech) {
      setSelectedTech(null);
    } else {
      setSelectedTech(tech);
    }
  }

  const filteredData = Tecnologias[selectedTech];

  return (
    <section className={style.skills_container}>
      <h1>TECNOLOGIAS</h1>
      <div className={style.content}>
        <div className={style.skills_items} ref={useRefContainer}>
          {Object.keys(Tecnologias).map((tech) => (
            <SkillItem
              key={tech}
              src={`/img/skills/${tech}.png`}
              name={tech}
              toggleModalFunction={() => toggleModal(tech)}
              isSelected={tech === selectedTech}
            />
          ))}
        </div>
        <div
          className={
            selectedTech == null
              ? `${style.resume} ${style.visible}`
              : `${style.hiden}`
          }
        >
          <h2> Noções gerais</h2>
          <p>
            Programação JavaScript: Sintaxe e estrutura; Manipulação de DOM;
            Escopo e Closures; Eventos; Tratativa de erros; Modularização;
            Import/Export; Prototype; Arrow functions; Callbacks e Promises;
            Async/Await; Spread operator; Nullish operator; Desestruturação
            (Destructuring); Funções construtoras; ES6; Expressões regulares;
            NPM; Yarn, node, CRUD - Bibliotecas e Frameworks: Bulma, Bootstrap,
            jQuery; Fetch API; Express; Axios; Puppeteer (Web scraping); ReactJs
            - Softwares e plataformas: Figma; Canva; Adobe Illustrator;
            IDE’s(VSCode, Eclipse), Postman, Insomnia, Notion, GitHub, Wordpress
            - Web e Desenvolvimento Web: HTML Semântico; Estratégias de SEO;
            Requisições HTTP; JSON; SOAP API; REST API; Webhooks - Bancos de
            Dados: PostgreSQL, MySql - Outros: Padrão MVC; Clean code; CLI (git
            bash, cmd); Zendesk SDK - Programação Java: POO;Tipos de dados;
            Sintaxe e estrutura; Classes, Construtores, Anotações; Sobrecarga,
            Interfaces, Beans; MVC,DTO; Springboot; CRUD
          </p>
        </div>
        <div className={`${style.hiden} ${selectedTech ? style.visible : ""}`}>
          <div className={style.knowledge} style={{ height: heightState - 20 }}>
            <h2>Conceitos: {selectedTech?.toUpperCase()}</h2>
            <div className={style.knowledge_list}>
              {filteredData
                ? filteredData
                    .sort()
                    .map((topicTech) => <p key={topicTech}>{topicTech}</p>)
                : ""}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
