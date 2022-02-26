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
    
    display: flex;
    width: 100%;
    
    > div {
      display: grid;
      grid-template-columns: 2fr 4fr 1fr;
      width: 100%;
    }

    > form {
      display: grid;
      grid-template-columns: 2fr 4fr 1fr;
      gap: 0.5rem;
      width: 100%;
      margin-right: 1rem;

      align-items: center;

      > span {
        bottom: 0;
        /* text-align: right; */
        margin-right: 0.5rem;

      }
  
      > input {
        padding: 0.5rem 1rem;
        margin: 0.25rem 1rem 0.25rem 0;
        border-radius: 0.25rem;
        border: none;
        
        background: #DCDCDC;
        font-size: 1rem;
        width: 100%;
        
        &[type="number"] {
          text-align: right;
          padding-right: 0;
        }
      }
    }

  }

  
  button {
    border: none;
    background: transparent;
    color: var(--primary);
    
  }
  
  & :last-child {
    margin-left: 0.5rem;
  }
`