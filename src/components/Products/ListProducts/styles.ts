import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  > header {
    display: grid;
    /* grid-template-columns: 6fr 16fr 4fr 3fr 1fr; */
    grid-template-columns: 4fr 10fr 4fr 2fr 1fr;
    width: calc(100% - 24px);
    margin-top: 2rem;
    
    text-align: start;

    > span {
      color: #7A7A7A;
      font-weight: bold;
      font-size: 1rem;
    }
  }
`