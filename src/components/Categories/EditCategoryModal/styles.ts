import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem;

  border-radius: 0.25rem;
  
  background: var(--gray-200);
  color: #7A7A7A;
`

export const Form = styled.form`
  width: 500px;

  display: flex;
  flex-direction: column;
  
  > span {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: bold;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.75rem;
    margin-top: 1rem;

    border-radius: 0.25rem;
    border: none;

    background-color: var(--primary);
    color: var(--white);

    font-weight: 700;
    font-size: 1rem;

    > span {
      margin-right: 1rem;
    }
  }

`

export const Row = styled.div`
  display: grid;
  /* flex-direction: row; */
  grid-template-columns: 1fr 4fr;
  align-items: end;
  
  & + div {
    padding-top: 1.25rem;
  }
  
  & textarea,
  & input {
    /* margin-left: 1rem; */
    padding: 0.5rem 1rem;
    
    border: none;
    border-radius: 0.25rem;
    font-size: 1rem;
    width: 100%;
  }
`