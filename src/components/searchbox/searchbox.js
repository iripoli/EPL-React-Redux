import React from  'react';


const SearchBox = ({searchBox,searchChange})=>{

  return(
    <input 
      type="search"
      placeholder="Search teams" 
      className="pa3 ba b--green bg-lightest-blue searchbox"
      onChange={searchChange}
    />

  )
}

export default SearchBox;