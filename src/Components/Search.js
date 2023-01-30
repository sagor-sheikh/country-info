import React, { useEffect, useState } from "react";

const Search = (props) => {
  const [searchText, setSearchText] = useState("");

  const handeChange =(event) => {
    setSearchText(event.target.value);
    
  }
  useEffect(() => {
    props.onSearch(searchText);
  },[searchText])

  return (
    <div style={{ textAlign: "center" }}>
      <input type="text" placeholder="Search Country" value={searchText} onChange={handeChange}/>
    </div>
  );
};

export default Search;
