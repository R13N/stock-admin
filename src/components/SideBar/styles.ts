import styled from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: #DCDCDC;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 13rem;

  & > nav {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;

    a {

      margin-top: 1rem;

      &.active {
        font-weight: bold;
        color: var(--primary);
      }
    }


    link {
      color: red;
    }
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #7A7A7A;
  font-size: 0.7rem;
  padding: 1rem;
`