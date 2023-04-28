
export default async function getDetail() {
  const id = location.pathname.split('/').pop();
  const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&i=${id}&plot=full`)
  const json = await res.json()
  if (json.Response === 'True') {
    return json
  }
  else if(json.Response === 'False'){
    return json
  }
  return json.Error
}