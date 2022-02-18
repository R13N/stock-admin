import { useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";
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

  const [productsList, setProductsList] = useState<IProductOrderProps[]>([]);
  
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
        <button>
          <FiChevronUp size={24}/>
        </button>
      </header>
      {productsList ? productsList.map(p => 
        <ProductOrder 
          key={p.id}
          id={p.id_product}
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
          />
          <input 
            type="number" 
            name="amount" 
            id="amount" 
            placeholder="Quantidade"
          />
        </div>
        <button>Adicionar</button>
      </Form>
    </Container>
  )
}