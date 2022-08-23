import React, { useState } from "react";

const Search = (props) => {
  const [query, setQuery] = useState("");
  const [click,setClick]=useState(false)
  //events
  const changed = (e) => {
    const value = e.target.value;
    setQuery(value);
  };
  const clicked = (e) => {
    e.preventDefault();
    props.onClick(query,click);
    setClick(true)
    setQuery("");
  };
  return (
    <div className="searchmain">
      <div className="logo"><h1>Keto Receipe's</h1>
      <p>Eat Sleep Keto</p></div>
      <form>
        <input
          type="text"
          placeholder="Search Receipes"
          value={query}
          onChange={changed}
        ></input>
        <button className="searchbtn"onClick={clicked}>Search</button>
      </form>
    </div>
  );
};

export default Search;
