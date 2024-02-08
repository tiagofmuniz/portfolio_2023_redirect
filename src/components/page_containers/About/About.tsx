'use client';
import React from 'react';
import styles from './About.module.scss';
import LineIconKeyValue from 'components/ui/LineIconKeyValue/LineIconKeyValue';
import { experiences } from '../../../app/api/(data)/experiences';
import { profile_infos } from '../../../app/api/(data)/profile_infos';
import { channels } from '../../../app/api/(data)/channels';
import WaterMark from 'components/ui/WaterMark/WaterMark';
import ExperienceItem from './ExperienceItem/ExperienceItem';
import InteractiveIconTower from './InteractiveIconTower/InteractiveIconTower';
import { Tooltip } from 'react-tippy';
import Balancer from 'react-wrap-balancer';
import Image from 'next/image';
import SectionObserver from 'contexts_and_providers/SectionObserver';

export default function AboutPage() {
  return (
    <div className={styles.aboutPageContainer}>
      <SectionObserver sectionId='about'>
        <WaterMark label='Sobre' />
      </SectionObserver>

      <div className={styles.hero_container}>
        <Image src='/images/zyro_image.png' className={styles.profile_img} width={300} height={300} alt='' />

        <div className={styles.hero_text}>
          <p>
            <Balancer ratio={0.5} preferNative={false}>
              Formado em Sistemas de informação, possuo experiência em desenvolvimento web com ênfase com no ecossistema JavaScript,
              abrangendo tecnologias como React, Next e Node.
            </Balancer>
          </p>
          <p>
            Apaixonado por transformar ideias em realidade por meio da programação. Estou ansioso para mergulhar ainda mais nesse universo
            fascinante e contribuir para a construção de soluções inovadoras.
          </p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.experiencesContainer}>
          {experiences?.map((experience, index) => (
            <div key={index}>
              <ExperienceItem company={experience.company} position={experience.position} pathUrl={`#${experience.company}`} />
            </div>
          ))}
        </div>

        <div className={styles.personalInfoContainer}>
          <div className={styles.profileInfos}>
            {profile_infos?.map((item) => (
              <LineIconKeyValue key={item.label} label='' icon={item.icon} value={item.value} url='' />
            ))}
          </div>

          <div className={styles.socialItems}>
            {channels.map((item) => (
              <Tooltip key={item.label} title={item.label} size='big' arrow={true} position='top' className={styles.customTooltip}>
                <InteractiveIconTower icon={item.icon} url={item.value} />
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
