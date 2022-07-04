import { useEffect } from "react";
import Card from "../card";
import "./display.css";

export default (params: any) => {
  const f = () => {
    try {
      return params.books?.map((e: any) => (
        <Card
          SetBooks={params.SetBooks}
          books={params.books}
          book={e}
          key={e._id}
        />
      ));
    } catch (error) {
      console.log(error);
    }
  };
  return <div className="display-holder">{f()}</div>;
};
