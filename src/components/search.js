import React from 'react'
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

const searchClient = algoliasearch(
  "algolia id",
  "algolia key"
);
const Search = () => {
  return (
    // <div className='h-1/2 w-7/12 bg-gray-300'>
      <InstantSearch
        searchClient={searchClient}
        indexName="Music">
        <SearchBox
        className='h-1/2 w-7/12 bg-gray-300'
          translations={{
            placeholder: 'Search for music'
          }} />
        <Hits />
      </InstantSearch>
    // </div>
  )
}

export default Search