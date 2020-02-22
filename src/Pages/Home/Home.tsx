import React from "react";
import HeroBanner from "../../Components/Hero";
import Projects from "../../Components/Projects";

const Home: React.FC<{}> = () => {
  return (
    <>
      <HeroBanner />
      <Projects />
    </>
  );
};

export default Home;