import {
  IoAlbumsOutline,
  IoHomeOutline,
  IoMailOutline,
  IoPersonOutline,
} from "react-icons/io5";

interface Link {
  label: string;
  url: string;
  icon?: React.ReactNode;
}

export const links: Link[] = [
  {
    label: "Início",
    url: "/",
    icon: <IoHomeOutline />,
  },
  {
    label: "Sobre mim",
    url: "/",
    icon: <IoPersonOutline />,
  },
  {
    label: "Portfólio",
    url: "/",
    icon: <IoAlbumsOutline />,
  },
  {
    label: "Contato",
    url: "/",
    icon: <IoMailOutline />,
  },
];
