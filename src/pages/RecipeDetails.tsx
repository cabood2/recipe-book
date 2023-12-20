import React from "react";
import RecipeCard from "../components/RecipeCard";
import useRecipeStore from "../state-management/store";
import { Box } from "@chakra-ui/react";
import Form, { Remark } from "../components/Form";

const RecipeDetails = () => {
  const currRecipe = useRecipeStore((s) => s.recipeQuery.recipe);
  const commentLog: Remark[] = [];
  return (
    <>
      <Box padding={10}>
        {currRecipe && <RecipeCard recipe={currRecipe} />}
        <Box marginTop={10}>
          <Form commentLog={commentLog}></Form>
        </Box>
      </Box>
    </>
  );
};

export default RecipeDetails;
