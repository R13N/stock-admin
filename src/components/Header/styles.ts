import styled from 'styled-components';

export const Container = styled.header`
  /* background: var(--gray-200); */
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: var(--header-height);
  padding: 0 7rem 0 2rem;
  /* background: var(--background-bars); */
  background: var(--gray-200);
  
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;

    > span {
      color: var(--primary);
      font-weight: bold;
      font-size: 1.5rem;
    }
  }

/* 
  a {
    color: var(--white);
  } */
`