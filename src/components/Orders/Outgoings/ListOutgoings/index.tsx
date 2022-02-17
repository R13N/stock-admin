
import { Outgoing } from '../Outgoing';
import { Container } from './styles';

interface IOutgoingProps {
  id: string;
  type: string;
  destination: string;
  created_at: string;
}

interface IOutgoingsListProps {
  outgoings: IOutgoingProps[];
}

export function ListOutgoings({outgoings}: IOutgoingsListProps) {
  
  return (
    <Container>
      <header>
        <span>Data</span>
        <span>Recebeu</span>  
      </header>
      {outgoings ? outgoings.map(i => 
        <Outgoing
          key={i.id}
          id={i.id}
          type={i.type}
          destination={i.destination}
          created_at={i.created_at}
        />
      ): <></>}
    </Container>
  )
}