"use client";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import Image from "next/image";
import SocialMediaBox from "../SocialMediaBox/SocialMediaBox";
import style from "./about.module.scss";
import Data from "../../data/cursos.json";
import Course from "./CourseList/CourseList";
import GenericButtonLink from "../BtnLink/GenericButtonLink";

// console.log(Data)
export default function About() {
  return (
    <div className={style.aboutContainer} id="about">
      <div className={style.column1}>
        <Image
          className={style.img}
          src="/img/id-card.png"
          width={100}
          height={100}
          alt=""
        />
        <div>
          <h1>RESUMO</h1>
          <p className={style.resume}>
            Estudante no último período do curso de Sistemas de Informação,
            possuo mais de um ano de experiência como desenvolvedor, com ênfase
            no ecossistema JavaScript. Durante esse período, dediquei-me ao
            desenvolvimento de aplicações web front-end, destacando-me na
            integração de sistemas com a plataforma Zendesk, incluindo a
            interação com APIs Rest e SOUP. Minha expertise concentra-se em
            proporcionar soluções eficientes e inovadoras para otimizar a
            experiência do usuário, demonstrando habilidades sólidas no ambiente
            de CRM.          </p>
        </div>
        <div className={style.personalInfo}>
          <h1>DADOS PESSOAIS</h1>
          <ul>
            <li>
              <span>Nome:</span> Tiago Ferreira Muniz
            </li>
            <li>
              <span>Idade:</span> 33 anos
            </li>
            <li>
              <span>Endereço:</span> Belo Horizonte/MG
            </li>
            <li>
              <span>Email:</span> tiagofmuniz@hotmail.com
            </li>
            <li>
              <span>Contato:</span> (31) 98795-8359
            </li>
          </ul>
        </div>
        <div className={style.education}>
          <h1>FORMAÇÃO ACADÊMICA</h1>
          <ul>
            <li>
              <h2>BACHAREL EM SISTEMAS DE INFORMAÇÃO</h2>
              <p>
                Faculdade Promove (previsão: <span>12/2023</span>)
              </p>
            </li>
            <li>
              <h2>BACHAREL EM ENGENHARIA CIVIL:</h2>
              <p>Escola de Engenharia Kennedy (4 períodos)</p>
            </li>
          </ul>
        </div>
        <div className={style.channelsContainer}>
          <SocialMediaBox
            imageSrc="/img/linkedin.png"
            text="linkedin.com/in/tiagofmuniz"
            url="https://www.linkedin.com/in/tiagofmuniz/"
            customClass=""
          />
          <SocialMediaBox
            imageSrc="/img/github-sign.png"
            text="github.com/tiagofmuniz"
            url="https://github.com/tiagofmuniz"
            customClass=""

          />
        </div>
      </div>

      <div className={style.column2}>
        <h1>EXPERIÊNCIA PROFISSIONAL</h1>
        <ExperienceCard
          empresa="TECNA SISTEMAS"
          cargo="Desenvolvedor Web Jr"
          periodo="Março/2022 - Julho/2023 (MEI)"
          atividades="Criação de aplicativos integrados a APIs diversas, levantamento de requisitos, criação de mockups, bots de atendimento e aplicações Zendesk, manutenção de site wordpress, controle de versionamento de softwares privados."
        />
        <ExperienceCard
          empresa="CP ANDRADE ELETRÔNICOS - ME"
          cargo="Auxiliar técnico em eletrônica"
          periodo="Março/2016 - Novembro/ 2017"
          atividades="Atendimento ao público, controle de estoque, manutenção em hardware de telemóveis e outros eletrônicos, recuperação de software mobile via box CLI e adb."
        />
        <div className={style.courses}>
          <h1>CURSOS E CERTIFICADOS</h1>
          <ul className={style.education_list}>
            {Data.map((course) => (
              <Course
                course_name={course.course_name}
                course_details={course.course_details}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className={style.col_3}> </div>
    </div>
  );
}
