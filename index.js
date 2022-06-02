const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const pokedex = [
  {
    id: 1,
    nome: "CHARMANDER",
    tipo: "Fogo",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    descricao:
      "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.",
    altura: "0.6",
    peso: "8.5",
    categoria: "Lagarto",
    habilidade: "Cuspir Fogo",
  },
  {
    id: 2,
    nome: "BULBASAURO",
    tipo: "Grama",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    descricao:
      "Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.",
    altura: "0.7",
    peso: "6.9",
    categoria: "Semente",
    habilidade: "Superar",
  },
  {
    id: 3,
    nome: "SQUIRTLE",
    tipo: "Água",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    descricao:
      "Quando retrai seu longo pescoço em sua concha, esguicha água com força vigorosa.",
    altura: "0.5",
    peso: "9.0",
    categoria: "Tartaruga",
    habilidade: "Corrente de água",
  },
];

//ROTAS:
app.get("/", (req, res) => {
  res.render("index", { pokedex });
});

app.post("/add", (req, res) => {
  const pokemon = req.body;

  pokedex.push(pokemon);
  console.log(pokemon);

  res.redirect("/");
});

app.listen(3000, () =>
  console.log("Servidor rodando em https://localhost :3000")
);
