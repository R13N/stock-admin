import { FormEvent, useState } from 'react';
import { FiSave } from 'react-icons/fi';
import Modal from 'react-modal';
import { api } from '../../../../services/api';

import { Container, Form, Row } from './styles';

interface INewOutgoingModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewOutgoingModal({ isOpen, onRequestClose }: INewOutgoingModalProps){

  const type = "saida";
  const [destination, setDestination] = useState('');

  async function submitFormData(event: FormEvent) {
    event.preventDefault();

    await api.post("/orders/neworder", {type, destination})
      .then(() => alert("Retirada criada com sucesso, agora preencha a lista de produtos."))
      .then(() => onRequestClose())
      .catch(error => alert(error.message))

    setDestination('');
  }

  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName= 'react-modal-overlay'
      className= 'react-modal-content'
      ariaHideApp={false}
    >
        <Container>
          <Form onSubmit={submitFormData}>
            <span>Nova Retirada</span>
            <Row>
              <label htmlFor="destination">Recebedor</label>
              <input 
                type="text" 
                id='destination' 
                name='destination'
                onChange={event => setDestination(event.target.value)}
                required
              />
            </Row>
            <button>
              <span>Salvar</span>
              <FiSave size={20}/>
            </button>
          </Form>
        </Container>
    </Modal>
  )
}