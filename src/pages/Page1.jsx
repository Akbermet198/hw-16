import React from "react";
import {  useParams } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/UI/Button";
import { useNav } from "../hook/useNavigate";

const Page1 = () => {
  const {goBackHandler}=useNav()
  const params = useParams();
  console.log(params);
  return (
    <>
    <Card>
    <div>page1 /{params.nameId}</div>
    </Card>
    
      <Button onClick={goBackHandler}>Go back</Button>
    </>
  );
};

export default Page1;
