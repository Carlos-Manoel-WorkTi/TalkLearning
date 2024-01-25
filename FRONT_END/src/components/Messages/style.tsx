import styled from 'styled-components';

export const Messages = styled.div`
  height: auto;
  min-height: 10vh;
  max-height: 72vh;
  overflow-y: scroll;
  

  /* Chrome */
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #94949448;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #8080802c;
  }

  /* Firefox */
  scrollbar-width: thin;
  scrollbar-color: #cbcbcb #f1f1f16c;
`;
