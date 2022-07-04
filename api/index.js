const express = require("express");
const server = express();
const { connect } = require("./db");
const Books = require("./db/schemas/books");

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

(async () => {
  await connect();
  const PORT = 3100;
  server.listen(PORT, () => {
    console.log(`listening in port: ${PORT}`);
  });
})();

server.get("/tenbooks", (req, res) => {
  try {
    Books.find({})
      .limit(10)
      .then((r) => res.send(r));
  } catch (error) {
    res.send(error);
  }
});

server.post("/addbook", (req, res) => {
  try {
    Books.findOne({ ISBN: req.query.ISBN }).then((r) => {
      if (!r) {
        Books.create({
          BookTitle: req.query.BookTitle,
          BookAuthor: req.query.BookAuthor,
          ISBN: req.query.ISBN,
          Publisher: req.query.Publisher,
          YearOfPublication: req.query.YearOfPublication,
        });
        res.send("Libro agregado");
      } else res.send("El libro ya existe en la base de datos");
    });
  } catch (error) {
    res.send(error);
  }
});

server.put("/editbook", (req, res) => {
  Books.findByIdAndUpdate(req.query._id, {
    ISBN: req.query.ISBN,
    BookTitle: req.query.BookTitle,
    BookAuthor: req.query.BookAuthor,
    YearOfPublication: req.query.YearOfPublication,
    Publisher: req.query.Publisher,
  }).then(() => res.send("Libro actualizado"));
});

server.delete("/delbook", (req, res) => {
  //{ id: '62c1e7fbd9405bcf28ee345b' }
  Books.findByIdAndDelete(req.query.id).then(() => res.send(req.query.id));
});

server.get("/search", (req, res) => {
  //Mark P. O. Morford
  //Mark
  //{ searchField: 'BookAuthor', value: 'Mark' }
  try {
    Books.find({})
      .where(req.query.searchField)
      .regex(req.query.value)
      .then((r) => {
        res.send(r);
      });
  } catch (error) {
    res.send(error);
  }
});

server.get("/test", (req, res) => {
  // console.log(req.query);
  res.send("ok");
});
