import Button from "@/components/Button";
import BasePage from "@/components/layout/Basepage";

const HomePage = () => {
  return (
    <BasePage>
      <section className="flex flex-col items-center justify-center h-full gap-8 p-4 bg-repeat-x bg-waves">
        <h1 className="p-4 text-6xl text-zinc-100 bg-zinc-900">
          Meu nome é <span className="font-medium">Erick Koga</span>
        </h1>
        <h2 className="text-4xl">Sou um desenvolvedor full-stack</h2>
        <div className="flex gap-4">
          <Button intent="secondary" size="lg" ariaLabel="Abrir meu currículo">
            Meu currículo
          </Button>
          <Button intent="primary" size="lg" ariaLabel="Ver meus projetos">
            Meus projetos
          </Button>
        </div>
      </section>
    </BasePage>
  );
};

export default HomePage;
