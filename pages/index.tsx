import type { NextPage } from "next";
import Head from "next/head";
import profilephoto from "../assets/profilephoto.png";
import vscode from "../assets/vscode.png";
import Image from "next/image";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.css";
import {
  FaCode,
  FaEnvelopeSquare,
  FaWhatsappSquare,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiDocker,
  SiPostgresql,
} from "react-icons/si";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Erick Koga</title>
        <meta
          name="description"
          content="Página inicial do portifólio de Erick Koga"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className={styles.main}>
        <section className={styles.profile} id="home">
          <div className={styles.profileImage}>
            <Image src={profilephoto} alt="Foto de perfil" />
          </div>
          <h1 className={styles.title}>
            Meu nome é <br /> Erick Koga
          </h1>
          <FaCode className={styles.icon} />
          <h3 className={styles.description}>
            Sou um desenvolvedor focado em escrever códigos concisos e limpos,
            com o usuário em mente.
          </h3>
        </section>
        <section className={styles.about} id="about">
          <h2>Sobre mim</h2>
          <span className={styles.skillRow}>
            <SiJavascript /> JavaScript
          </span>
          <span className={styles.skillRow}>
            <SiTypescript /> TypeScript
          </span>
          <span className={styles.skillRow}>
            <SiReact /> React
          </span>
          <span className={styles.skillRow}>
            <SiNextdotjs /> Next.js
          </span>
          <span className={styles.skillRow}>
            <SiNestjs /> NestJS
          </span>
          <span className={styles.skillRow}>
            <SiDocker /> Docker
          </span>
          <span className={styles.skillRow}>
            <SiPostgresql /> PostgreSQL
          </span>
        </section>
        <section className={styles.contact} id="contact">
          <h2>Fale comigo</h2>
          <div className={styles.contactTable}>
            <p className={styles.contactHeader}>Dados de contato</p>
            <p className={styles.textToRight}>
              <FaPhoneSquareAlt /> Telefone
            </p>
            <p className={styles.textToLeft}>(31) 99686-8416</p>
            <p className={styles.textToRight}>
              <FaEnvelopeSquare /> E-mail
            </p>
            <p className={styles.textToLeft}>erick.koga@outlook.com</p>
            <p className={styles.contactButton}>
              <Link href="https://wa.me/+5531996868416">
                <span>
                  <FaWhatsappSquare /> Whatsapp
                </span>
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
