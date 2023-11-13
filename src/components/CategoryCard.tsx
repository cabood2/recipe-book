import { Card, CardBody, Image, VStack } from "@chakra-ui/react";
import { Category } from "./CategoryGrid";

import appetizers from "../assets/appetizers.webp";
import beef from "../assets/beef.webp";
import breads from "../assets/breads.webp";
import breakfast from "../assets/breakfast.webp";
import chicken from "../assets/chicken.webp";
import condiments from "../assets/condiments.webp";
import desserts from "../assets/desserts.webp";
import ham from "../assets/ham.webp";
//import misc from "";
import pasta from "../assets/pasta.webp";
import pork from "../assets/pork.webp";
import sides from "../assets/sides.webp";
import soup from "../assets/soup.jpg";
import turkey from "../assets/turkey.jpg";
import { easeIn } from "framer-motion";

interface Props {
  category: Category;
}

const CategoryCard = ({ category }: Props) => {
  const imageMap: { [key: string]: string } = {
    appetizers: appetizers,
    beef: beef,
    breads: breads,
    breakfast: breakfast,
    chicken: chicken,
    condiments: condiments,
    desserts: desserts,
    ham: ham,
    pasta: pasta,
    pork: pork,
    sides: sides,
    soups_and_stews: soup,
    turkey: turkey,
  };

  return (
    <Card
      _hover={{ transform: "scale(1.03)", transition: "transform .15s easeIn" }}
      overflow="hidden"
      className="font-link"
    >
      <Image
        height={250}
        src={imageMap[category.slug]}
        objectFit="cover"
      ></Image>
      <CardBody padding="5px">
        <VStack justifyContent="center" height="80px">
          <h2>{category.name}</h2>
          <p>
            {category.name == "Chicken"
              ? "Winner, winner, chicken dinner!"
              : ""}
          </p>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default CategoryCard;
