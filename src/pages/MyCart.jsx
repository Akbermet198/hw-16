import React from "react";
import Card from "../components/Card";
import Button from "../components/UI/Button";
import { useNav } from "../hook/useNavigate";

const MyCart = () => {
  const {goBackHandler}=useNav("/")
  return (
    <>
   
    <Card>
      My Cardkm kksksdksk Lorem ipsum dolor sit amet, consectetur adipisicing
      elit. Aperiam asperiores a quasi. Ipsum enim sunt eos animi, accusamus,
      nobis pariatur quisquam voluptatem soluta odit repudiandae dolor
      accusantium ipsam! Sapiente, eos.
    
    </Card>
      <Button onClick={goBackHandler}>Go Back</Button>
      </>
  );
};

export default MyCart;
