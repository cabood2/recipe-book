import { Box, Card, Grid, HStack } from "@chakra-ui/react";
import React from "react";
import useRecipes, { Recipe } from "../hooks/useRecipes";

import { Category } from "./CategoryGrid";
import useRecipeStore from "../state-management/store";

const RecipeCard = () => {
  const { recipes } = useRecipes();

  return (
    <>
      {recipes.map((recipe) => (
        <Card
          className="recipe font-link"
          margin={5}
          borderRadius="20px"
          width="800px"
          height="400px"
        >
          <HStack justify="space-between" marginBottom={5}>
            <h2 className="recipe_name">{recipe.name}</h2>
            <p className="recipe_author"> {recipe.author}</p>
          </HStack>
          <Grid className="recipe_body">
            <div>
              <h3 className="recipe_sub">Ingredients</h3>
              <ul className="recipe_ingredients">
                {recipe.ingredients.map((ingredient) => (
                  <li>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="recipe_sub">Directions</h3>
              <p>{recipe.directions}</p>
            </div>
          </Grid>
        </Card>
      ))}
    </>
  );
};

export default RecipeCard;
