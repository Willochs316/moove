import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 428px;
  height: 83px;
  margin: 0 auto;
  position: relative;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.header};
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

export const Logo = styled.img`
  position: absolute;
  height: 49px;
  width: 49px;
  left: 23px;
  top: 21px;
  cursor: pointer;
`;

