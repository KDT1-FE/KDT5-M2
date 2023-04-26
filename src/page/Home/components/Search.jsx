import React, {useState} from 'react';
import Category from '../section/category';
import NumberBox from '../section/number';
import YearBox from '../section/year';
import { CategoryBox, Number, Year } from '../data/data';
import '../../../scss/home/components/Search.scss'

function SearchForm(props) {

  const [info, setInfo] = useState([])

    const handleChange = (e) => {
        console.log()
        setInfo({
            ...info, [e.target.name]: e.target.value, // <- 변경 후
        });
    };

    const fnSearch = () => {
      console.log('click')
        props.setData({props, ...info});
        console.log(info)
    };

  return(
    <>
    <div className="Searchcontainer">
      <div className='container-box'>
        <input name="title" type="text" placeholder="Search for Movies, Series more" onChange={handleChange}/>
        <Category list={CategoryBox} event={handleChange}/>
        <NumberBox list={Number} event={handleChange}/>
        <YearBox list={Year()} event={handleChange}/>
        <button className="SearchButton" onClick={fnSearch}> Apply </button>
      </div>
    </div>
    </>
  )
};
export default SearchForm