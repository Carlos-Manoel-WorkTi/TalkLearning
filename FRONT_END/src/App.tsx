
import {Main, SectionChat} from  './styleApp.tsx'
import Header from './components/Header/Header.tsx'
import NavRight from './components/NavRight/NavRight.tsx'
import Chat from './components/chat/chat.tsx'
import Style_Global from './style/globalStyle.tsx'
import Container_writer from './components/area_to_write/Container_writer.tsx'
import Ads from './components/Publicidade/Publicidade.tsx'
import MsgOut from './components/Message/MsgOut.tsx'
import MsgIn from './components/Message/MsgIn.tsx'

function App() {


  return (
    <>
    <Style_Global/>
       <Header>

       </Header>

       <Main>
          <NavRight/>

         <SectionChat>

            <Chat>
              <MsgOut/>
              <MsgIn/>
            </Chat>
           
            <Container_writer></Container_writer>

         </SectionChat>
         <aside>
          <Ads></Ads>
         </aside>
       </Main>

    </>
  )
}

export default App
