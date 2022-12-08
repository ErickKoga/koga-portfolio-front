import type { NextPage } from "next";
import Head from "next/head";
import profilephoto from "../assets/profilephoto.png";
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
  SiGithub,
  SiLinkedin,
} from "react-icons/si";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Erick Koga - Desenvolvedor</title>
        <meta
          name="Erick Koga - Desenvolvedor"
          content="Página inicial do portifólio de Erick Koga"
        />
        <link rel="icon" href="/favicon.svg" />
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
          <div>
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
          </div>
          <div className={styles.githubSection}>
            <a
              href="https://github.com/ErickKoga"
              target="_blank"
              rel="noreferrer"
            >
              <div className={styles.gitButton}>
                <p>Confira meu GitHub!</p>
                <SiGithub />
              </div>
            </a>
          </div>
        </section>
        <section className={styles.contact} id="contact">
          <h2>Fale comigo</h2>
          <div className={styles.contactTable}>
            <h3 className={styles.contactHeader}>Dados de contato</h3>
            <p>
              <FaPhoneSquareAlt /> Telefone
            </p>
            <p>(31) 99686-8416</p>
            <p>
              <FaEnvelopeSquare /> E-mail
            </p>
            <p>erick.koga@outlook.com</p>
          </div>
          <div className={styles.buttonBox}>
            <a
              href="https://github.com/ErickKoga"
              target="_blank"
              rel="noreferrer"
            >
              <p className={styles.contactButton}>
                <SiGithub /> GitHub
              </p>
            </a>
            <a
              href="https://linkedin.com/in/erick-koga"
              target="_blank"
              rel="noreferrer"
            >
              <p className={styles.contactButton}>
                <SiLinkedin /> LinkedIn
              </p>
            </a>
            <a
              href="https://wa.me/+5531996868416"
              target="_blank"
              rel="noreferrer"
            >
              <p className={styles.contactButton}>
                <FaWhatsappSquare /> Whatsapp
              </p>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
