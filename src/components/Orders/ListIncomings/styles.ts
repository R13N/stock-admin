import styled from 'styled-components';

export const Container = styled.section`
  /* background: blue; */
  display: flex;
  flex-direction: column;

  > header {
    display: grid;
    grid-template-columns: 2fr 4fr;
    
    margin-top: 2rem;
    
    > span {
      color: #7A7A7A;
      font-weight: bold;
      font-size: 1rem;
    }
  }
`