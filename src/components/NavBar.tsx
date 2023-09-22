import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Screen Shot 2023-09-16 at 2.14.24 PM.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import FilterMenu from "./FilterMenu";
import useRecipeStore from "../state-management/store";
import { useRef } from "react";

interface Props {
  setOnSearch: (searchText: string) => void;
}

const NavBar = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setOnSearch = useRecipeStore((s) => s.setSearchText);

  return (
    <div className="nav-bar">
      <HStack padding="10px" height="100%">
        <FilterMenu></FilterMenu>
        <Image marginRight={7} marginLeft={3} src={logo} height="70px"></Image>
        <SearchInput
          onSearch={() => {
            if (ref.current) setOnSearch(ref.current?.value);
          }}
        ></SearchInput>
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </div>
  );
};

export default NavBar;
