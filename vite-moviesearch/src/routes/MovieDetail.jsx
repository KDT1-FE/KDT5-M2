import { useParams } from "react-router-dom";
import MovieInfo from "~/components/MovieInfo";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MovieDetail() {
  const { movieId } = useParams();

  return (
    <>
      <Header />

      <MovieInfo />

      <Footer />
    </>
  );
}
