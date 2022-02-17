import { FiMoreVertical } from "react-icons/fi";
import { Container } from "./styles";

interface IIncomingProps {
  id: string;
  type: string;
  company: string;
  nf: string;
  created_at: string;
}

export function Incoming({ id, company, nf, type, created_at }: IIncomingProps) {

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
        <span>{company}</span>
        <span>{nf}</span>
      </header>
      <button
        // onClick={handleOpenEditCategoryModal}
      >
        <FiMoreVertical size={24}/>
      </button>
    </Container>
  )
}