import React from 'react'
import { useParams } from 'react-router-dom';

const Pagetwo = () => {
 const params = useParams();
  return (
    <div>{params.nameId}</div>
  )
}

export default Pagetwo