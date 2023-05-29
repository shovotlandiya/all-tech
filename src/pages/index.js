import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t("name")}
      {t("example")}
      Lorem ipsum dolor sit amet.
    </div>
  );
};

const getServerSideProps = async ({ locale }) => {
  return { props: { ...(await serverSideTranslations(locale)) } };
};

export default Home;
