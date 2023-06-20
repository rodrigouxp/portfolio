"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

import PrimaryButton from "../Buttons/buttons";

const links = [
  {
    id: "sobre",
    title: "Sobre",
    url: "/sobre",
  },
  {
    id: "projetos",
    title: "Projetos",
    url: "/projetos",
  },
  {
    id: "artigos",
    title: "Artigos",
    url: "/artigos",
  },
];

export default function Nav() {
  return (
    <header className={styles.header}>
      <div id={styles.container}>
        <a href="/">
          <Image
            className={styles.logo}
            src="/images/logo.png"
            width={57}
            height={66}
            alt="Logo image"
          />
        </a>

        <nav>
          {links.map((link) => (
            <Link
              className={`title5heavy ${styles.link}`}
              key={link.id}
              href={link.url}
            >
              {link.title}
            </Link>
          ))}
          
          <PrimaryButton label="Contato" />
        
        </nav>
      </div>
    </header>
  );
}
