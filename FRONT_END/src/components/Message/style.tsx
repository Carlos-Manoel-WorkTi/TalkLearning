import styled from "styled-components";

export const ContainerOut = styled.div<{id:string}>`
    width: 30%;
    height: auto;
    background-color: #199d4e;
    border-radius: 10px;
    border-top-left-radius:0px;
    padding: 10px;
    color: white;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    `
export const ContainerIn = styled.div<{id:string}>`
        width: auto;
        /* min-width: 12%; */
        height: auto;
        background-color: #48ba98;
        border-radius: 10px;
        border-top-right-radius:0px;
        float: right;
        margin-right: 40px;
        padding: 10px;
        padding-bottom: 4px;
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
export const BlocoOut = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: start;
    padding-top: 20px;
`
export const LineBellow = styled.div`
    width: auto;
    height: 5px;
    display: flex;
    justify-content: end;

    span{
        font-size: 0.7em    ;
    }
`
export const Line = styled.div`
display: flex;
justify-content: end;
width: auto;
gap: 10px;
padding-top: 4px;
`