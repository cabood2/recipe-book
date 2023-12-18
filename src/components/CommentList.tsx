import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import React from "react";

// interface Props{
//     commentLog: FormData[]
// }

const CommentList = () => {
  return (
    <TableContainer>
      <Table>
        <TableCaption>This is my table</TableCaption>
        <Tbody>
          <Tr>
            <Td>1</Td>
            <Td>2</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CommentList;
