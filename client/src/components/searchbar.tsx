import { useState } from "react";
import "./styles/searchbar.css";
import axios from "axios";
import Modal from "../modals/form";
import { useModal } from "../modals/usemodal";

export default (params: any) => {
  const val: HTMLInputElement = document.getElementById(
    "search-input"
  ) as HTMLInputElement;
  const { isOpen, OpenModal, CloseModal } = useModal(false);

  const [form, SetForm] = useState({
    searchField: "BookTitle",
    value: "",
  });

  return (
    <>
      <Modal
        isOpen={isOpen}
        CloseModal={CloseModal}
        Book={null}
        isEdit={false}
      />
      <form className="holder">
        <select
          onChange={(e) => SetForm({ ...form, searchField: e.target.value })}
        >
          <option value="BookTitle">Titulo</option>
          <option value="BookAuthor">Autor</option>
          <option value="YearOfPublication">Año de publicacion</option>
          <option value="Publisher">Editorial</option>
        </select>

        {/* Change the input field depending on the state
    possible outcomes: DISABLED, INPUT:TEXT, INPUT:NUMBER */}
        {form.searchField === "all" ? (
          <input type="text" id="search-input" disabled />
        ) : form.searchField === "year" ? (
          <input type="number" id="search-input" value={form.value} />
        ) : (
          <input
            type="text"
            id="search-input"
            value={form.value}
            onChange={(e: any) => {
              SetForm({ ...form, value: e.target.form[1].value });
            }}
          />
        )}

        <input
          type="button"
          value="BUSCAR"
          onClick={(e) => {
            e.preventDefault();
            axios(
              `http://localhost:3100/search?searchField=${form.searchField}&value=${form.value}`
            ).then((r) => {
              params.SetBooks(r.data);
            });
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            OpenModal();
          }}
        >
          Agregar libro
        </button>
      </form>
    </>
  );
};
