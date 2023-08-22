import Button from "@/components/Button";
import BasePage from "@/components/layout/Basepage";
import Image from "next/image";
import { SiGithub } from "react-icons/si";

const portfolioList = [
  {
    name: "App RMC",
    description:
      "Interface única integrando todos os sistemas voltados ao cliente, incluindo downloads de materiais publicitários, acesso a sistemas e acompanhamento de novidades.",
    image: {
      src: "/portfolio/app-rmc.webp",
      alt: "Tela do App RMC",
    },
  },
  {
    name: "EasyNR10",
    description:
      "Gestor de documentação NR-10 para empresa, equipamentos e equipes. Possui gráficos interativos, customização, suporte a documentos e alertas para vencimentos.",
    image: {
      src: "/portfolio/easynr10.webp",
      alt: "Tela de login do EasyNR10",
    },
  },
  {
    name: "SAR",
    description:
      "Sistema de planejamento de projetos com gráfico Gantt autoral e tabelas interativas. Permite integração com o sistema da empresa e detecção de conflitos de atribuições.",
    image: {
      src: "/portfolio/sar.webp",
      alt: "Tela do sistema SAR",
    },
  },
];

const PortfolioPage = () => {
  return (
    <BasePage>
      <section className="flex flex-col items-center justify-center h-full gap-8 p-4">
        <h1 className="header">Meu trabalho</h1>
        <div className="grid items-center justify-center grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {portfolioList.map((portfolioItem) => (
            <div
              key={portfolioItem.name}
              className="flex flex-col items-center justify-center gap-4 p-2 rounded-sm shadow-base"
            >
              <div className="relative w-full aspect-[2/1]">
                <Image
                  key={portfolioItem.image.src}
                  src={portfolioItem.image.src}
                  fill
                  quality={100}
                  alt={portfolioItem.image.alt}
                  className="relative object-contain shadow-base"
                />
              </div>
              <h2 className="header">{portfolioItem.name}</h2>
              {portfolioItem.description}
            </div>
          ))}
        </div>
        <Button href="https://github.com/ErickKoga">
          <SiGithub />
          Confira outras contribuições no meu GitHub
        </Button>
      </section>
    </BasePage>
  );
};

export default PortfolioPage;
