import React from 'react';
import styles from './Skills.module.scss';
import WaterMark from 'components/ui/WaterMark/WaterMark';
import Cube3d from './Cube3d/Cube3d';
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';
import SectionObserver from 'contexts_and_providers/SectionObserver';
import { skills } from 'app/api/(data)/skills';

interface ISkillProps {
  label: string;
  level?: string;
  tooltip?: string;
  icon: React.ReactNode;
}

export default function Skills() {
const SkillList = skills;
  return (
    <div className={styles.skills_container}>
      <SectionObserver sectionId='skills'>
        <WaterMark label='Tecnologias' />
      </SectionObserver>

      <div className={styles.skillItem}>
        {SkillList?.map((item) => 
       (
            <Tooltip key={item.label} title={item.tooltip} size='big' arrow={true} position='bottom' className={styles.customTooltip}>
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
          )
        )}
      </div>
    </div>
  );
}
