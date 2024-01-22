import { useState } from "react"
import { BtnSearch, BtnMenu, Dark, IconHome, IconChat, BtnClose } from "../../icons/icons"
import { Head, Rotas, Logo, Nav, Search, Perfil } from "./style"

type HeaderProps = {
  hideMenu: (status: boolean) => void
}

export default function Header({ hideMenu }: HeaderProps) {
  const [activeMenu,setActiveMenu] = useState(true)
  
  function handleMenu(){
    setActiveMenu(!activeMenu)
    hideMenu(activeMenu)
  }
  
  return (
  <Head>

    <Nav>

       { activeMenu ?  <BtnMenu status={true} onClick={handleMenu}></BtnMenu>:<BtnClose status={false} onClick={handleMenu}></BtnClose>  }
        <Logo>
           <img src="/tele.svg" alt="" />TalkLearning
        </Logo>
         

        <Rotas>

            <Search>
              <input id="area-input" type="text" placeholder="Tire suas duvidas..."/>
              <BtnSearch/>
            </Search>
            
            <li className="rota"><IconHome/></li>
            <li className="rota"><IconChat/></li>
            <li className="rota"><Dark/></li>
            <Perfil><img src="https://picsum.photos/50" alt="imagem do Perfil" /></Perfil>

        </Rotas>
     
    
    </Nav>
 
  </Head>
  )
}
