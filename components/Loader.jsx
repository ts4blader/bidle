import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Loader() {
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

    router.events.on("routeChangeStart", () => {
      setShow(true);
    });
    router.events.on("routeChangeComplete", () => {
      setShow(false);
    });

    return () => {
      // Unbind event when comps dismount
      router.events.off("routeChangeStart", () => {
        setShow(true);
      });
      router.events.off("routeChangeComplete", () => {
        setShow(false);
      });
    };
  }, []);

  return (
    <div className="loader" data-show={show} data-first={first}>
      <div className="dots">
        <div className="dot"></div>
        <div className="dot delay-1"></div>
        <div className="dot delay-2"></div>
      </div>
      {first && (
        <div className="logo">
          <h6>bidle</h6>
          <p>a personal blog</p>
        </div>
      )}
    </div>
  );
}
