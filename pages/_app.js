import "/scss/main.scss";
import Layout from "/components/Layout";
import Store from "/store/Store";
import Loader from "/components/Loader";

function MyApp({ Component, pageProps }) {
  return (
    <Store>
      <Loader />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Store>
  );
}

export default MyApp;
