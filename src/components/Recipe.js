import React, { useState } from "react";
import * as uuid from "uuid";

const Recipe = (props) => {
  const [toggle, setToggle] = useState(false);
  const clicked = () => {
    setToggle(!toggle);
  };
  return (
    <div className="main">
      {props.data.map((elem) => {
        return (
          <>
            <div key={uuid.v4()} className="element">
              <h3 className="first">{elem.recipe.label}</h3>
              <img src={elem.recipe.image} alt={elem.recipe.label} />
              <p className="second">
                Total Calories:{Math.round(elem.recipe.calories)}
              </p>
              {toggle ? (
                <div>
                  {elem.recipe.ingredients.map((ele) => {
                    return <li className="ingredient">{ele.text}</li>;
                  })}
                </div>
              ) : (
                <div></div>
              )}
              <a href={elem.recipe.url}>
                <button>View Full Recipe</button>
              </a>
              <div>
                <button onClick={clicked}>View Ingredients</button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Recipe;
