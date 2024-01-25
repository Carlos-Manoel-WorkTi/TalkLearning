import styled from "styled-components";

export const Container = styled.section`
    width: 90%;
    height: 84vh;
    background-color: #2f2f2f;
    padding: 20px;
    
    margin: 0;
    overflow: hidden;
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4zsYf110s8Emw33L9K1AjqxtqZJnBfzBDw&usqp=CAU');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    position: relative;

    @media screen and (max-width: 600px){
        /* height: 71vh;*/
        height: 88vh; 
    }
    @media screen and (max-width: 390px){
        /* height: 68vh; */
        height: 83vh;
    }
    @media screen and (max-width: 300px){
        width: 60%;
        height: 83vh;
    }


`

