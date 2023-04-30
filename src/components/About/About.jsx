import React from "react";
import styles from "./About.module.scss";
import TheHeader from "../Header/TheHeader";
import TheFooter from "../Footer/TheFooter";
import AboutMain from "./AboutMain";

const About = () => {
  return (
    <>
      <TheHeader />
      <AboutMain />
      <TheFooter />
    </>
  );
};

export default About;
