import getDetail from '~/core/getDetail'

export default async function detailRes() {
  const details = await getDetail()
  const {
    Title,
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
  } = details
  return details
}
