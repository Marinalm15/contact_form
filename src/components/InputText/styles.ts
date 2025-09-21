import styled from "styled-components";


export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #4a4a4a;
`

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ffcc00;
  border-radius: 8px;
  font-size: 1rem;
  color: #4a4a4a;
  transition: border-color 0.3s;

  &:focus {
    border: 2px solid #ffcc00;
    outline: none;
  }

  &::placeholder {
    color: #a0a0a0;
  }
`