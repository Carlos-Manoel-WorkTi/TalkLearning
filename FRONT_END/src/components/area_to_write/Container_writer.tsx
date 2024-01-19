import { ChangeEvent, useState } from 'react';
import { Container, InputC } from './style';
import { BtnIcons, BtnMsgSend, BtnAudioSend, BtnOther } from '../../icons/icons';

interface gotProp {
  getMsg: (message: ListMsgInterface) => void;
}

interface ListMsgInterface {
  msg: string;
  remetente: string;
}

export default function ContainerWriter({ getMsg }: gotProp) {
  const [msgIn, setMsgIn] = useState('');
  const [listaMessagens, setListMessagens] = useState<ListMsgInterface[]>([]);

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    setMsgIn(e.target.value);
  }

  function addMessageToList() {
    const newMessage = { msg: msgIn, remetente: 'user' };
    setListMessagens([...listaMessagens, newMessage]);
    setMsgIn('');

    getMsg(newMessage);
  }

  return (
    <Container>
      <BtnOther />
      <BtnIcons />
      <InputC placeholder="Digite sua mensagem..." value={msgIn} onChange={handleInput} />
      <BtnMsgSend onClick={addMessageToList} />
      <BtnAudioSend />
    </Container>
  );
}
