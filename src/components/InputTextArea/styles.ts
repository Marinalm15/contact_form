import { styled } from "styled-components";

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #4a4a4a;
`

export const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ffcc00;
  border-radius: 8px;
  font-size: 1rem;
  color: #4a4a4a;
  resize: none;
  font-family: 'Arial', sans-serif;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border: 2px solid #ffcc00;
  }

  &::placeholder {
    color: #a0a0a0;
  }
`
