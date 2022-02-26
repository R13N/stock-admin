import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { Wrapper } from './components/Wrapper';

import { GlobalStyle, Main } from './styles/global';
import { AuthProvider } from './context/AuthProvider';

function App() {

  return (
    <AuthProvider>
      <GlobalStyle />
      <Header />
      <Main>
        <SideBar />
        <Wrapper />
      </Main>
    </AuthProvider>
  );
  
}

export default App;
