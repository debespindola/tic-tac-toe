import styled from 'styled-components';

export const Button = styled.button`
  height: 50px;
  width: 50px;
  margin-top: 10px;

  border-radius: 50%;
  border: 1px solid #000;
  background: none;

  display: flex;
  align-items: center;
  justify-content: center;

  :active {
    opacity: 0.5;
  }
`;

export const Icon = styled.img`
  width: 30px;
`;
