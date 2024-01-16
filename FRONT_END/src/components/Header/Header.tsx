import { BtnSearch, BtnMenu, Dark, IconHome, IconChat } from "../../icons/icons"
import { Head, Rotas, Logo, Nav, Search, Perfil } from "./style"

export default function Header() {
  return (
  <Head>

    <Nav>
        <BtnMenu></BtnMenu>
        <Logo>
           <img src="/tele.svg" alt="" />TalkLearning
        </Logo>
         

        <Rotas>

            <Search>
              <input id="area-input" type="text" placeholder="Digite sua pesquisa..."/>
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
