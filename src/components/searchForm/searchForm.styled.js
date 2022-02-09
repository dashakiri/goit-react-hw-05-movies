import styled from '@emotion/styled';

export const Form = styled.form`
  position: relative;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

export const Input = styled.input`
  padding: 3px 10px;
  border: 1px solid var(--medium-grey);
  border-radius: 10px;
  width: 344px;
  height: 64px;
  background-color: transparent;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.33;
  color: var(--medium-grey);

  &:focus,
  &:hover {
    outline: none;
    border: 1px solid #28b9fa;
  }
`;

export const Button = styled.button`
  position: relative;
  right: 50px;
  top: 10px;
  padding: 3px 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 28px;
  color: var(--medium-grey);
`;
