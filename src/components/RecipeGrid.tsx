import {
  GridItem,
  SimpleGrid,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import useRecipes from "../hooks/useRecipes";

import useRecipeStore from "../state-management/store";
import RecipeCard from "./RecipeCard";
import RecipeCover from "./RecipeCover";

const RecipeGrid = () => {
  const { recipes } = useRecipes();
  const searchText = useRecipeStore((s) => s.recipeQuery.searchText);

  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");

  if (recipes.length === 0) {
    return (
      <Text padding={10} fontSize="xl">
        {searchText
          ? `No recipes matched "${searchText}".`
          : "No recipes matched your current filters."}
      </Text>
    );
  }

  return (
    <>
      {isLargerThan1000 ? (
        <>
          <SimpleGrid
            gridGap={6}
            minChildWidth="650px"
            overflow="hidden"
            padding={10}
          >
            {recipes.map((recipe) => (
              <GridItem height="400px" overflow="hidden" borderRadius="20px">
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
