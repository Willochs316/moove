import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 428px;
  margin: 0 auto;
  height: 926px;
  background-color: ${({ theme }) => theme.colors.body};
  overflow: hidden;
`;
