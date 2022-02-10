// import { useState } from "react";
import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

interface IHeaderProps {
  title: string;
  buttonTitle: string;
}

export function HeaderMain({title, buttonTitle}: IHeaderProps) {

  return(
    <Container>
      <h2>{title}</h2>
      <button>{buttonTitle}</button>
      <input 
        type="search" 
        name="search" 
        id="search"
        placeholder="Pesquisar"
      />
      <span>
        <FiSearch size={24}/>
      </span>
    </Container>
  )
}