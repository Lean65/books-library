import { MouseEventHandler, useEffect, useState } from "react";
import "./styles/detail.css";
import axios from "axios";

interface props {
  isOpen: boolean;
  CloseModal: MouseEventHandler;
  Book: any;
  isEdit: Boolean;
}

export default ({ isOpen, CloseModal, Book, isEdit }: props) => {
  const [form, SetForm] = useState({
    _id: Book?._id,
    ISBN: "",
    BookTitle: "",
    BookAuthor: "",
    YearOfPublication: "",
    Publisher: "",
  });

  const Close = (e: any) => {
    e.preventDefault();
    CloseModal(e);
  };

  useEffect(() => {
    if (Book) {
      SetForm({
        _id: Book?._id,
        ISBN: Book.ISBN,
        BookTitle: Book.BookTitle,
        BookAuthor: Book.BookAuthor,
        YearOfPublication: Book.YearOfPublication,
        Publisher: Book.Publisher,
      });
    }
  }, []);

  return (
    <div className={`modal ${isOpen && "is-open"}`} onClick={(e) => Close(e)}>
      <div className="container" onClick={(e) => e.stopPropagation()}>
        <button className="boton" onClick={(e) => Close(e)}>
          X
        </button>
        <h1>Datos del libro</h1>
        <p>
          <label>ISBN: </label>
          {!isEdit ? (
            <input
              type="text"
              onChange={(e) => SetForm({ ...form, ISBN: e.target.value })}
              value={form.ISBN}
            />
          ) : (
            <span>{form.ISBN}</span>
          )}
        </p>

        <p>
          <label htmlFor="">Titulo</label>
          <input
            type="text"
            onChange={(e) => SetForm({ ...form, BookTitle: e.target.value })}
            value={form.BookTitle}
          />
        </p>

        <p>
          <label htmlFor="">Autor</label>
          <input
            type="text"
            onChange={(e) => SetForm({ ...form, BookAuthor: e.target.value })}
            value={form.BookAuthor}
          />
        </p>

        <p>
          <label htmlFor="">Año de publicacion</label>
          <input
            type="text"
            onChange={(e) =>
              SetForm({ ...form, YearOfPublication: e.target.value })
            }
            value={form.YearOfPublication}
          />
        </p>

        <p>
          <label htmlFor="">Editor</label>
          <input
            type="text"
            onChange={(e) => SetForm({ ...form, Publisher: e.target.value })}
            value={form.Publisher}
          />
        </p>

        <p>
          <button
            onClick={(e) => {
              e.preventDefault();
              const url = Object.entries(form)
                .map((e) => e.join("="))
                .join("&");
              if (isEdit)
                axios
                  .put(`http://localhost:3100/editbook?${url}`)
                  .then(() =>
                    alert(
                      "Informacion actualizada. Los cambios tomaran efecto a partir de la proxima busqueda."
                    )
                  );
              else
                axios
                  .post(`http://localhost:3100/addbook?${url}`)
                  .then((r) => alert(r.data));
            }}
          >
            Guardar
          </button>
          <button
            onClick={(e) =>
              SetForm({
                _id: Book?._id,
                ISBN: "",
                BookTitle: "",
                BookAuthor: "",
                YearOfPublication: "",
                Publisher: "",
              })
            }
          >
            Borrar
          </button>
        </p>
      </div>
    </div>
  );
};
