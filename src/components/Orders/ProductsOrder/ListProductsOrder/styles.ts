import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  background: #DCDCDC;
  padding: 0.5rem;
  border-top: 2px solid var(--primary);

  > header {
    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;

    > span {
      color: #7A7A7A;
      font-weight: bold;
    }

    > button {
      border: none;
      background: transparent;
      color: var(--primary);
      }
  }
`
export const Form = styled.form`
  display: flex;

  justify-content: space-between;
  margin-top: 0.5rem;
  
  > div {
    width: 50%;

    > input {
      padding: 0.25rem;
      font-size: 1rem;
      margin-right: 1rem;
    }
  }

`