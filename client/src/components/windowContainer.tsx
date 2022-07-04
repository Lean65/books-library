import { useEffect, useState } from "react";
import Display from "./styles/display";
import Searchbar from "./searchbar";
import SideMenu from "./sideMenu";
import axios from "axios";

export default () => {
  const [books, SetBooks] = useState([]);
  useEffect(() => {
    axios(`http://localhost:3100/tenbooks`).then((r) => SetBooks(r.data));
  }, []);
  useEffect(() => {
    // console.log(books);
  });
  return (
    <div className="window-container">
      <Searchbar SetBooks={SetBooks} />
      <SideMenu SetBooks={SetBooks} />
      <Display SetBooks={SetBooks} books={books} />
    </div>
  );
};
