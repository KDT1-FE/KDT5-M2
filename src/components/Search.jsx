import React, { useMemo, useState } from 'react'
import PropTypes from 'prop-types'

function getYearOptions() {
  const date = new Date()
  let year = date.getFullYear()
  const yearOptions = []
  while (year >= 1985) {
    yearOptions.push(year--)
  }
  return yearOptions
}

export default function Search({ onSearch }) {
  const [page, setPage] = useState('1')
  const [year, setYear] = useState('')
  const [text, setText] = useState('')
  const [genre, setGenre] = useState('')

  const yearOptions = useMemo(() => getYearOptions(), [])

  const handleSubmitSearchForm = (e) => {
    e.preventDefault()
    onSearch(`s=${encodeURIComponent(text)}${year ? `&y=${year}` : ''}${genre ? `&t=${genre}` : ''}`)
  }
  const setInputText = (e) => {
    setText(() => e.target.value.trim())
  }
  const setSelecedGenre = (e) => {
    setGenre(() => e.target.value.trim())
  }
  const setSelectedPage = (e) => {
    setPage(() => e.target.value.trim())
  }
  const setSelecedYear = (e) => {
    setYear(() => e.target.value.trim())
  }
  return (
    <form onSubmit={handleSubmitSearchForm}>
      <input type="text" onChange={setInputText} defaultValue={text} />
      <select name="genre" onChange={setSelecedGenre} defaultValue={genre}>
        <option value="">no-chice</option>
        <option value="movie">movie</option>
        <option value="series">series</option>
        <option value="episode">episode</option>
      </select>
      <select name="page" onChange={setSelectedPage} defaultValue={page}>
        <option value="1">10</option>
        <option value="2">20</option>
        <option value="3">30</option>
      </select>
      <select name="year" onChange={setSelecedYear} defaultValue={year}>
        <option value="">all</option>
        {yearOptions.map((yr) => (
          <option key={yr} value={yr}>
            {yr}
          </option>
        ))}
      </select>
      <input type="submit" value="Search" />
    </form>
  )
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
}
