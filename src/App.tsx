import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import CategoryGrid from "./components/CategoryGrid";
import RecipeCard from "./components/RecipeCard";

function App() {
  return (
    <>
      <Grid gridTemplateAreas={`"nav" "main" "footer"`}>
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>

        <GridItem area="main" paddingX={3}>
          <CategoryGrid />
        </GridItem>
        <GridItem area="footer" bg="black">
          Footer
          <RecipeCard></RecipeCard>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
