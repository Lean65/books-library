import { MouseEventHandler } from "react";
import "./styles/detail.css";

interface props {
  isOpen: boolean;
  CloseModal: MouseEventHandler;
  Book: any;
}

export default ({ isOpen, CloseModal, Book }: props) => {
  return (
    <div className={`modal ${isOpen && "is-open"}`} onClick={CloseModal}>
      <div className="container" onClick={(e) => e.stopPropagation()}>
        <button className="boton" onClick={CloseModal}>
          X
        </button>
        <h1>Datos del libro</h1>
        <p>{Book?.BookTitle || "Titulo"}</p>
        <p>Autor: {Book?.BookAuthor || "Autor"}</p>
        <p>
          Año de publicacion: {Book?.YearOfPublication || "Año de publicacion"}
        </p>
        <p>Editor: {Book?.Publisher || "Editor"}</p>
      </div>
    </div>
  );
};
