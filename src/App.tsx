import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { Category } from "./components/CategoryGrid";
import { useState } from "react";
import FilterList from "./components/FilterList";
import CategoryGrid from "./components/CategoryGrid";
import { Recipe } from "./hooks/useRecipes";
import RecipeCard from "./components/RecipeCard";

export interface GameQuery {
  category: Category;
  recipe: Recipe;
  searchText: string;
}
function App() {
  const [recipeQuery, setRecipeQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid gridTemplateAreas={`"nav" "main" "footer"`}>
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setRecipeQuery({ ...recipeQuery, searchText })
            }
          ></NavBar>
        </GridItem>

        <GridItem area="main" paddingX={3}>
          <CategoryGrid
            selectedCategory={recipeQuery.category}
            onSelectCategory={(category) =>
              setRecipeQuery({ ...recipeQuery, category })
            }
            gameQuery={recipeQuery}
          ></CategoryGrid>
          <p>{recipeQuery.category?.name}</p>
        </GridItem>
        <GridItem area="footer" bg="black">
          Footer
          <RecipeCard gameQuery={recipeQuery}></RecipeCard>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
