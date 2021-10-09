import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Loader() {
  const [show, setShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setShow(true);
    });
    router.events.on("routeChangeComplete", () => {
      setShow(false);
    });
  }, []);

  return (
    <div className="loader" data-show={show}>
      <div className="dots">
        <div className="dot"></div>
        <div className="dot delay-1"></div>
        <div className="dot delay-2"></div>
      </div>
      <div className="logo">
        <h6>bidle</h6>
        <p>a personal blog</p>
      </div>
    </div>
  );
}
