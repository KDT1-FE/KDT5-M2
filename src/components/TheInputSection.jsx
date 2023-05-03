import '~/css/index.css'
import { useDispatch } from 'react-redux'
import { setMovieWord } from '~/assets/data/store.jsx'


export default function TheInputSection() {
  const dispatch = useDispatch()

  let year = []

  function getYear() {
    for (let i = 1985; i <= 2023; i++) {
      year.push(i)
    }
  }

  getYear()

  return (
    <div>
      <div className='form-control'>
        <div className='input-group'>
          <input type='text' placeholder='Search for movies, Series & more'
                 className='input input-bordered w-[500px]' id={'movieName'} onKeyDown={(e) => {
            if (e.key === 'Enter') {
              getData()
            }
          }} />
        </div>
      </div>

      <div className={'flex mt-[10px] justify-end'}>
        <div className='input-group m-0'>
          <select className='select select-bordered w-[180px]' id={'type'} defaultValue={'Movie'}>
            <option disabled selected>장르 선택</option>
            <option>Movie</option>
            <option>Series</option>
            <option>Episode</option>
          </select>
          <select className='select select-bordered w-[150px]' id={'count'} defaultValue={10}>
            <option disabled selected>검색 영화건수</option>
            <option value={1}>10</option>
            <option value={2}>20</option>
            <option value={3}>30</option>
          </select>
          <select className='select select-bordered w-[165px]' id={'year'} defaultValue={''}>
            <option selected value={''}>All Years</option>
            {year.map((item, index) => {
              return <option key={index}>{item}</option>
            })}
          </select>
          <button className='btn' onClick={() => {
            getData()
          }}>검색
          </button>
        </div>
      </div>
    </div>
  )

  function getData() {
    let mm = {}
    let movieName = document.querySelector('#movieName').value
    let movieType = document.querySelector('#type').value
    let movieCount = document.querySelector('#count').value
    let movieYear = document.querySelector('#year').value
    mm = { movieName, movieType, movieCount, movieYear }
    // console.log(mm)
    dispatch(setMovieWord(mm))
  }

}