import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    position: relative;
`

export const SectionChat = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const ContainerWrite = styled.section`
    width: 90%;
    height: 50px;
    background-color: #21212189;
    border: 1px solid #17171788;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: start;
    padding-top: 13px;
   position: absolute;
   margin-top: 76vh;
   overflow: hidden;
   box-shadow: inset 1px 0 10px rgba(10, 10, 10, 0.486);
   margin-right: 2%;
  

    @media screen and (max-width: 600px){
        padding-top: 10px;
      align-items: center;
      height: 7vh;
      margin-top: 73vh;
}
  @media screen and (max-width: 390px){
    margin-top: 69vh;
      height: 7vh;
}
`


export const InputC = styled.input<inp>`
    padding: 5px;
    outline: none;
    border: none;
    width: 50%;
    border-bottom: 1px solid gray;
    background-color: transparent;
    color: white;

    &:focus{
        border-bottom: 1px solid gray;
    }
`
interface inp {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
