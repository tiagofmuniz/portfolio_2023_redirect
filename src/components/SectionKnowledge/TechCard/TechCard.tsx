import React from 'react';
import style from './tech_card.module.scss';
import Image from 'next/image';

interface TechItemProps {
  src: string;
  name: string;
  toggleModalFunction: () => void;
  isSelected: boolean;
}

export default function TechItem({
  src,
  name,
  toggleModalFunction,
  isSelected,
}: TechItemProps) {
  const containerClassName = isSelected ? `${style.skill_container} ${style.selected}` : style.skill_container;

  return (
    <div className={containerClassName}>
      <button onClick={toggleModalFunction}>
        <div className={style.logo}>
          <Image className={style.imgItem}src={src} width={40} height={40} alt="" />
        </div>
      </button>
      <p>{name}</p>
    </div>
  );
}