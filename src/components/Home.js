import React, { useRef, useEffect, Suspense ,lazy } from "react";
import Transition from "./Transition";
import gsap from "gsap";
import PageProgress from "react-page-progress";

const Works = lazy(() => import("./Works"));
const Footer = lazy(() => import("./Footer"));

const Home = () => {
  const home = gsap.timeline();
  const homeh1 = useRef(null);
  const homeimg = useRef(null);
  useEffect(() => {
    home.from(
      homeh1.current,
      {
        duration: 0.6,
        skewX: 10,
        x: -100,
        color: "black",
        opacity: 0,
      },
      "-=1.5"
    );
    home.from(
      homeimg.current,
      {
        duration: 0.6,
        y: -200,
        opacity: 0,
      },
      "-=1.5"
    );
  });
  return (
    <div>
      <div className="banner">
        <Transition timeline={home} />
        <div className="home-image home-overlay" ref={homeimg}></div>
        <div className="container-home">
          <h1 ref={homeh1}>full stack web and android developer</h1>
        </div>
      </div>
       <Suspense fallback={<div className="loading-suspense">LOADING</div>}>
        <PageProgress color={"skyblue"} height={5} />
      </Suspense>
          <Suspense fallback={<div />}>
        <Works />
      </Suspense>
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
