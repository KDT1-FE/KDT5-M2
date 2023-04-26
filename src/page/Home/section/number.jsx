import React from 'react'
import'../../../scss/section/number.scss'

function NumberBox (props) {

  const renderNum = () => props.list.map((item) => {
    return(
        <option key={item.id}>{item.name}</option>      
    )
  })

  const handleChange = (e) => {
    props.event(e);
  }

  return(
    <>
     <div className="NumberContainer-input__selects">
      <select name="number" className="Number-select" onChange={handleChange}>        
        {renderNum()}
      </select>
      </div>
    </>
  )
};
export default NumberBox