import styled from "styled-components";

export const Head = styled.header`
  background-color: rgb(19, 19, 19); /* Cor de fundo do cabeçalho */
  color: white; /* Cor do texto no cabeçalho */
  padding: 10px; /* Espaçamento interno */ /* Alinhamento do texto */
  display: flex;
  justify-content: space-around;
  width: 100vw;
  align-items: center;
`;
export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 10px 0 40px;
    align-items: center;

    @media screen and (max-width: 800px){
        padding: 0 2px;
    }

    .rota{
        @media screen and (max-width: 680px){
            display: none;
    }

    }

`
export const Logo = styled.h1`
    color: white;
    font-size: 30px;
    font-weight: bold;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img{
        width: 40px;
    }

    @media screen and (max-width: 350px){
      
        font-size: 20px;

        img{
            width: 30px;
         }
    }
 
`
export const Rotas = styled.ul`
    display: flex;
    justify-content: start;
    list-style: none;
    margin: 0;
    padding: 0px 8px;
    margin-right:10px;
    align-items: center;
    li{
        padding: 0px 12px;
        cursor: pointer;
    }
`
export const Search = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
    padding-right: 10px;

    #area-input{
        height: 25px;
        border-radius: 10px;
        outline: none;
        border: none;
        padding: 2px 10px;

        @media screen and (max-width: 800px){
        display: none;
    }
    }
`

export const Perfil = styled.div`
img{
 width: 35px;
 height: 35px;
 border-radius: 50%;
 }
`
