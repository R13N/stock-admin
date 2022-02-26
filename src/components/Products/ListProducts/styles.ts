import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  > header {
    display: grid;
    grid-template-columns: 4fr 10fr 4fr 1fr 1fr;
    gap: 0.5rem;
    margin-top: 2rem;    
    width: calc(100% - 32px);
    text-align: start;

    > span {
      color: #7A7A7A;
      font-weight: bold;
      font-size: 1rem;
    }
  }
`