import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #F2F3F5;
    --background-bars: #31353E;
    --primary: #006066;
    --white: #FFFFFF;
    --gray: #666666;
    --gray-200: #D7D7D7;
    --yellow: #fff200;

    --side-bar-width: 9rem;
    --header-height: 3rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }
    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  body {
    background: var(--white);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  .react-modal-overlay {
    background: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  height: 92vh;
  position: relative;
`
