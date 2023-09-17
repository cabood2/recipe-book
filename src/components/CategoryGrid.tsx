import { GridItem, SimpleGrid } from "@chakra-ui/react";
import CategoryCard from "./CategoryCard";
import useCategories from "../hooks/useCategories";
import { GameQuery } from "../App";

export interface Category {
  id: number;
  name: string;
  slug: string;
}

interface Props {
  onSelectCategory: (category: Category) => void;
  selectedCategory: Category;
  gameQuery: GameQuery;
}

const CategoryGrid = ({
  selectedCategory,
  onSelectCategory,
  gameQuery,
}: Props) => {
  const { categories, error } = useCategories(gameQuery);

  //const skeletons = [1, 2, 3, 4, 5, 6];
  // if (error) return null;
  // if (isLoading) return <Spinner></Spinner>;
  
  return (
    <>
      <SimpleGrid minChildWidth="300px " padding="10px" spacing={6}>
        {categories.map((category) => (
          <GridItem onClick={() => onSelectCategory(category)}>
            <CategoryCard category={category}></CategoryCard>
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};

export default CategoryGrid;
