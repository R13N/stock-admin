import styled from 'styled-components';

export const Container = styled.div`
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
    width: 100%;
    > div {
      display: grid;
      grid-template-columns: 2fr 4fr;
      width: 100%;
    }

    > form {
      display: grid;
      grid-template-columns: 3fr 5fr 1fr;

      /* width: calc(100% - 24px); */

      > input {
        padding: 0.5rem 1rem;
        margin: 0 1rem 0.5rem 0;
        border-radius: 0.25rem;
        border: none;

        background: #DCDCDC;
        font-size: 1rem;

        &:last-child {
          width: 100%;
        }
      }
    }
  }

  button {
    border: none;
    background: transparent;
    color: var(--primary);
  }
`