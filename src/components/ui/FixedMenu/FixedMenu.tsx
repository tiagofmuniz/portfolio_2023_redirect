import styles from './FixedMenu.module.scss';
import { IoHome } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { GrTechnology } from 'react-icons/gr';
import { GrProjects } from 'react-icons/gr';
import { IoMdChatboxes } from 'react-icons/io';
import { useSectionContext } from 'contexts_and_providers/useSectionContext';
import Link from 'next/link';
import { Tooltip } from 'react-tippy';
// import { Tooltip } from 'react-tippy';

export default function FixedMenu(actived) {
  const { activeSection, setSection } = useSectionContext();

  return (
    <div className={styles.fixedMenu}>
      <Tooltip title='Início' size='big' arrow={true} position='left' className={styles.customTooltip}>
        <Link href='#home' className={`${activeSection == 'home' ? styles.actived : ''}`}>
          <IoHome />
        </Link>
      </Tooltip>

      <Tooltip title='Sobre' size='big' arrow={true} position='left' className={styles.customTooltip}>
        <Link href='#about' className={`${activeSection == 'about' ? styles.actived : ''}`}>
          <FaUser />
        </Link>
      </Tooltip>

      <Tooltip title='Tecnologias' size='big' arrow={true} position='left' className={styles.customTooltip}>
        <Link href='#skills' className={`${activeSection == 'skills' ? styles.actived : ''}`}>
          <GrTechnology />
        </Link>
      </Tooltip>

      <Tooltip title='Projetos' size='big' arrow={true} position='left' className={styles.customTooltip}>
        <Link href='#projects' className={`${activeSection == 'projects' ? styles.actived : ''}`}>
          <GrProjects />
        </Link>
      </Tooltip>
      <Tooltip title='Contato' size='big' arrow={true} position='left' className={styles.customTooltip}>
        <Link href='#contact' className={`${activeSection == 'contact' ? styles.actived : ''}`}>
          <IoMdChatboxes />
        </Link>
      </Tooltip>
    </div>
  );
}
