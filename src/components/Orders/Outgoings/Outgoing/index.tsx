import { FiMoreVertical } from "react-icons/fi";
import { Container } from "./styles";

interface IOutgoingProps {
  id: string;
  type: string;
  destination: string
  created_at: string;
}

export function Outgoing({ id, destination, type, created_at }: IOutgoingProps) {

  // const [isEditCategoryModalOpen, setIsEditCategoryModalOpen] = useState(false);


  // function handleOpenEditCategoryModal() {
  //   setIsEditCategoryModalOpen(true);
  // }

  // function handleCloseEditCategoryModal() {
  //   setIsEditCategoryModalOpen(false);
  // }

  return (
    <Container>
      {/* <EditCategoryModal
        id={id}
        isOpen={isEditCategoryModalOpen}
        onRequestClose={handleCloseEditCategoryModal}
      /> */}
      <header>
        <span>{new Intl.DateTimeFormat('pt-BR').format(new Date(created_at))}</span>
        <span>{destination}</span>
      </header>
      <button
        // onClick={handleOpenEditCategoryModal}
      >
        <FiMoreVertical size={24}/>
      </button>
    </Container>
  )
}