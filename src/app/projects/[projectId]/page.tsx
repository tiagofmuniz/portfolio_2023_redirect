'use client';
import styles from './project.module.scss';
import { repositories } from '../../api/(data)/repositories';
import Carousel from '../Carrosel/Carousel';
import { FaGithubSquare } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';
import{ useEffect } from 'react';

export default function page({ params }) {
  const { projectId } = params;
  const project = repositories?.find((item) => item?.name === projectId);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>
        {project?.github && (
          <Link href={project?.github} target='_blank'>
            <FaGithubSquare />
          </Link>
        )}
        <h1>{project?.name}</h1>
        {project?.html_url && (
          <Link href={project?.html_url} target='_blank'>
            <FaExternalLinkAlt />
          </Link>
        )}
      </div>
      <div className={styles.carousel}>
        <Carousel images={project?.images} name={project?.name} github={project?.github} html_url={project?.html_url} />
      </div>

      <div className={styles.content}>
        {project?.description && <p className={styles.description}>{project?.description}</p>}
        <h2 className={styles.languages}>
          Tecnologias: <span> {project?.languages_list.join(', ')}</span>
        </h2>
        <h2>Práticas e aprendizados</h2>
        <ul className={styles.learningContainer}>
          {project?.main_learning?.map((learning, index) => (
            <li key={index}>- {learning}</li>
          ))}
        </ul>
        <h2>Como usar:</h2>
        {project?.use_instructions && (
          <ul className={styles.instructionsContainer}>
            {project?.use_instructions.map((item, index) => (
              <li key={`${item}_${index}`} className={styles.instructionItem}>{`${index + 1}. ${item}`}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
function useEffect(arg0: () => void, arg1: undefined[]) {
  throw new Error('Function not implemented.');
}

