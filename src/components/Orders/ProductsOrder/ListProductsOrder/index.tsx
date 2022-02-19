import { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp, FiSave } from "react-icons/fi";
import { api } from "../../../../services/api";
import { ProductOrder } from "../ProductOrder";

import { Container, Form } from './styles';

interface IProductOrderProps {
  id: string;
  id_product: string;
  id_order: string;
  amount: number;
}

interface IListProductsOrderProps {
  id: string; //id_order
}

export function ListProductsOrder({id}:IListProductsOrderProps) {

  const [productName, setProductName] = useState('');
  const [productAmount, setProductAmount] = useState(0);

  const [productsList, setProductsList] = useState<IProductOrderProps[]>([]);
  const [isActive, setIsActive] = useState(false);

  function toggleIsActive() {
    setIsActive(!isActive);
  }

  function onSubmitNewProductOrder() {
    api.post(`/orders/newproduct/${id}`, {id, "product_name": productName, "amount": productAmount})
      .then(() => alert("Produto adicionado com sucesso!"))
      .then(() => window.location.reload())
  }
  
  useEffect(() => {
    api.get(`/orders/${id}`)
    .then(response => setProductsList(response.data.productsList))
  },[id])

  return (
    <Container>
      <header>
        <span>Nome</span>
        <span>Descrição</span>
        <span>Unidade</span>
        <span>Quant.</span>

        <button
          onClick={toggleIsActive}
        >
          {isActive ? <FiChevronUp size={24}/> : <FiChevronDown size={24}/>}
        </button>

      </header>
      {productsList && isActive ? productsList.map(p => 
        <ProductOrder 
          key={p.id}
          productorder_id={p.id}
          product_id={p.id_product}
          amount={p.amount}
        />
      ): <></>}
      <Form>
        <div>
          <input 
            type="text" 
            name="product_name" 
            id="product_name" 
            placeholder="Nome do produto"
            onChange={e => setProductName(e.target.value)}
          />
          <input 
            type="number" 
            name="amount" 
            id="amount" 
            placeholder="Quantidade"
            onChange={e => setProductAmount(Number(e.target.value))}
          />
        </div>
        <button
          onClick={onSubmitNewProductOrder}
        >
          <FiSave size={24}/>
        </button>
      </Form>
    </Container>
  )
}