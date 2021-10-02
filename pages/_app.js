import "/scss/main.scss";
import Layout from "/components/Layout";
import Store from "/store/Store";

function MyApp({ Component, pageProps }) {
  return (
    <Store>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Store>
  );
}

export default MyApp;
