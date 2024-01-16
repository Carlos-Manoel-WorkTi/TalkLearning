import { Container, Opc } from "./style"
import { LeftCont, ConfigIcon, HelpIcon, HistoryIcon, IconWord, IconFriend, IconHomeWork } from "../../icons/icons"

export default function NavRight() {
  return (

      <Container>
        <Opc>
          <li><a href="#"><IconWord/>Idioma</a></li>
          <li><a href="#"><IconFriend/>Amigos</a></li>
          <li><a href="#"><IconHomeWork/>Exercicios</a></li>
          <li><a href="#"><HistoryIcon/>historias</a></li>   
          <li><a href="#"><ConfigIcon/> configurações</a></li>
          <li><a href="#"><LeftCont/> sair</a></li>
          <li><a href="#"><HelpIcon/> ajuda</a></li>
        </Opc>
      </Container>

  )
}
