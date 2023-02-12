import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";
import Button from "../components/UI/Button";
import { useNav } from "../hook/useNavigate";

const Products = () => {
  const { goBackHandler} = useNav("/");

  return (
    <>
      <Card>
        <ListItem>
          <li> Product Name 1</li>
          <Link to={"/product/nameId1"}>
            {" "}
            <Button >Details</Button>
          </Link>
          <li> Product Name 2</li>
          <Link to={"/product/nameId2"}>
            {" "}
            <Button>Details</Button>
          </Link>
      
        </ListItem>
      </Card>
      <Button onClick={goBackHandler}>Go Back</Button>
    </>
  );
};
const ListItem = styled.ul`
  width: 500px;
  height: 100%;
  margin: 0 auto;
  list-style: none;
  li {
    background-color: #cccec8;
    color: black;
    /* width: 300px; */
    height: 100%;
    margin-top: 10px;
    padding: 15px;
  }
`;
export default Products;
