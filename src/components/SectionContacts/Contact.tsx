"use client";
import style from "./contact.module.scss";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";



export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e: FormEvent) {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_3qzxqyb",
        "template_xr0bvgt",
        templateParams,
        "f6TA95KdUOl7Bf6M2"
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("ERRO: ", error);
        }
      );
  }
  return (
    <div className={style.contact_Container} id="contact">
      <div className={style.form_container}>
        <p>Envie sua mensagem</p>
        <form className={style.form} onSubmit={sendEmail}>
          <input
            className={style.input}
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            className={style.input}
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea
            className={style.textarea}
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input className={style.button} type="submit" value="Enviar" />
        </form>
      </div>
      <div className={style.my_contacts}>
        <h1 className={style.title}>Contato</h1>
        <p> tiagofmuniz2023@gmail.com</p>
        <div className={style.socialNetworks}>
          <a href="">
            <Image src="/img/linkedin2.png" width={20} height={20} alt="" />
          </a>
          <a href="">
            <Image src="/img/instagram3.png" width={20} height={20} alt="" />
          </a>
          <a href="">
            <Image src="/img/discord.png" width={20} height={20} alt="" />
          </a>
          <a href="">
            <Image src="/img/twitter.png" width={20} height={20} alt="" />
          </a>
        </div>
        <div className={style.citation}>
          <p>
            Existem duas maneiras de construir um projeto de software. Uma é
            fazê-lo tão simples que obviamente não há falhas. A outra é fazê-lo
            tão complicado que não existem falhas óbvias.
          </p>
          <span>- C.A.R. HOAR</span>
        </div>
      </div>
    </div>
  );
}
