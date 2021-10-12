import "/scss/main.scss";
import Layout from "/components/Layout";
import Store from "/store/Store";
import Loader from "/components/Loader";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [show, setShow] = useState(true);
  const [first, setFirst] = useState(false);
  const router = useRouter();

  useEffect(() => {
    //* For the first time or refresh
    window.onload = () => {
      setFirst(true);
      setTimeout(() => {
        setShow(false);
        setFirst(false);
      }, 3000);
    };

    //* url change start event
    router.events.on("routeChangeStart", () => {
      setShow(true);
    });
    //* url change complete event
    router.events.on("routeChangeComplete", () => {
      setShow(false);
    });

    return () => {
      // // Unbind event when comps dismount
      // router.events.off("routeChangeStart", () => {
      //   setShow(true);
      // });
      // router.events.off("routeChangeComplete", () => {
      //   setShow(false);
      // });
    };
  }, [show, first, router]);

  return (
    <Store>
      <Loader show={show} first={first} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Store>
  );
}

export default MyApp;
