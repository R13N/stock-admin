import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: var(--header-height);

  padding: 2rem 7rem 13rem 7rem;
  width: calc(100% - var(--side-bar-width)); 
`