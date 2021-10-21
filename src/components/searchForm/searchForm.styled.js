import styled from '@emotion/styled';

export const Form = styled.form`
  margin: 0 auto;
  padding: 20px;
`;

export const Input = styled.input`
  padding: 3px 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 3px;

  &:focus,
  &:hover {
    outline: none;
    border: 1px solid #28b9fa;
  }
`;

export const Button = styled.button`
  padding: 3px 10px;
  background-color: whitesmoke;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: powderblue;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;
  }
`;
