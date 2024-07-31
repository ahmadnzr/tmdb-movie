import React, { useEffect } from "react";
import styled from "styled-components";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useFetchPopular } from "../../hooks";

const Navbar = () => {
  const { data, isLoading } = useFetchPopular();

  useEffect(() => {
    console.log({ data, isLoading });
  }, [data, isLoading]);

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

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  font-size: ${(props) => props.theme.fontSize.medium};
  z-index: 999;
`;

const Container = styled.div`
  width: 80%;

  margin: 0 auto;
  padding: 40px 0 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => props.theme.spacing.small};
`;

const Title = styled.span`
  font-weight: 700;
  flex: 1;
  font-size: ${(props) => props.theme.fontSize.large};
  color: ${(props) => props.theme.color.primary};
`;

const Menus = styled.div`
  display: flex;
  flex: 1.5;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const MenuItem = styled.a`
  position: relative;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.color.neutral};

  &:after {
    content: "";
    width: 8px;
    height: 8px;
    position: absolute;
    left: 50%;
    bottom: -15px;
    transform: translateX(-50%);
    background-color: ${(props) => props.theme.color.primary};
    border-radius: 50%;
    opacity: 0;
    transition: ${(props) => props.theme.animation};
  }

  &:hover {
    color: ${(props) => props.theme.color.neutral};
  }

  &:hover::after,
  &:focus::after,
  &.active::after {
    opacity: 1; /* Show the dot on hover */
  }
`;

const SearchContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.xsmall};
`;

const SearchIcon = styled(MagnifyingGlassIcon)`
  height: 14px;
  width: 14px;
  color: ${(props) => props.theme.color.neutral};
`;

const SearchInput = styled.input`
  color: ${(props) => props.theme.color.neutral};
  border: none;
  padding: 0.1em 0.25em;
  outline: none;
  background-color: transparent;

  &:focus {
    border-bottom: 1px solid ${(props) => props.theme.color.neutral};
  }
`;
