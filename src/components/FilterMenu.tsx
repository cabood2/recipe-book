import {
  Button,
  Icon,
  MenuButton,
  Show,
  Menu,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsList } from "react-icons/bs";
import FilterList from "./FilterList";

const FilterMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <Menu>
        <MenuButton>
          <Icon boxSize="50px" marginLeft={4} as={BsList}></Icon>
        </MenuButton>
        <MenuList>
          <FilterList></FilterList>
        </MenuList>
      </Menu>
      {/* <Icon onClick={() => setShowMenu} boxSize={8} as={BsList}></Icon>

      <Show ssr={showMenu == true}>
        <p>menu</p>
      </Show> */}
    </>
  );
};

export default FilterMenu;
