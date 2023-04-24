import { React, useState } from 'react'
import { Input } from '@mui/material'

const SearchBox = props => {
  return (
    <>
      <Input
        placeholder="Search"
        value={props.value}
        onChange={event => props.setSearchValue(event.target.value)}></Input>
    </>
  )
}

export default SearchBox
