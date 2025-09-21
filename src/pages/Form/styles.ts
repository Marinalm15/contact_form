import { keyframes, styled } from "styled-components";

export const FormWrapper = styled.div`
    background-color: #ffffff;
    border-radius: 8px;
    border: 4px solid #ffcc00;
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
`

export const FormTitle = styled.h2`
    color: #006747;
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-align: center;
`

export const SubTitle = styled.h3`
    color: #417d48; 
    font-size: 1.1rem;
    font-weight: 400;
    margin-bottom: 2.5rem;
    text-align: center;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`

export const SubmitButton = styled.button`
    background-color: #ffcc00; 
    color: #ffffff;
    padding: 0.75rem;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        opacity: 0.8;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    &:focus {
        outline: none;
    }

    .spinner { //auxílio de IA
        animation: ${spin} 1s linear infinite;
    }
`