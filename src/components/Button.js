import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  color: ${({ cartBorderColor }) =>
    cartBorderColor ? 'var(--mainYellow)' : 'var(--lightBlue)'};
  border-radius: 0.5rem;
  border-color: ${({ cartBorderColor }) =>
    cartBorderColor ? 'var(--mainYellow)' : 'var(--lightBlue)'};
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: ${({ cartBorderColor }) =>
      cartBorderColor ? 'var(--lightBlue)' : 'var(--lightBlue)'};
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;
