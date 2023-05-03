import TheHeader from '~/components/TheHeader.jsx'
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <div className='container w-5/6 h-[100px] mt-[10px] font-sans block mx-auto '>
      <TheHeader />
      <div className="hero w-3/6  mt-[30px] rounded-[20px] block mx-auto">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <img src='src/assets/img/pelican.png' alt='나의사진' />
            <button className="btn btn-primary mt-[30px]"><NavLink to={"/"}>영화 검색</NavLink></button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About