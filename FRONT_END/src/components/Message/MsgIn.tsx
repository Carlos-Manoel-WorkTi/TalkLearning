
import { Trasnlate } from "../../icons/icons";
import { BlocoIn, ContainerIn, LineBellow, Line } from "./style";



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
        <Line>
           <Trasnlate/>
           <LineBellow><span>{hourSalved+':'+ ( minSalved < 10 ? '0'+ minSalved : minSalved)}</span></LineBellow>
        </Line>
       
      </ContainerIn>
    </BlocoIn>
  ) 
}
