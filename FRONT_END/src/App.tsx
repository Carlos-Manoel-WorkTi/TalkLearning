import { ChangeEvent, useState } from 'react';

// Components
import { Main, SectionChat, ContainerWrite, InputC } from './styleApp.tsx';
import Header from './components/Header/Header.tsx';
import NavRight from './components/NavRight/NavRight.tsx';
import Chat from './components/chat/chat.tsx';
import Style_Global from './style/globalStyle.tsx';
import Ads from './components/Publicidade/Publicidade.tsx';
import MsgIn from './components/Message/MsgIn.tsx';
import MsgOut from './components/Message/MsgOut.tsx';
import Api from './Api/api.tsx';
import { BtnAudioSend, BtnIcons, BtnMsgSend, BtnOther } from './icons/icons.tsx';
import ErrorBoundary from './components/Error/error.tsx';
import Messages  from './components/Messages/message.tsx';





interface ListMsgInterface {
  msg: string;
  remetente: string;
  idMsg?: string;
}


// Gere um ID único para cada mensagem
const generateUniqueId = () => {
  return '_' + Math.random().toString(36);
};



function App() {

  const [msgValue,setMsgValue] = useState('');
  const [listMsg,setListMsg]= useState<ListMsgInterface[]>([{ msg: 'Hello, what is your name?', remetente: 'root', idMsg: generateUniqueId() }])
  const [MenuShow, setMenuShow] = useState(true);



 // Busque dados no servidor
 const fetchDataAndSetState = async (obj:ListMsgInterface) => {
  try {
    
    const data = await Api.postReq(obj);
    
    setTimeout(() => {
      setListMsg((prev) => [...prev,data]);
    }, 1000);
   
    return data;

  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
};



  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    setMsgValue(e.target.value);
  }

  function showMenu() {
    setMenuShow(!MenuShow);
     
  }
  

function addMessageToList() {
      if(msgValue === '') return
      //Criar um obj com as dados passado pelo o usuario 
      const newMessage = { msg: msgValue, remetente: 'user', idMsg: generateUniqueId() };
      // Adicionar msg do ususario para a lista
      setListMsg((prev) => [...prev,newMessage]);
      // Faz a logica no servidor e salva a resposta na lista
      fetchDataAndSetState(newMessage);

      
      setMsgValue('');

    }
  
    const handleKeyDown = (event:React.KeyboardEvent<HTMLInputElement>) => {
      // Verifica se a tecla pressionada é "Enter"
      if (event.key === 'Enter') {
        // Evita a quebra de linha padrão ao pressionar "Enter" em um campo de texto
        event.preventDefault();
        // Chama a função para adicionar a mensagem à lista
        addMessageToList();
      }
    };

  
  return (
    <>
    <ErrorBoundary>
      <Style_Global />
       <Header hideMenu={showMenu}></Header>

      <Main>
        <NavRight visible={MenuShow.toString()} />

        <SectionChat> 
          <Chat>
          <Messages>
            
          
          {listMsg.map((ms, index) => {
              
              if(ms.remetente === 'user'){
                return  <MsgIn key={index} rep={ms.msg} idMsg={'1'}/>
              }else{
                return <MsgOut key={index} msg={ms.msg}/>   
                          
              }
          })}
          </Messages>
         
          <ContainerWrite> 
            <BtnOther />
            <BtnIcons />
            <InputC placeholder="Digite sua mensagem..." value={msgValue} onChange={handleInput} onKeyDown={handleKeyDown}  />
            <BtnMsgSend onClick={addMessageToList} />
            <BtnAudioSend />
          </ContainerWrite>

          </Chat> 

        </SectionChat>

        <aside>
          <Ads></Ads>
        </aside>
      </Main>
      </ErrorBoundary>
    </>
  );
}

export default App;
