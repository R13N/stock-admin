import { Outlet } from "react-router-dom";
import { Container } from "./styles";
// import { Login } from "../../components/Login";

export function Home() {

  return (
    <Container>
      <h1>Instruções de uso do sistema:</h1>
      <section>
        <ol>
          <li>Nenhum produto pode ser cadastrado sem uma categoria.</li>
          <li>As entradas e retiradas são criadas e, só então, são adicionados os produtos.</li>
        </ol>
      </section>
      <Outlet />
    </Container>
  )
}