import { GridItem, SimpleGrid } from "@chakra-ui/react";
import CategoryCard from "./CategoryCard";
import useCategories from "../hooks/useCategories";

import useRecipeStore from "../state-management/store";
import { Link } from "react-router-dom";
import { transform } from "framer-motion";

export interface Category {
  id: number;
  name: string;
  slug: string;
}

const CategoryGrid = () => {
  const setSelectCategory = useRecipeStore((s) => s.setCategory);
  const { categories, error } = useCategories();

  return (
    <>
      <SimpleGrid minChildWidth="300px " padding="10px" spacing={6}>
        {categories.map((category) => (
          <GridItem onClick={() => setSelectCategory(category)}>
            <Link to={"/recipes/:category"}>
              <CategoryCard category={category}></CategoryCard>
            </Link>
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};

export default CategoryGrid;
