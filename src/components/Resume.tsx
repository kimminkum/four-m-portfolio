import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 40px;

  &::before {
    content: "";
    position: absolute;
    z-index: 0;
    background-color: #000;
    opacity: 0.3;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

const File = styled.table`
  background-color: #fff;
  position: relative;
`;

const Table = styled.table``;

const Tr = styled.tr``;

const Th = styled.tr``;
const Td = styled.tr``;

const Resume: React.FC = () => {
  return (
    <Container>
      <File>
        <Table>
          <Tr>
            <Th>이름</Th>
            <Td></Td>
          </Tr>
          <Tr>
            <Th>주소</Th>
            <Td></Td>
          </Tr>
          <Tr>
            <Th></Th>
            <Td></Td>
          </Tr>
        </Table>
      </File>
    </Container>
  );
};

export default Resume;
