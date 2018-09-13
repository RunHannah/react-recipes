import React from "react";

const Recipes = props => {
  return (
    <div>
      {props.recipes.map(recipe => {
        return (
          <div key={recipe.recipe_id}>
            <img src={recipe.image_url} alt={recipe.title} />
            <p key={recipe.recipe_id}>{recipe.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Recipes;
