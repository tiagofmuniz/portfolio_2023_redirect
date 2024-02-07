'use client';
import Link from 'next/link';
import styles from './Menu.module.scss';
import { usePathname, useRouter } from 'next/navigation';
import { useSectionContext } from 'contexts_and_providers/useSectionContext';
import { IoMdMenu } from "react-icons/io";



export default function Menu() {
  const { activeSection, setSection } = useSectionContext();

  const router = useRouter();
  const pathName = usePathname();
  
  function handleActive(id: string) {
    console.log(id)
    // setSection(label);
    setSection(activeSection);
    if (pathName !== '/') {
      router.push(`/#${id}`);}
  }
  const menuList = [
    { id: 'home', label: 'Início', url: '/' },
    { id: 'about', label: 'Sobre', url: '/' },
    { id: 'projects', label: 'Projetos', url: '/' },
    { id: 'contact', label: 'Contato', url: '/' },
  ];
  // console.log(activeSection)

  return (
    <nav className={styles.menu_container}>
      {/* <div className={styles.miniNav}>{<IoMdMenu/>}</div> */}
      <ul>
        {menuList.map((item) => (
          <li key={item.id} onClick={() => handleActive(item.id)} className={`${activeSection === item.id ? styles.border_animate : ''}`}>
            <Link href={`#${item.id}`} className='link'>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      
    </nav>
  );
}

