import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col sm:flex-row grow">
        <Navbar />
        <main className="grow">
          <section className="flex flex-col items-center justify-center h-full gap-8 p-4 bg-repeat-x bg-waves">
            <h1 className="p-4 text-6xl text-zinc-100 bg-zinc-700">
              Meu nome é <span className="font-medium">Erick Koga</span>
            </h1>
            <h2 className="text-4xl">Sou um desenvolvedor full-stack</h2>
            <div className="flex gap-4">
              <Button
                intent="secondary"
                size="lg"
                ariaLabel="Abrir meu currículo"
              >
                Meu currículo
              </Button>
              <Button intent="primary" size="lg" ariaLabel="Ver meus projetos">
                Meus projetos
              </Button>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
