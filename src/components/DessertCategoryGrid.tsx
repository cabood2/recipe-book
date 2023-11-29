import { GridItem, SimpleGrid } from "@chakra-ui/react";
import CategoryCard from "./CategoryCard";
import useCategories from "../hooks/useCategories";

import useRecipeStore from "../state-management/store";
import { Link } from "react-router-dom";
import { transform } from "framer-motion";
import { Category } from "./CategoryGrid";
import useDesserts from "../hooks/useDesserts";

export interface CategoryGrid {
  id: number;
  name: string;
  slug: string;
}

const DessertCategoryGrid = () => {
  const setSelectCategory = useRecipeStore((s) => s.setSubCat);
  const { categories, error } = useDesserts();

  return (
    <>
      <SimpleGrid minChildWidth="300px " padding="10px" spacing={6}>
        {categories.map((category: Category) => (
          <GridItem onClick={() => setSelectCategory(category)}>
            <Link to={"/:specificDessert"}>
              <CategoryCard category={category}></CategoryCard>
            </Link>
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};

export default DessertCategoryGrid;
// function useDessertCategories(): { categories: any; error: any } {
//   throw new Error("Function not implemented.");
// }
