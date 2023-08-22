"use client";
import profileImage from "@/assets/profile.png";
import ProgressBar from "@/components/Progress";
import BasePage from "@/components/layout/Basepage";
import Image from "next/image";
import {
  SiAmazonaws,
  SiApollographql,
  SiDigitalocean,
  SiDocker,
  SiExpress,
  SiFastify,
  SiGithub,
  SiJavascript,
  SiJira,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPortainer,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

const techList = [
  { label: "JavaScript", icon: SiJavascript, progress: 75 },
  { label: "TypeScript", icon: SiTypescript, progress: 75 },
  { label: "Node.JS", icon: SiNodedotjs, progress: 60 },
  { label: "NestJS", icon: SiNestjs, progress: 60 },
  { label: "React", icon: SiReact, progress: 70 },
  { label: "Next.js", icon: SiNextdotjs, progress: 70 },
  { label: "Docker", icon: SiDocker, progress: 50 },
  { label: "MySQL", icon: SiMysql, progress: 70 },
  { label: "PostgreSQL", icon: SiPostgresql, progress: 70 },
];

const toolsList = [
  { label: "DigitalOcean", icon: SiDigitalocean },
  { label: "Amazon AWS", icon: SiAmazonaws },
  { label: "GitHub", icon: SiGithub },
  { label: "Apollo GraphQL", icon: SiApollographql },
  { label: "Vercel", icon: SiVercel },
  { label: "Portainer", icon: SiPortainer },
  { label: "Jira", icon: SiJira },
  { label: "Express", icon: SiExpress },
  { label: "Fastify", icon: SiFastify },
];

const AboutPage = () => {
  return (
    <BasePage>
      <section className="flex flex-col h-full gap-8 p-4 justify-evenly">
        <Image
          src={profileImage}
          alt="Foto de perfil do autor"
          width={160}
          height={160}
          className="w-1/2 mx-auto rounded-full sm:w-40 grayscale contrast-125 shadow-base"
        />
        <div>
          <h2 className="header">Tech</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {techList.map((tech) => (
              <div
                key={tech.label}
                className="flex w-full text-lg rounded-md shadow-base"
              >
                <div className="flex items-center p-2 text-4xl rounded-l-md bg-zinc-900 text-zinc-100">
                  {tech.icon()}
                </div>
                <span className="p-2 grow">
                  {tech.label}
                  <ProgressBar value={tech.progress} />
                </span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="header">Principais ferramentas</h2>
          <div className="inline-flex flex-wrap gap-2">
            {toolsList.map((tool) => (
              <div
                key={tool.label}
                className="inline-flex gap-2 p-1 rounded-sm shadow-base whitespace-nowrap"
              >
                <div className="p-1 rounded-md w-fit bg-zinc-900 text-zinc-100">
                  {tool.icon()}
                </div>
                {tool.label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </BasePage>
  );
};

export default AboutPage;
