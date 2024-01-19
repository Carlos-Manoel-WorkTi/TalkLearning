import styled from "styled-components";

export const ContainerOut = styled.div<{id?:number}>`
    width: 30%;
    height: auto;
    background-color: #199d4e;
    border-radius: 10px;
    border-top-left-radius:0px;
    padding: 10px;
    color: white;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    `
export const ContainerIn = styled.div<{id?:number}>`
        width: 20%;
        height: auto;
        background-color: #48ba98;
        border-radius: 10px;
        border-top-right-radius:0px;
        float: right;
        margin-right: 40px;
        padding: 10px;
        color: white;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    `
export const BlocoIn = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: end;
    padding-top: 20px;
`
export const LineBellow = styled.div`
    width: 100%;
    height: 5px;
    display: flex;
    justify-content: end;

    span{
        font-size: 0.7em    ;
    }
`