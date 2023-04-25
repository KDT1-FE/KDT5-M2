import { React } from 'react'
import { InputBase, Box, Stack, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const SearchBox = props => {
  return (
    <>
      <Stack
        sx={{
          direction: 'row',
          width: '200px',
          height: '35px',
          border: 1,
          borderColor: 'search.main',
          bgcolor: 'tertiary.main',
          borderRadius: '10px',
          pl: '10px',
          mr: '30px',
          '&:hover': { bgcolor: '#e7ebf0', transition: '.2s linear' }
        }}>
        <InputBase
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          placeholder="Search"
          value={props.value}
          onKeyDown={event => {
            if (event.keyCode === 13) {
              props.setSearchValue(event.target.value)
            }
          }}></InputBase>
      </Stack>
    </>
  )
}

export default SearchBox
