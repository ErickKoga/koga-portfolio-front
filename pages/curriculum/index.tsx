import { NextPage } from "next";
import Image from "next/image";
import profilephoto from "../../assets/profilephoto.png";
import {
  FaBlackTie,
  FaBook,
  FaBrain,
  FaEnvelope,
  FaHome,
  FaPhone,
} from "react-icons/fa";
import {
  SiDocker,
  SiGithub,
  SiGooglemessages,
  SiJavascript,
  SiLinkedin,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
} from "react-icons/si";
import styles from "../../styles/Curriculum.module.css";
const Curriculum: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <section className={styles.card}>
          <h2 className={styles.lineSeparator}>
            <FaBlackTie /> Experiência
          </h2>
          <h3>02/2022 – REDE MELHOR COMPRA ASSESSORIA ADMINISTRATIVA</h3>
          <h4>Desenvolvedor de sistemas</h4>
          <p>
            Liderar a equipe do departamento de TI, gerência de projetos,
            desenvolvimento e manutenção do front-end e back-end dos sistemas da
            empresa. Criação de sistemas hospedados em nuvem de consulta e
            integração com softwares de terceiros.
          </p>
          <h3>02/2021 a 02/2022 – POWER TEST COMISSIONAMENTO</h3>
          <h4>Auxiliar Administrativo</h4>
          <p>
            Criação e gerenciamento de PowerBI, aplicação de soluções baseadas
            em VBA com o Pacote Office, suporte técnico, auxiliar todos os
            departamentos em processos administrativos.
          </p>
          <h3>06/2013 a 06/2014 – NO BUGS EMPRESA JÚNIOR DE INFORMÁTICA</h3>
          <h4>Gerente de TI </h4>
          <p>
            Manter a infraestrutura de tecnologia da empresa, atendimento e
            análise de demandas de clientes, suporte técnico.
          </p>
        </section>
        <section className={styles.card}>
          <h2 className={styles.lineSeparator}>
            <FaBook /> Formação
          </h2>
          <p>
            <b>UNIVERSIDADE FEDERAL DE VIÇOSA (incompleto)</b>
          </p>
          <p>2013 a 2015 – Curso de ciência da computação.</p>
          <p>
            <b>PONTIFÍCIA UNIVERSIDADE CATÓLICA DE MINAS GERAIS (cursando)</b>
          </p>
          <p>2023 a 2026 – Curso de sistemas de informação.</p>
        </section>
        <section className={styles.card}>
          <h2 className={styles.lineSeparator}>
            <FaBrain /> Habilidades
          </h2>
          <ul>
            <li>
              <SiJavascript /> Javascript/Typescript;
            </li>
            <li>
              <SiNodedotjs /> Node.js;
            </li>
            <li>
              <SiNestjs /> NestJS;
            </li>
            <li>
              <SiReact /> React;
            </li>
            <li>
              <SiNextdotjs /> Next.js;
            </li>
            <li>
              <SiPostgresql /> PostgreSQL;
            </li>
            <li>
              <SiDocker /> Docker;
            </li>
            <li>
              <SiGooglemessages /> Inglês fluente (língua falada e escrita).
            </li>
          </ul>
        </section>
      </div>
      <div className={styles.personal}>
        <div>
          <h1>Erick Koga</h1>
          <div className={styles.profileImage}>
            <Image layout="intrinsic" src={profilephoto} alt="Foto de perfil" />
          </div>
          <h2>Desenvolvedor de sistemas</h2>
        </div>
        <div className={styles.contactInfo}>
          <p>
            github.com/erickkoga <SiGithub />
          </p>
          <p>
            linkedin.com/in/erick-koga <SiLinkedin />
          </p>
          <hr />
          <p>
            erick.koga@outlook.com <FaEnvelope />
          </p>
          <p>
            (31) 99686-8416 <FaPhone />
          </p>
          <p>
            Ipatinga - MG <FaHome />
          </p>
        </div>
      </div>
    </div>
  );
};
export default Curriculum;
