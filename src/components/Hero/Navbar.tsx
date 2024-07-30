import React from "react";
import styled from "styled-components";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Nav = styled.nav`
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 40px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  color: #f0e522;
  font-weight: 700;
  font-size: 20px;
`;

const Menus = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

const MenuItem = styled.a`
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: white;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -15px;
    transform: translateX(-50%);
    width: 8px;
    height: 8px;
    background-color: #f0e522;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    color: white;
  }

  &:hover::after,
  &:focus::after,
  &.active::after {
    opacity: 1; /* Show the dot on hover */
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const SearchIcon = styled(MagnifyingGlassIcon)`
  height: 14px;
  width: 14px;
  color: white;
`;

const SearchInput = styled.input`
  color: white;
  border: none;
  padding: 2px 4px;
  outline: none;
  background-color: transparent;

  &:focus {
    border-bottom: 1px solid white;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Title>Y-Movies</Title>
        <Menus>
          <MenuItem>Home</MenuItem>
          <MenuItem>Movies</MenuItem>
          <MenuItem>Tv Series</MenuItem>
          <MenuItem>Up Coming</MenuItem>
        </Menus>
        <SearchContainer>
          <SearchIcon />
          <SearchInput placeholder="Search For Movies..." />
        </SearchContainer>
      </Container>
    </Nav>
  );
};

export default Navbar;
