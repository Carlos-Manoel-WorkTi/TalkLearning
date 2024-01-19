import { ContainerOut, LineBellow } from "./style";

interface prop {
   key?: number;
   msg?:string;
 }

export default function MsgOut({msg}:prop) {

   const date = new Date();
   const hourSalved = date.getHours();
   const minSalved = date.getMinutes();

  return (
     <ContainerOut>
        <span>{msg}</span>
        <LineBellow><span>{hourSalved+':'+ ( minSalved < 10 ? '0'+ minSalved : minSalved)}</span></LineBellow>
     </ContainerOut>
  )
}
