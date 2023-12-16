import { Grid, GridItem } from "@chakra-ui/react";
import CategoryGrid from "../components/CategoryGrid";
import NavBar from "../components/NavBar";
import RecipeGrid from "../components/RecipeGrid";
import WelcomeBox from "../components/WelcomeBox";
import Form from "../components/Form";

const HomePage = () => {
  return (
    <>
      {/* <WelcomeBox /> */}
      <Grid gridTemplateAreas={`"main" "footer"`}>
        <GridItem area="main" paddingX={3}>
          <Form></Form>
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
