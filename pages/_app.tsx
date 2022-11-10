import "../styles/global.css";
import type { AppProps } from "next/app";
import Layout from "./layout";

import { store } from "../state/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
