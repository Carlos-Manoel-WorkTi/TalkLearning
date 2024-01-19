import { useEffect, useState } from 'react';
import { Main, SectionChat } from './styleApp.tsx';
import Header from './components/Header/Header.tsx';
import NavRight from './components/NavRight/NavRight.tsx';
import Chat from './components/chat/chat.tsx';
import Style_Global from './style/globalStyle.tsx';
import ContainerWriter from './components/area_to_write/Container_writer.tsx';
import Ads from './components/Publicidade/Publicidade.tsx';
import MsgIn from './components/Message/MsgIn.tsx';
import MsgOut from './components/Message/MsgOut.tsx';
import Api from './Api/api.tsx';


interface ListMsgInterface {
  msg: string;
  remetente: string;
}




function App() {

  const [msgsSalved, setSalveMsgs] = useState<ListMsgInterface[]>([]);

  function salveMsgs(message: ListMsgInterface) {
    setSalveMsgs((prevMsgs) => [...prevMsgs, message]);
  }
  
 // Busque dados no servidor
 const fetchDataAndSetState = async () => {
  try {
    // Chame a função fetchData e aguarde a Promise ser resolvida
    const data = await Api();
    
     setSalveMsgs([...msgsSalved,data])


  } catch (error) {
    // Lidar com erros, se houver
    console.error('Erro ao buscar dados:', error);
  }
};

  useEffect(() => {
    
    fetchDataAndSetState();
    
  }, []); 
  
  

  return (
    <>
      <Style_Global />
      <Header></Header>

      <Main>
        <NavRight />

        <SectionChat> 
          <Chat>

          {msgsSalved.map((ms, index) => {

              if(ms.remetente === 'user'){
                return  <MsgIn key={index} rep={ms.msg} />
              }else{
                return <MsgOut key={index} msg={ms.msg}/>               
              }
          })}
       
          </Chat> 

          <ContainerWriter getMsg={salveMsgs} />
        </SectionChat>

        <aside>
          <Ads></Ads>
        </aside>
      </Main>
    </>
  );
}

export default App;
