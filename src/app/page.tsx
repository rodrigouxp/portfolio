import Image from "next/image";
import styles from "./styles.module.css";

export const metadata = {
  title: "Rodrigo | UX Designer",
  description:
    "Portfolio de Rodrigo Formigon, UX designer, biólogo e pesquisador.",
};

export default function Home() {
  return (
    <section className={styles.rodrigo}>
      <section className={styles.menu}>
        <section className={styles.top}>
          <div className={styles.title}>
            <h1>RODRIGO</h1>
          </div>
          <div className={`title5normal ${styles.subtitle}`}>
            <p>UX</p>
            <p>UI</p>
            <p>Pesquisa</p>
            <p>Bioinformática</p>
          </div>
        </section>

        <section className={styles.bottom}>
          <div className={styles.social}>
            <Image
              src="/images/linkedin.png"
              alt="LinkedIn"
              height={36}
              width={36}
            />
            <Image
              src="/images/behance.png"
              alt="Behance"
              height={36}
              width={36}
            />
            <Image
              src="/images/github.png"
              alt="GitHub"
              height={36}
              width={36}
            />
          </div>
        </section>
      </section>

      <section className={styles.img}>
        <Image
          src="/images/home-img.gif"
          alt="teste"
          height={640}
          width={360}
        />
      </section>
    </section>
  );
}
