import { Grid, GridItem } from "@chakra-ui/react";
import CategoryGrid from "../components/CategoryGrid";
import NavBar from "../components/NavBar";
import RecipeCard from "../components/RecipeCard";

const HomePage = () => {
  return (
    <>
      <Grid gridTemplateAreas={`"main" "footer"`}>
        <GridItem area="main" paddingX={3}>
          <CategoryGrid />
        </GridItem>
        <GridItem area="footer" bg="black">
          Footer
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
