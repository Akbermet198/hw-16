import React from 'react'
import Card from '../components/Card'
import Button from '../components/UI/Button'
import { useNav } from '../hook/useNavigate';

const Logo = () => {
 const { goBackHandler } = useNav("/");

  return (
   <>
   <Card>
    <div>Logo</div>
    </Card>
    <Button onClick={goBackHandler}>GO back</Button>
    </>
  )
}

export default Logo