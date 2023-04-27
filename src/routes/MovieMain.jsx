import React from "react";
import TheHeader from "../components/Header/TheHeader";
import RouteMain from "./RouteMain/RouteMain";
import TheFooter from "../components/Footer/TheFooter";

export default function Movie() {
  return (
    <>
      <TheHeader />
      <RouteMain />
      <TheFooter />
    </>
  );
}
