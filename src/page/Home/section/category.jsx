import React from 'react'
import '../../../scss/section/category.scss'

function Category (props) {

  const renderBox = () => props.list.map((item) => {
    return(
        <option key={item.id}>{item.name}</option>      
    )
  })

  const handleChange = (e) => {
    props.event(e);
  }

  return(
    <>
     <div className="SearchContainer-input__selects">
      <select name="cate" className="form-select" key="1" onChange={handleChange}>        
        {renderBox()}
      </select>
      </div>
    </>
  )
};
export default Category