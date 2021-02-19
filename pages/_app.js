import "../styles/globals.css";
import style from "../styles/base.module.css";
import Head from "next/head";
import Link from "next/Link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sternenspringer - Die Universalschmiede</title>

        <meta name="title" content="Sternenspringer - Die Universalschmiede" />
        <meta
          name="description"
          content="Die neue Sci-Fi-Buchserie von Johannes Seitz. Einmalige Welten und spannende Abenteuer mit seltsamen Wesen in einem Universum voller Mythen."
        />
        <meta
          name="keywords"
          content="Sci-Fi, Buch, Kinderbuch, Sternenspringer, Universalschmiede"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Johannes Seitz" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style.container}>
        <header>
          <div className={style.iconsContainer}>
            <Link href="https://www.amazon.de/dp/B08BNGCZFX">
              <img src="/amazon.svg" />
            </Link>
            <Link href="https://www.instagram.com/sternenspringer_saga/">
              <img src="/instagram.svg" />
            </Link>
            <Link href="https://www.facebook.com/johannes.seitz.58760/">
              <img src="/facebook.svg" />
            </Link>
          </div>
          <div>
            <Link href="/">
              <img className={style.logo} src="/logo.svg" />
            </Link>
          </div>
          <div className={style.navContainer}>
            <ul>
              <li>
                <Link href="kontakt">
                  <a>Kontakt</a>
                </Link>
              </li>
              <li>
                <Link href="impressum">
                  <a>Impressum</a>
                </Link>
              </li>
            </ul>
          </div>
        </header>
        <Component {...pageProps} />
        <footer></footer>
      </div>
    </>
  );
}

export default MyApp;
