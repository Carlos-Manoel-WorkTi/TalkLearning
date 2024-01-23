import styled, { keyframes } from "styled-components"

const fadeInFromLeft = keyframes`
  0% {
    opacity: 0.7;
    transform: translateX(-120px);
  }
  20% {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.nav<{$visible:string}>`
    width: 380px;
    height: 92vh;
    margin: 0;
    background-color: #141414;
    /* Inicialmente invisível */
  animation: ${fadeInFromLeft} 1s ease-out forwards;

    @media screen and (max-width: 600px){
        display: ${(props) => (props.$visible === 'true' ? 'none' : 'block')};
        position: absolute;
        width: 300px;
    }
    @media screen and (max-width: 450px){
        position: absolute;
        width: 220px;
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

    @media screen and (max-width: 600px){
        margin-left: -33px;
        li{padding: 13px;}
    }

    @media screen and (max-width: 450px){
        margin-left: -30px;
        li{padding: 6px;}
    }
    
`
export const Friend = styled.div`
  width: 130px;
  height: 30px;
  background-color: transparent;
  border: 1px solid  #61616136;
  margin-left: 10px;
  border-radius: 13px;
  display: flex;
  justify-content: start;
  gap: 10px;
  align-items: center;
  padding: 5px;

  img{
    width: 25%;
    height: 90%;
    border-radius: 50%;
  }
`
