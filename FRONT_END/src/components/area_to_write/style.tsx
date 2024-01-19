import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: 10vh;
    background-color: #212121;
    display: flex;
    justify-content: center;
    align-items: start;
    padding-top: 13px;
`

export const InputC = styled.input<inp>`
    padding: 5px;
    outline: none;
    border: none;
    width: 50%;
    border-bottom: 1px solid gray;
    background-color:rgb(33, 33, 33);
    color: white;
`
interface inp {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}