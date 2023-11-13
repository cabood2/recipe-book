import {
  Box,
  Card,
  Grid,
  GridItem,
  HStack,
  SimpleGrid,
  Spinner,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import useRecipes, { Recipe } from "../hooks/useRecipes";

import { Category } from "./CategoryGrid";
import useRecipeStore from "../state-management/store";
import RecipeCard from "./RecipeCard";
import RecipeCover from "./RecipeCover";
import ErrorPage from "../pages/ErrorPage";

const RecipeGrid = () => {
  const { recipes } = useRecipes();

  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");

  if (recipes.length === 0) throw Error;

  return (
    <>
      {isLargerThan1000 ? (
        <>
          <SimpleGrid gridGap={6} minChildWidth="650px" padding={10}>
            {recipes.map((recipe) => (
              <GridItem>
                <RecipeCard recipe={recipe}></RecipeCard>
              </GridItem>
            ))}
          </SimpleGrid>
        </>
      ) : (
        <>
          <SimpleGrid gridGap={6} minChildWidth="200px" padding={10}>
            {recipes.map((recipe) => (
              <GridItem display="flex" justifyContent="center">
                <RecipeCover recipe={recipe}></RecipeCover>
              </GridItem>
            ))}
          </SimpleGrid>
        </>
      )}
    </>
  );
};

export default RecipeGrid;
