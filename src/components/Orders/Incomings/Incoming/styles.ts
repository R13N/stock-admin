import styled from 'styled-components';

export const Container = styled.div`
  
`

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  

  width: 100%;
  padding-top: 1rem;

  border-top: 1px solid var(--primary);

  &:last-child {
    border-bottom: 1px solid var(--primary);
  }

  > header {
    display: grid;
    grid-template-columns: 2fr 4fr 1fr;
    width: 100%;
  }

  > button {
    border: none;
    background: transparent;
    color: var(--primary);
  }


`