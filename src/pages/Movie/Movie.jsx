import React from "react";
import TheHeader from "~/components/Header/TheHeader";
import MovieDetail from "~/pages/Movie/MovieMain/MovieDetail/MovieDetail";
import MoviePlot from "~/pages/Movie/MovieMain/MoviePlot/MoviePlot";
import TheFooter from "~/components/Footer/TheFooter";

export default function Movie() {
  return (
    <>
      <TheHeader />
      <main>
        <MovieDetail />
        <MoviePlot />
      </main>
      <TheFooter />
    </>
  );
}
