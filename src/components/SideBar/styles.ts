import styled from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  top: var(--header-height);
  left: 0;
  bottom: 0;
  background: var(--gray-200);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: var(--side-bar-width);
  
  & > div {

    margin-top: 2rem;
    
    > nav {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      a {
  
        margin-top: 1rem;
  
        &.active {
          font-weight: bold;
          color: var(--primary);
        }
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
  padding: 1rem 0 0.5rem;
`