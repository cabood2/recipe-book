import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useRecipeStore from "../state-management/store";

const SearchInput = () => {
  const setOnSearch = useRecipeStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  return (
    <form
      style={{ width: "90%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (!ref.current) return;

        const searchText = ref.current.value.trim();
        setOnSearch(searchText || null);
        navigate(searchText ? "/recipes/search" : "/");
      }}
    >
      <InputGroup marginRight="20px">
        <InputLeftElement children={<BsSearch />} boxSize="50px" />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="search recipes..."
          _placeholder={{ fontSize: "25px" }}
          variant="filled"
          size="lg"
          focusBorderColor="coral"
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
