import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    gap: 5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FormWrapper = styled.div`
    border-radius: 0.25rem;
    box-shadow: 8px 2px 2px 3px rgba(105,201,208,0.73);

`;

export const Input = styled.input`
    height: 2rem;
    padding: 0 .5rem;
    border: 1px solid #ddd;
    border-radius: .25rem 0 0 .25rem;
    

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button` 
    height: 2rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25rem .25rem 0;
    cursor: pointer;
    

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const ErrorMsg = styled.span`
    display: block;
    font-size: .65rem;
    color: red;
    font-weight: 600;
`