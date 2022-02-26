import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: var(--header-height);

  padding: 2rem 7rem 13rem 7rem;
  width: calc(100% - var(--side-bar-width)); 
`

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* background: green; */
  padding: 1rem 0 0;

  position: relative;
  h2 {
    color: #7A7A7A;
    font-weight: bold;
    font-size: 1.5rem;
  }

  > button {
    background: transparent;
    border: none;
    color: #7A7A7A;
    font-weight: bold;
    font-size: 1.5rem;
  }

  > input {
    width: 300px;
    padding: 0.5rem;
    border-radius: 0.25rem;
    font-size: 1rem;
  }

  > span {
    position: absolute;
    right: 1rem;
    top: 1.5rem;
    color: #7A7A7A;
  }
`