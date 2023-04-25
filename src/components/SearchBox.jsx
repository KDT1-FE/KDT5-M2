import { React, useState } from 'react'
import { Input } from '@mui/material'

const SearchBox = props => {
  return (
    <>
      <Input
        placeholder="Search"
        value={props.value}
        onKeyDown={event => {
          if (event.key === 'Enter') {
            props.setSearchValue(event.target.value)
          }
        }}></Input>
    </>
  )
}

export default SearchBox
