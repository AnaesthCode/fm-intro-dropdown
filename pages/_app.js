import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/layout/layout";

import { ModalProvider } from "../context/modal-context";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon-32x32.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Intro Dropdown</title>
      </Head>
      <ModalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ModalProvider>
    </>
  );
}

export default MyApp;
