import { useState } from 'react';
import {
  AllYears as allYears,
  queryNumber,
  shows,
} from '../constants/selectItems';
import Button from './Button';
import Select from './Select';

export default function Search() {
  const [searchInput, setSearchInput] = useState('');
  const [searchCategory, setSearchCategory] = useState({
    show: '',
    queryNumber: '',
    year: '',
  });

  const handleSearchCategories = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchCategory({ ...searchCategory, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(searchInput, searchCategory);
  };

  return (
    <form className="flex gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for Movies, Series & More"
        className="flex-1 border-2 border-gray-300 rounded-md p-2 outline-none focus:ring-4 focus:ring-amber-200"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <Select
        category="show"
        options={shows}
        onChange={handleSearchCategories}
      />
      <Select
        category="queryNumber"
        options={queryNumber}
        onChange={handleSearchCategories}
      />
      <Select
        category="year"
        options={allYears}
        onChange={handleSearchCategories}
      />
      <button className="bg-amber-400 rounded-md text-black font-bold w-32">
        Apply
      </button>
    </form>
  );
}
