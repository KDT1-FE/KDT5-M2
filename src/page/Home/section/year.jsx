import '../../../scss/section/year.scss'
import React from 'react'

function YearBox(props) {
  console.log(props);
  const renderNum = () => props.list.map((item) => {
    return(
      <option key={item}>{item}</option>     
  )
  })
  
  const handleChange = (e) => {
    props.event(e);
  }

  return(
    <>
     <div className="YearContainer-input__selects">
      <select name="year" className="Year-select" onChange={handleChange}>        
        <option>All year</option> 
        {renderNum()}
      </select>
      </div>
    </>
  )
};
export default YearBox