import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { Remark } from "./Form";

interface Props {
  commentLog: Remark[];
}

const CommentList = ({ commentLog }: Props) => {
  return (
    <TableContainer>
      <Table>
        <TableCaption>Comments</TableCaption>
        <Tbody>
          {commentLog.map((comment) => (
            <Tr>
              <Td>{comment.title}</Td>
              <Td>{comment.comment}</Td>
              <Td>{comment.recipe}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CommentList;
