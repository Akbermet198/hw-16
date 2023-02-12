import React from 'react'
import Card from '../components/Card'
import Button from '../components/UI/Button'
import { useNav } from '../hook/useNavigate'

const MyOrders = () => {
  const {goBackHandler}=useNav("/")
  return (
    <>
   
    <Card>
     <div> My Orders page bla bla</div>
      
    </Card>
 <Button onClick={goBackHandler}>Go Back</Button>
 </>
  )
}

export default MyOrders