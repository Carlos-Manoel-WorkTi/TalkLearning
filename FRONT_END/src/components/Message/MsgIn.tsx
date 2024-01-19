
import { BlocoIn, ContainerIn, LineBellow } from "./style";

interface prop {
  key?: number;
  rep:string;
}

export default function MsgIn({rep}:prop) {


    const date = new Date();
    const hourSalved = date.getHours();
    const minSalved = date.getMinutes();
  
  return (
    <BlocoIn>
      <ContainerIn>
        <span>{rep}</span>
        <LineBellow><span>{hourSalved+':'+ ( minSalved < 10 ? '0'+ minSalved : minSalved)}</span></LineBellow>
      </ContainerIn>
    </BlocoIn>
  ) 
}
