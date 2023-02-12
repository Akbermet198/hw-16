import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      
        <nav>
          <Navlist>
            <div>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "white" : "",
                })}
               to ="logo">
                {" "}
                LoGo
              </NavLink>
            </div>
            <Navigation>
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "",
                  })}
                  to="product"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "",
                  })}
                  to="mycard"
                >
                  My Card
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "",
                  })}
                  to="myorder"
                >
                  My Orders
                </NavLink>
              </li>
            </Navigation>
          </Navlist>
        </nav>
    
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background-color: #9090f7;
  width: 100%;
  padding: 20px;
`;
const Navlist = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
`;
const Navigation = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-around;
  li {
    color: white;
    /* font-weight: 500; */
    /* list-style: none; */
  }
`;
