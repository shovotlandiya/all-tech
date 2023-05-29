import "@/styles/main.scss";

import "@/utils/i18n";
import { appWithTranslation } from "next-i18next";

import MainLayout from "@/layouts/MainLayout/MainLayout";
import MediaQueryProvider from "@/context/MediaQueryProvider";

const App = ({ Component, pageProps }) => {
  return (
    <MediaQueryProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </MediaQueryProvider>
  );
};

export default appWithTranslation(App);
