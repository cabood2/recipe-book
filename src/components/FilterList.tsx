import { Button, HStack, List, ListItem, Icon } from "@chakra-ui/react";
import filters from "../data/filters";
import { FaClock, FaBreadSlice, FaDrumstickBite } from "react-icons/fa";
import { IconType } from "react-icons";
import React from "react";
import useRecipeStore from "../state-management/store";

const iconMap: { [key: string]: IconType } = {
  gluten_free: FaBreadSlice,
  under_30_min: FaClock,
  high_protein: FaDrumstickBite,
};

const FilterList = () => {
  const selectedFilter = useRecipeStore((s) => s.recipeQuery.selectedFilter);
  const setSelectedFilter = useRecipeStore((s) => s.setSelectedFilter);

  return (
    <List>
      {filters.map((filter) => (
        <ListItem paddingY={1} key={filter.id}>
          <HStack paddingLeft={2} fontSize={25}>
            <Icon as={iconMap[filter.slug]} color="black" marginRight={1} />
            <Button
              onClick={() =>
                // Clicking the active filter again deselects it
                setSelectedFilter(
                  selectedFilter === filter.slug ? null : filter.slug
                )
              }
              fontSize="lg"
              fontWeight={selectedFilter === filter.slug ? "bold" : "normal"}
              variant="link"
              whiteSpace="normal"
              textAlign="left"
            >
              {filter.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default FilterList;
