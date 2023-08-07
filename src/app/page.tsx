import Button from "@/components/Button";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="flex">
      <Navbar />
      <main className="grow bg-gradient-to-r from-slate-50 to-white">
        <section className="flex flex-col items-center justify-center h-screen gap-4">
          <h1 className="text-6xl">
            Meu nome é{" "}
            <span
              style={{
                textShadow: "1px 1px 4px #000",
              }}
            >
              Erick Koga
            </span>
          </h1>
          <h2 className="text-4xl">Sou um desenvolvedor full-stack</h2>
          <div className="flex gap-4">
            <Button intent="secondary" size="lg">
              Meu currículo
            </Button>
            <Button intent="primary" size="lg">
              Meus projetos
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
