import { Container } from "./style"
import InputChat from "../area_to_write/input/input";
import { BtnIcons, BtnMsgSend, BtnAudioSend, BtnOther } from "../../icons/icons";


export default function Container_writer() {
  return (
  <Container>
      <BtnOther/>
       <BtnIcons/>
       <InputChat></InputChat>
       <BtnMsgSend/>
       <BtnAudioSend/>
  </Container>
  )
}
