import "../styles/global.css";
import type { AppProps } from "next/app";
import Layout from "./layout";
import { Roboto } from "@next/font/google";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
