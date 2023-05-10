const SearchBox = props => {
  return (
    <>
      <input
        type="text"
        value={props.value}
        onKeyDown={e => {
          if (e.keyCode === 13) props.setSearchValue(e.target.value)
        }}
        placeholder="Enter Movie"
      />
    </>
  )
}

export default SearchBox
