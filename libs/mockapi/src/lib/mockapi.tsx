import styled from 'styled-components';

/* eslint-disable-next-line */
export interface MockapiProps {}

const StyledMockapi = styled.div`
  color: pink;
`;

export function Mockapi(props: MockapiProps) {
  return (
    <StyledMockapi>
      <h1>Welcome to Mockapi!</h1>
    </StyledMockapi>
  );
}

export default Mockapi;
