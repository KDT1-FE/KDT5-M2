import { useSelector } from 'react-redux'
import Loading from '~/components/loading.jsx'

function TheDetailList() {
  let movies = useSelector((state) => state.movieDetail.list)
  if(!movies) {
    return <Loading />
  }
  const changePoster = movies?.Poster?.replace('SX300', 'SX700')
  // console.log(movies)
  return (

    <div className={'container flex my-[30px] p-[20px] '}>
      <div className={'w-[750px] h-[800px] rounded-[30px] shadow-md rounded-xl flex p-[20px] align-center'}>
        <img src={changePoster} className={'w-[500px] h-auto  object-center'}
             onError={(e) => {
               e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHY06ge7C7GVU03MJ3ncbjwhAHnLdu64PNzg&usqp=CAU'
             }} />
      </div>
      <div className={'ml-[20px] w-full h-auto flex flex-col shadow-md rounded-xl p-[30px]'}>
        <span className={'text-[60px] font-bold font-sans'}>{movies.Title}</span>
        <p className={'text-yellow-500 text-[16px] my-[20px]'}>
          <span className={'mr-[5px]'}>{movies.Released} ∙ </span><span className={'mr-[5px]'}>{movies.Runtime} ∙ </span><span>{movies.Country}</span></p>
        <p className={'text-[16px] font-sans'}>{movies.Plot}</p>
        <div className={'mt-[20px]'}>
          <div>
            <span className={'font-bold text-[20px]'}>Ratings</span>
          </div>
          <div className={'flex justify-start items-center'}>
            <div className={'flex justify-start items-center mr-[20px]'}>
              <img
                src='https://raw.githubusercontent.com/ParkYoungWoong/vue3-movie-app/master/src/assets/Internet%20Movie%20Database.png'
                className={'h-8 mr-[5px]'} alt='imdb' />
              <span className={'align-middle'}>{movies?.Ratings?.[0]?.Value}</span>
            </div>

            <div className={'flex justify-start items-center mr-[20px]'}>
              <img
                src='https://raw.githubusercontent.com/ParkYoungWoong/vue3-movie-app/master/src/assets/Rotten%20Tomatoes.png'
                className={'h-8 mr-[5px]'} alt='imdb' />
              <span>{movies?.Ratings?.[1]?.Value}</span>
            </div>
            <img src='https://raw.githubusercontent.com/ParkYoungWoong/vue3-movie-app/master/src/assets/Metacritic.png'
                 className={'h-8 mr-[5px]'} alt='imdb' />
            <span className={'align-middle'}>{movies?.Ratings?.[2]?.Value}</span>
          </div>
        </div>
        <div>
          <p className={'font-bold text-[20px] mt-[10px]'}>Actors</p>
          <p>{movies.Actors}</p>
        </div>
        <div>
          <p className={'font-bold text-[20px] mt-[10px]'}>Director</p>
          <p>{movies.Director}e</p>
        </div>
        <div>
          <p className={'font-bold text-[20px] mt-[10px]'}>Production</p>
          <p>{movies.Production}</p>
        </div>
        <div>
          <p className={'font-bold text-[20px] mt-[10px]'}>Genre</p>
          <p>{movies.Genre}</p>
        </div>
      </div>
    </div>
  )
}

export default TheDetailList