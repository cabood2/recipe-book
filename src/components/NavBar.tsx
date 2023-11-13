import { HStack, Image, useMediaQuery } from "@chakra-ui/react";
import logo from "../assets/Screen Shot 2023-09-16 at 2.14.24 PM.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import FilterMenu from "./FilterMenu";
import { Link } from "react-router-dom";
import useRecipeStore from "../state-management/store";

const NavBar = () => {
  // const ref = useRef<HTMLInputElement>(null);
  const onClick = useRecipeStore((s) => s.setSearchText);

  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");

  return (
    <div className="nav-bar">
      <HStack padding="10px" height="100%">
        <FilterMenu></FilterMenu>
        {isLargerThan700 ? (
          <Link to="/" onClick={() => onClick(null!)}>
            <Image
              marginRight={7}
              marginLeft={3}
              src={logo}
              height="70px"
            ></Image>
          </Link>
        ) : (
          <div></div>
        )}
        <SearchInput></SearchInput>
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </div>
  );
};

export default NavBar;
