import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { FaLinkedin, FaWhatsappSquare } from 'react-icons/fa';
import Balancer from 'react-wrap-balancer';
import { PiPlanetThin } from 'react-icons/pi';
import WaterMark from 'components/ui/WaterMark/WaterMark';
import axios from 'axios';
import InteractiveIconTower from '../About/InteractiveIconTower/InteractiveIconTower';
import { Tooltip } from 'react-tippy';
import SectionObserver from 'contexts_and_providers/SectionObserver';
import Image from 'next/image';
import styles from './Contacts.module.scss';

const contactFormSchema = z.object({
  name: z.string().min(1, 'Por favor, preencha seu nome.'),
  email: z.string().email('Formato de e-mail inválido'),
  subject: z.string(),
  message: z.string().min(1, 'Diga-me, como posso ajudá-la(o)'),
});
type contactFormData = z.infer<typeof contactFormSchema>;

export default function Contacts() {
  const [afterPosition, setAfterPosition] = useState('-100%');
  const [colorTextBtn, setcolorTextBtn] = useState('');

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<contactFormData>({
    mode: 'all',
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<contactFormData> = async (data) => {
    console.log(data);
    const { name, email, subject, message } = data;
    const params = { name, email, subject, message };
    const response = await axios.post('/api', params);
    return response;
  };

  useEffect(() => {
    (() =>
      watch((data) => {
        function countPropertiesWithValues(obj) {
          return Object.values(obj).filter((value) => value !== null && value !== undefined && value !== '').length;
        }

        var numberOfPropertiesWithValues = countPropertiesWithValues(data);
        const position = -100 + +numberOfPropertiesWithValues * 25;
        const positionString = `${position}%`;
        setAfterPosition(positionString);

        setcolorTextBtn(numberOfPropertiesWithValues > 2 ? '#000' : '#FFF');
      }))();
  }, [watch]);
  return (
    <div className={styles.mainContainer}>
      <SectionObserver sectionId='contact'>
        <WaterMark label='Contato' />
      </SectionObserver>

      <div className={styles.contactsContainer} >
        <div className={styles.content}>
          <div className={`${styles.col} ${styles.leftCol}`}>
            <form className={styles.formContact} onSubmit={handleSubmit(onSubmit)}>
              <p>NOME</p>
              {errors.name && <span className={styles.error}>{errors.name.message}</span>}
              <input {...register('name')} type='text'></input>

              <p>E-MAIL</p>
              {errors.email && <span>{errors.email.message}</span>}
              <input {...register('email')} type='email'></input>

              <p>ASSUNTO</p>
              {errors.subject && <span>{errors.subject.message}</span>}
              <input {...register('subject')} type='text'></input>

              {errors.message && <span>{errors.message.message}</span>}
              <textarea {...register('message')} placeholder='Mensagem'></textarea>

              <div className={styles.buttonContainer}>
                <button type='submit'>
                  ENVIAR
                </button>
              </div>
            </form>
            <div className={styles.footerImage}>
              <Image width={100} height={100} src='/images/temp/image5.png' alt=''></Image>
            </div>
          </div>
          <div className={`${styles.col} ${styles.rightCol}`}>
            <div className={styles.planetIcon}>
              <PiPlanetThin size='200px' />
            </div>
            <p>(31) 98795-8359</p>
            <div className={styles.infos}>
                <InteractiveIconTower icon={<FaWhatsappSquare />} url='https://wa.me/5531987958359/?text=Olá!%20Gostaria%20de%20conversar%20sobre%20oportunidades%20de%20colaboração.%20Podemos%20discutir%20mais%20sobre%20nossos%20interesses%20em%20comum%3F' />

                <InteractiveIconTower icon={<FaLinkedin />} url='https://www.instagram.com/tiagoferreiramuniz/' />

                <InteractiveIconTower icon={<FaWhatsappSquare />} url='https://github.com/tiagofmuniz' />
            </div>
            <div className={styles.quoteContainer}>
              <blockquote>
                <Balancer ratio={1}>
                  Você não precisa ter uma discussão filosófica cada vez que coloca os dedos em um teclado, mas como a computação está se
                  espalhando cada vez mais longe na vida das pessoas, é preciso pensar sobre isso.
                  <br />— Karen Sparck Jones
                </Balancer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
