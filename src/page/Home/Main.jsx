import React from "react"
import Description from "./components/Descript"
import SearchForm from "./components/Search"
import Header from "../../components/common/Layout/header"
import SearchResult from "./components/SearchResult"
import '../../scss/home.scss'
import { useState } from "react"

function MainPage() {

  const [selectItem, setItem] = useState();

  return(
    <div className="Home-Container">
      <Header/>
      <div className="Home-Container__box">
        <div className="Home-Container__inner">
          <Description/>
          <SearchForm setData={setItem}/>
          <SearchResult setInfo={selectItem}/>  
        </div>  
      </div>  
    </div>
  )  
};
export default MainPage