import { Container, Friend, Opc } from "./style"
import { LeftCont, ConfigIcon, HelpIcon, HistoryIcon, IconWord, IconFriend, IconHomeWork, BtnBox } from "../../icons/icons"

interface NRP {
  visible: boolean;
}
export default function NavRight({visible}:NRP) {



  return (

      <Container visible={visible}>
        <Opc>
          <li> <Friend><img src="https://picsum.photos/50?random" alt="" /><h5>Miguel</h5></Friend> </li>
          <li>
            <a href="#"><IconFriend/>Amigos  <BtnBox/></a>
           
          </li>
          <li><a href="#"><IconWord/>Idioma</a></li>
          <li><a href="#"><IconHomeWork/>Exercicios</a></li>
          <li><a href="#"><HistoryIcon/>historias</a></li>   
          <li><a href="#"><ConfigIcon/> configurações</a></li>
          <li><a href="#"><LeftCont/> sair</a></li>
          <li><a href="#"><HelpIcon/> ajuda</a></li>
        </Opc>
      </Container>

  )
}
