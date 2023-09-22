import React from "react";
import useRecipes from "../hooks/useRecipes";
import { Category } from "./CategoryGrid";

const RecipeGrid = () => {
  const { recipes, error } = useRecipes();

  return <div>RecipeGrid</div>;
};

export default RecipeGrid;
