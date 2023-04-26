import React, {useState} from 'react'
import { useNavigate} from 'react-router-dom';
import './Nav.scss'

const Nav = () => {
  const [searchValue, setsearchValue] = useState("")
  const handleChanege = (e) => {
    setsearchValue(e.target.value)
    navigate(`/search?q=${e.target.value}`)
  }
  const navigate = useNavigate()

  return (
    <div className='nav'>
      <a href="/">Home</a>
      <input 
      value={searchValue}
      onChange={handleChanege}
      className='navinput' 
      placeholder='Search...' 
      type="text" 
      />
    </div>
  )
}

export default Nav