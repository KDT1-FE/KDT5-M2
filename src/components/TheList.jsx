import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function TheList() {
  let movies = useSelector((state) => state.movies.list)
  console.log(movies)

  return (
    movies.map((movie, i) => (
        <div
          className='card card-compact w-[200px] h-[300px] bg-base-100 shadow-xl hover:border-orange-400 border-[5px] p-[5px] shodow-lg rounded-xl m-2'
          key={i}>
          <figure>
            <NavLink to={`/detail/${movie.imdbID}`}>
              <img src={movie.Poster} onError={(e) => {
                e.target.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHY06ge7C7GVU03MJ3ncbjwhAHnLdu64PNzg&usqp=CAU'
              }} />
            </NavLink>
          </figure>
          <div className='card-body h-[70px] object-fill '>
            <div>
              <p className={'text-xl text-center text-bold text-orange-400'}>{movie.Year}</p>
            </div>
            <div>
              <p className='text-md text-center text-[14px] pb-0 truncate'>{movie.Title}</p>
            </div>
          </div>
        </div>
      )
    )
  )
}

export default TheList


