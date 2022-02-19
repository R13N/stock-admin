import { FiEdit } from "react-icons/fi";
import { ListProductsOrder } from "../../ProductsOrder/ListProductsOrder";
import { Container, Content } from "./styles";

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
      <Content>
        <header>
          <span>{new Intl.DateTimeFormat('pt-BR').format(new Date(created_at))}</span>
          <span>{company}</span>
          <span>{nf}</span>
        </header>
        <button
          // onClick={handleOpenEditCategoryModal}
          >
          <FiEdit size={24}/>
        </button>
      </Content>
      <ListProductsOrder
        id={id}
      />
    </Container>
  )
}