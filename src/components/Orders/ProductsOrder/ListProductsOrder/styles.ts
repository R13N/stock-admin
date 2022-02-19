import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  padding: 0.5rem;

  background: #DCDCDC;
  border-top: 2px solid var(--primary);

  > header {

    display: grid;
    grid-template-columns: 3fr 10fr 5fr 1fr 1fr;
    gap: 0.25rem;
    padding: 0.5rem 0;

    > span {
      color: #7A7A7A;
      font-weight: bold;
    }

  }

  button {
    border: none;
    background: transparent;
    color: var(--primary);
  }
`
export const Form = styled.form`
  display: flex;
  margin-top: 0.5rem;
  
  > div {
    display: flex;
    /* width: 50%; */
    flex-direction: row;

    > input {
      padding: 0.25rem;
      font-size: 1rem;
      margin-right: 1rem;
      border: none;
    }
  }

`