import React from "react";
import TheHeader from "~/components/Header/TheHeader";
import TheMain from "./Main/TheMain";
import TheFooter from "~/components/Footer/TheFooter";
import "~/index.css";

const App = () => {
  return (
    <>
      <TheHeader />
      <TheMain />
      <TheFooter />
    </>
  );
};

export default App;
