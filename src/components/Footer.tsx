// Library imports
import Button from "@/components/Button";
import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io5";

// Component definition and render
const Navbar = () => (
  <footer className="flex items-center justify-between h-20 gap-8 px-8 font-medium sm:justify-end text-zinc-100 bg-zinc-900">
    <section className="flex gap-2 text-2xl">
      <Button
        href="https://github.com/ErickKoga"
        aria-label="Perfil do GitHub de Erick Koga"
        size="sm"
      >
        <IoLogoGithub />
      </Button>
      <Button
        href="https://linkedin.com/in/erick-koga"
        aria-label="Perfil do LinkedIn de Erick Koga"
        size="sm"
      >
        <IoLogoLinkedin />
      </Button>
      <Button
        href="https://wa.me/+5531996868416"
        aria-label="Entre em contato com Erick Koga no WhatsApp"
        size="sm"
      >
        <IoLogoWhatsapp />
      </Button>
    </section>
    <small>Ⓒ 2023 Erick Koga</small>
  </footer>
);

export default Navbar;
