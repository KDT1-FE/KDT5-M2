

import '~/css/index.css'
import { NavLink } from 'react-router-dom'


export default function TheHeader() {

  return (
    <div className='navbar  text-primary-content'>
      <a className='btn btn-primary normal-case text-2xl rounded-[60px] ml-[30px]' href={'/'}>OMDBApi
        <span className={'text-amber-400 text-2xl'}>.com</span></a>
      <div className="navbar bg-primary sm:block md:h-[46px] w-auto text-primary-content rounded-[50px] ml-[20px] ">
        <NavLink className={'p-[10px] text-xl hover:text-red-500'} to={'/'}>영화 검색</NavLink>
        <NavLink className={'p-[10px] text-xl hover:text-red-500'} to={'/detail/tt4154796'}>상세 보기</NavLink>
        <NavLink className={'p-[10px] text-xl hover:text-red-500'} to={'/about'}>about</NavLink>
      </div>
    </div>
  )
}