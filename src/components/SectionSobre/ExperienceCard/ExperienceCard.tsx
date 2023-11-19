import styles from "./experienceCard.module.scss";
interface Experience {
  empresa: string;
  periodo: string;
  cargo: string;
  atividades: string;
}

export default function ExperienceCard({
  empresa,
  periodo,
  cargo,
  atividades,
}: Experience) {
  return (
    <div className={styles.experience_container}>
      <p className={styles.title}>{empresa}</p>
      <p>Período: {periodo}</p>
      <p>Cargo: {cargo}</p>
      <p className={styles.activities}>{atividades}</p>
    </div>
  );
}
