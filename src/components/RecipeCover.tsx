import { Box, Card, textDecoration } from "@chakra-ui/react";
import { Recipe } from "../hooks/useRecipes";
import useRecipeStore from "../state-management/store";
import { Link } from "react-router-dom";

interface Props {
  recipe: Recipe;
}

const RecipeCover = ({ recipe }: Props) => {
  const setRecipe = useRecipeStore((s) => s.setRecipe);

  return (
    <Card
      className="recipe font-link"
      borderRadius="20px"
      height="200px"
      maxWidth="300px"
      width="100%"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
      _hover={{ transform: "scale(1.03)", transition: "transform .15s easeIn" }}
    >
      <Link
        to={"/recipe/" + recipe.id}
        style={{ textDecoration: "none" }}
        onClick={() => setRecipe(recipe)}
      >
        <h2 className="recipe_name">{recipe.name}</h2>
      </Link>
    </Card>
  );
};

export default RecipeCover;
