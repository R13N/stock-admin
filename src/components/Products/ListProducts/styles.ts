import styled from 'styled-components';

export const Container = styled.section`
  /* background: blue; */
  display: flex;
  flex-direction: column;

  > header {
    display: grid;
    grid-template-columns: 2fr 4fr 2fr 2fr;
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