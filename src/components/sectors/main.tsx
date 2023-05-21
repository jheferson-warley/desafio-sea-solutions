import { Input, Button } from "antd";
import imagemSetores from "./imagemSetores.svg";
import {StyledMain} from './styled';


export function Main(){
  return(
    <StyledMain>
    <main>
        <div className="header">
          <div className="header-logo">
            <img
              className="img-logo"
              src={imagemSetores}
              alt="imagem ilustrativa"
            />
            <p>Setores</p>
          </div>
        </div>

        <section className="mainSection">
          <div className="sectors">
            <h1>Setores</h1>
          </div>
          <div className="addSector">
            <h1>Adicionar Setor</h1>

            <p>Nome:</p>
            <Input placeholder=" Nome do Setor" />
            <div className="cargos">
              <p>Cargo(s):</p>
              <Input placeholder=" Nome do Setor" />
              <Button type="primary">adicionar</Button>
            </div>
            <Button type="primary">Salvar</Button>
          </div>
        </section>
      </main>
      </StyledMain>
  )
}

