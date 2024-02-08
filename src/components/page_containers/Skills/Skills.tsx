import React from 'react';
import styles from './Skills.module.scss';
import WaterMark from '../../UI/WaterMark/WaterMark';
import Cube3d from './Cube3d/Cube3d';
import { skills } from 'app/api/(data)/skills';
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';
import SectionObserver from 'contexts_and_providers/SectionObserver';

interface ISkillProps {
  label: string;
  level?: string;
  tooltip?: string;
  icon: React.ReactNode;
}

export default function Skills() {

  return (
    <div className={styles.skills_container}>
      <SectionObserver sectionId='skills'>
        <WaterMark label='Tecnologias' />
      </SectionObserver>

      <div className={styles.skillItem}>
        {skills?.map((item) => {
          return (
            <Tooltip title={item.tooltip} size='big' arrow={true} position='bottom' className={styles.customTooltip}>
              <div className={styles.cubeContainer}>
                <Cube3d
                  label={item.label}
                  topIcon={item.icon}
                  iconInternal={item.iconInternal}
                  size='200px'
                  skew={item.iconInternal.skew}
                />
              </div>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}
