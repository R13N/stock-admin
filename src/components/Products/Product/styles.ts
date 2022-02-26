import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  padding-top: 0.5rem;

  border-top: 1px solid var(--primary);

  &:last-child {
    border-bottom: 1px solid var(--primary);
  }

  > header {
    display: grid;
    grid-template-columns: 4fr 10fr 4fr 1fr 1fr;
    gap: 0.5rem;
    width: 100%;
    margin: 0 1rem 0.5rem 0;

    /* span {
      border-right:1px solid var(--primary);
      background: red;
    } */

    span:last-child {
      text-align: end;
    }
  }

  > form {
    display: grid;
    grid-template-columns: 4fr 10fr 4fr 2fr 1fr;
    gap: 0.5rem;
    margin-right: 1rem;

    > input {
      padding: 0.5rem 1rem;
      margin: 0 1rem 0.5rem 0;
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

  button {
    border: none;
    background: transparent;
    color: var(--primary);
  }
`