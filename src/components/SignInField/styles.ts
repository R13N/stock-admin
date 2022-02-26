import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  span {
    color: var(--primary);
    font-weight: bold;
    font-size: 1rem;
    margin-right: 1rem;
  }

  form {

    display: flex;
    margin-right: 1rem;

    > input {
      margin-left: 1rem;
      padding: 0.25rem 1rem;
      
      border: none;
      border-radius: 0.125rem;
      font-size: 1rem;
      width: 100%;
    }
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  
  border: none;
  background: var(--gray);
  color: var(--white);
  font-weight: bold;

  padding: 0.25rem 1rem;
  border-radius: 0.25rem;

  
  svg {
    height: 24px;
    width: 24px;
    /* border-radius: 0.25rem; */
    
    margin-left: 0.5rem;
    /* background: var(--white); */
    /* color: var(--yellow); */
  }
`