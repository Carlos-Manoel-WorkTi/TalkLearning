import { BlocoOut, ContainerOut, LineBellow } from "./style";

interface prop {
   key?: number;
   msg?:string;
   idMsg?:string;
 }

export default function MsgOut({msg,idMsg}:prop) {

   const date = new Date();
   const hourSalved = date.getHours();
   const minSalved = date.getMinutes();

  return (
   <BlocoOut>
      <ContainerOut id={`${idMsg}`}>
        <span>{msg}</span>
        <LineBellow><span>{hourSalved+':'+ ( minSalved < 10 ? '0'+ minSalved : minSalved)}</span></LineBellow>
      </ContainerOut>
   </BlocoOut>
    
  )
}
