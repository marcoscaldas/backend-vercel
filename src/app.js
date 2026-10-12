const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mensagem: "API Desvendando o Código!" });
});

app.get("/api/produtos", (req, res) => {
  res.json([
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Mouse", preco: 80 },
    { id: 3, nome: "Teclado", preco: 150 }
  ]);
});

module.exports = app;

