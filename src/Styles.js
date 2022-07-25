import styled from 'styled-components';

const Button = styled.button`
    color: palevioletred;
    font-size: .75em;
    font-weight: bold;
    margin: 1em;
    // padding: 0.25em 1em;
    border: 1px solid palevioletred;
    border-radius: 2px;
`
export const TomatoButton = styled(Button)`
    color: black;
    border-color: tomato;
    background-color: tomator;
`;