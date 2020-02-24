import React from "react";
import HeroBanner from "../../Components/Hero";
import Projects from "../../Components/Projects";
import Posts from "../../Components/Posts";

const Home: React.FC<{}> = () => {
  return (
    <>
      <HeroBanner />
      <Projects />
      <Posts />
    </>
  );
};

export default Home;
