import { FormEvent, useState } from 'react';
import { FiSave } from 'react-icons/fi';
import Modal from 'react-modal';
import { api } from '../../../services/api';

import { Container, Form, Row } from './styles';

interface INewIncomingModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewIncomingModal({ isOpen, onRequestClose }: INewIncomingModalProps){

  const type = "entrada";
  const [nf, setNf] = useState('');
  const [company, setCompany] = useState('');

  async function submitFormData(event: FormEvent) {
    event.preventDefault();

    await api.post("/orders/neworder", {type, nf, company})
      .then(() => alert("Entrada criada com sucesso, agora preencha a lista de produtos."))
      .then(() => onRequestClose())
      .catch(error => alert(error.message))

    setNf('');
    setCompany('');
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
            <span>Nova Entrada</span>
            <Row>
              <label htmlFor="nf">Nota Fiscal</label>
              <input 
                type="text" 
                id='nf' 
                name='nf'
                onChange={event => setNf(event.target.value)}
                required
              />
            </Row>
            <Row>
              <label htmlFor="company">Empresa</label>
              <input
                type="text" 
                name="company" 
                id="company" 
                onChange={event => setCompany(event.target.value)}
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