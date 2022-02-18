import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Outlet } from "react-router-dom";
import { ListOutgoings } from "../../components/Orders/Outgoings/ListOutgoings";
import { NewOutgoingModal } from "../../components/Orders/Outgoings/NewOutgoingModal";
import { api } from "../../services/api";
import { Header } from "./styles";

interface IOutgoingsProps {
  id: string;
  type: "saida";
  destination: string;
  created_at: string;
}

export function Outgoings() {

  const [outgoings, setOutgoings] = useState<IOutgoingsProps[]>([]);
  const [filteredOutgoings, setFilteredOutgoings] = useState<IOutgoingsProps[]>([]);
  const [filterValue, setFilterValue] = useState('');

  const [isNewOutgoingModalOpen, setIsNewOutgoingModalOpen] = useState(false);


  function handleOpenNewOutgoingModal() {
    setIsNewOutgoingModalOpen(true);
  }

  function handleCloseNewOutgoingModal() {
    setIsNewOutgoingModalOpen(false);
    updateList();
  }

  function handleFilteringOutgoings(event: React.ChangeEvent<HTMLInputElement>) {
    setFilterValue(event.target.value);
    const newFilter = outgoings.filter(value => {
      return (
        value.destination.toLowerCase().includes(filterValue.toLowerCase())
      )
    })
    setFilteredOutgoings(newFilter);
  }

  async function updateList() {
    await api.get("/orders/filter", { params: {"type": "saida"}})
    .then(response => setOutgoings(response.data))
    // .then(response => console.log(response))
  }
  // console.log(outgoings)

  useEffect(() => {
    if(filterValue === ""){
      setFilteredOutgoings(outgoings);
    }
  }, [filterValue, outgoings])

  useEffect(() => {
    updateList();
  }, [])

  return (
    <>
      <NewOutgoingModal 
        isOpen={isNewOutgoingModalOpen}
        onRequestClose={handleCloseNewOutgoingModal}
      />
      <Header>
        <h2>Listar Retiradas</h2>
        <button
          onClick={handleOpenNewOutgoingModal}
        >
          Cadastrar Nova Retirada
        </button>
        <input 
          type="text" 
          name="search" 
          id="search"
          placeholder="Pesquisar"
          value={filterValue}
          onChange={handleFilteringOutgoings}
        />
        <span>
          <FiSearch size={24}/>
        </span>
      </Header>
      <ListOutgoings outgoings={filteredOutgoings}/>
      <Outlet />
    </>
  )
}