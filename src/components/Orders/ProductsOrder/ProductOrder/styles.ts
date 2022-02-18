import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 10fr 5fr 1fr 1fr;
  gap: 0.25rem;

  padding: 0.5rem 0;

  border-bottom: 1px solid var(--primary);

  &:last-child {
    border: none;
  }

  > button {
    border: none;
    background: transparent;
    color: var(--primary);
    margin: 0;

    :hover {
      color: red;
    }
  }
`