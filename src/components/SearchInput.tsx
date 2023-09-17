import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      style={{ width: "90%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
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
