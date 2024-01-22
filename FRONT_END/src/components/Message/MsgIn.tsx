
import { BlocoIn, ContainerIn, LineBellow } from "./style";

interface prop {
  key?: number;
  rep:string;
  idMsg?:string;
}

export default function MsgIn({rep,idMsg}:prop) {


    const date = new Date();
    const hourSalved = date.getHours();
    const minSalved = date.getMinutes();
  
  return (
    <BlocoIn >
      <ContainerIn id={`${idMsg}`}>
        <span>{rep}</span>
        <LineBellow><span>{hourSalved+':'+ ( minSalved < 10 ? '0'+ minSalved : minSalved)}</span></LineBellow>
      </ContainerIn>
    </BlocoIn>
  ) 
}
