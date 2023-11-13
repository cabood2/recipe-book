import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const WelcomeBox = () => {
  return (
    <div className="welcomeBox font-link">
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem>
          <h2 className="welcomeBox_heading" style={{ fontWeight: "bold" }}>
            Greetings family . . .
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam non
            aut cupiditate nemo magnam aspernatur. Similique quibusdam dolores
            eveniet dicta quidem tempora voluptates ut quia, unde veritatis!
            Quisquam neque eos doloremque labore repellendus iusto? Beatae
            architecto id, magnam voluptate nisi, quisquam saepe culpa eius at
            sed ipsa reiciendis eveniet? Porro?
          </p>
        </GridItem>
        <Grid alignItems="center" justifyContent="center">
          <Button className="button-large">Add Recipe</Button>
          <Button className="button-large">Submit Picture</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default WelcomeBox;
