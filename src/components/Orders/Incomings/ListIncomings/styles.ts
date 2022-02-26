import styled from 'styled-components';

export const Container = styled.section`
  /* background: blue; */
  display: flex;
  flex-direction: column;

  > header {
    display: grid;
    grid-template-columns: 2fr 4fr 1fr 1fr;
    /* width: calc(100% - 48px); */
    /* width: 100%; */
    margin-top: 2rem;
    
    > span {
      color: #7A7A7A;
      font-weight: bold;
      font-size: 1rem;
    }
  }
`

export const Content = styled.div`
  /* overflow-y: scroll; */
  /* height: 100%; */
`