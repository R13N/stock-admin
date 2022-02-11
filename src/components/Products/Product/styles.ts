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
    grid-template-columns: 2fr 4fr 2fr 2fr;
    gap: 4px;
    width: 100%;
  }

  > button {
    border: none;
    background: transparent;
    color: var(--primary);
  }
`