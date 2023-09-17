import {
  Button,
  HStack,
  List,
  ListItem,
  Icon,
  background,
} from "@chakra-ui/react";
import filters from "../data/filters";
import { FaClock, FaBreadSlice, FaDrumstickBite } from "react-icons/fa";
import { IconType } from "react-icons";
import { useState } from "react";
import React from "react";

//const [filter, setFilter] = useState();

const iconMap: { [key: string]: IconType } = {
  gluten_free: FaBreadSlice,
  under_30_min: FaClock,
  high_protein: FaDrumstickBite,
};

const FilterList = () => {
  return (
    <List>
      {filters.map((filter) => (
        <ListItem paddingY={1} key={filter.id} onMouseEnter={() => "gray"}>
          <HStack paddingLeft={2} fontSize={25}>
            <Icon
              key={filter.id}
              as={iconMap[filter.slug]}
              color="black"
              marginRight={1}
            ></Icon>

            <Button
              // onClick={() => onSelectCategory(filter)}
              fontSize="lg"
              // fontWeight={
              //   filter.id === selectedCategory?.id ? "bold" : "normal"
              // }

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
