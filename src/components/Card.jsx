import React from 'react'
import styled from 'styled-components'

const Card = ({children}) => {
  return (
    <StyledCard>{children}</StyledCard>
  )
}

export default Card

const StyledCard = styled.div`
padding: 10px;
 width: 600px;
 height: 100%;
 background-color:#ffffffc1;
 margin: 0 auto;
box-shadow:2px 2px 2px 1px rgba(0, 0, 0, 0.2);
margin-top: 30px;
`