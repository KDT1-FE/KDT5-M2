import React from "react"
import Description from "./components/Descript";
import SearchForm from "./components/Search";
import SearchResult from "./components/SearchResult";
import '../../scss/main.scss'
import { useState } from "react"

function MainPage() {

  const [selectItem, setItem] = useState();

  return(
    <>
     <Description/>
     <SearchForm setData={setItem}/>
     <SearchResult setInfo={selectItem}/>
    </>
  )
};
export default MainPage;