import React, {  useEffect, useState } from "react";
import Search from "./components/Search";
import Recipe from "./components/Recipe";
import Footer from "./components/Footer";

const APP = () => {
  const [recipe, setReceipe] = useState([]);
  
  useEffect(()=>{
   const setdata = async () => {
      const data = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q="egg"&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}&diet=low-carb`
      );
      const Receipes = await data.json();
      setReceipe(Receipes.hits);
      
    };
    setdata()
  },[])
  const getdata = async (query) => {
    const data = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}&diet=low-carb`
    );
    const Receipes = await data.json();
    console.log(Receipes.hits);
    setReceipe(Receipes.hits);
  };

  return (
    <>
      <Search onClick={getdata} />
      <Recipe data={recipe} />
      <Footer/>
    </>
  );
};
export default APP;
