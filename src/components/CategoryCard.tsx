import { Card, CardBody, Image, VStack } from "@chakra-ui/react";
import { Category } from "./CategoryGrid";

import appetizers from "../assets/appetizers.jpg";
import beef from "../assets/beef.jpg";
import breads from "../assets/breads.jpg";
import breakfast from "../assets/breakfast.jpg";
import chicken from "../assets/chicken.jpg";
import condiments from "../assets/condiments.jpg";
import desserts from "../assets/desserts.jpg";
import ham from "../assets/ham.jpg";
//import misc from "";
import pasta from "../assets/pasta.jpg";
import pork from "../assets/pork.jpg";
import sides from "../assets/sides.jpg";
import soup from "../assets/soup.jpg";
import turkey from "../assets/turkey.jpg";

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
    <Card overflow="hidden" className="font-link">
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
