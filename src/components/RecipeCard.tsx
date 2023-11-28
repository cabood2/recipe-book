import { Card, Grid, HStack } from "@chakra-ui/react";
import React from "react";
import { Recipe } from "../hooks/useRecipes";
import useRecipeStore from "../state-management/store";
import { Link } from "react-router-dom";

interface Props {
  recipe: Recipe;
}
const RecipeCard = ({ recipe }: Props) => {
  const setRecipe = useRecipeStore((s) => s.setRecipe);

  return (
    <Link to={"/recipe/" + recipe.id} onClick={() => setRecipe(recipe)}>
      <Card
        className="recipe font-link"
        borderRadius="20px"
        minHeight="400px"
        overflow="hidden"
        _hover={{
          transform: "scale(1.03)",
          transition: "transform .15s easeIn",
        }}
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
    </Link>
  );
};

export default RecipeCard;
