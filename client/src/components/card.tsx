import "./styles/card.css";
import DetailModal from "../modals/detail";
import FormModal from "../modals/form";
import { useModal } from "../modals/usemodal";
import axios from "axios";

export default (params: any) => {
  const { isOpen, OpenModal, CloseModal } = useModal(false);
  const { isOpen: i2, OpenModal: o2, CloseModal: c2 } = useModal(false);
  return (
    <>
      <DetailModal isOpen={isOpen} CloseModal={CloseModal} Book={params.book} />
      <FormModal isOpen={i2} CloseModal={c2} Book={params.book} isEdit={true} />
      <div
        className="bookscard"
        onClick={(e) => {
          e.preventDefault();
          OpenModal();
        }}
      >
        <p>{params.book.BookTitle.toLowerCase()}</p>
        <p>Author: {params.book.BookAuthor}</p>
        <p>Year: {params.book.YearOfPublication}</p>
        <p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              o2();
            }}
          >
            Editar
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              // alert("falta implementar");
              axios
                .delete(`http://localhost:3100/delbook?id=${params.book._id}`)
                .then((r) => {
                  alert(
                    "Registro borrado. La lista se actualizara en la proxima busqueda."
                  );
                });
            }}
          >
            Borrar
          </button>
        </p>
      </div>
    </>
  );
};
