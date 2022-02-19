
import { Incoming } from '../Incoming';
import { Container, Content } from './styles';

interface IIncomingProps {
  id: string;
  type: string;
  company: string;
  nf: string;
  created_at: string;
}

interface IIncomingsListProps {
  incomings: IIncomingProps[];
}

export function ListIncomings({incomings}: IIncomingsListProps) {
  
  return (
    <Container>
      <header>
        <span>Data</span>
        <span>Empresa</span>  
        <span>NF</span>  
      </header>
      <Content>
      {incomings? incomings.map(i => 
        <Incoming
          key={i.id}
          id={i.id}
          type={i.type}
          company={i.company}
          nf={i.nf}
          created_at={i.created_at}
        />
        ): <></>}
      </Content>
    </Container>
  )
}