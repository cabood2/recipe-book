import React from "react";
import RecipeCard from "../components/RecipeCard";
import useRecipeStore from "../state-management/store";
import { Box } from "@chakra-ui/react";

const RecipeDetails = () => {
  const currRecipe = useRecipeStore((s) => s.recipeQuery.recipe);

  return (
    <Box padding={10}>{currRecipe && <RecipeCard recipe={currRecipe} />}</Box>
  );
};

export default RecipeDetails;
