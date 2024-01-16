import styled from "styled-components"

export const Container = styled.nav`
    width: 380px;
    height: 92vh;
    margin: 0;
    background-color: #141414;

    @media screen and (max-width: 600px){
        display: none;
    }
`
export const Opc = styled.ul`
    list-style: none;
    color: white;

    li{
        padding: 15px;

       a{
        text-decoration: none;
        color:white;
        display: flex;
        justify-content: start;
        align-items: center;
        

        &:hover{
            border-bottom: 2px solid green;
            color: #bbbbbb;
        }
       }
    }
    
`