import getDetail from "~/core/getDetail"

export default async function detailRes() {
  const detailRes = await getDetail();
  console.log(detailRes);

  const { Title,
          Year,
          Rated, 
          Released,
          Runtime,
          Genre,
          Director,
          Actors,
          Plot,
          Language,
          Country,
          Poster,
          Ratings,
          Metascore,
          Response
          }
  = detailRes;
  const details = { Title, Year, Rated, Released, Runtime, Genre, Director, Actors, Plot, Language, Country, Poster, Ratings, Metascore, Response }
  return details;
}