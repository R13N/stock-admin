import MainRoutes from './routes';

import { Header } from './components/Header';
import { SideBar } from './components/SideBar';

import { GlobalStyle, Main, Wrapper } from './styles/global';

function App() {
  return (
      <>
        <GlobalStyle />
        <Header />
        <Main>
          <SideBar />
          <Wrapper>
            <MainRoutes />
          </Wrapper>
        </Main>
      </>
  );
}

export default App;
