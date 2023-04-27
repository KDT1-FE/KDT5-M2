import React from "react";
import TheHeader from "../components/Header/TheHeader";
import RouteRatings from "./RouteRatings/RouteRatings";
import TheFooter from "../components/Footer/TheFooter";

export default function Movie() {
  return (
    <>
      <TheHeader />
      <RouteRatings />
      <TheFooter />
    </>
  );
}
