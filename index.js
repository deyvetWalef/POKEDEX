const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const pokedex = [
  {
    id: 1,
    nome: "Charmander",
    tipo: "Fogo",
    imagem:
      "https://www.nicepng.com/png/detail/278-2789894_pokemon-charmander-vector.png",
    descricao:
      "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.",
    altura: "0.6m",
    peso: "8.5kg",
    categoria: "Lagarto",
    habilidade: "Cuspir Fogo",
  },
  {
    id: 2,
    nome: "BULBASAURO",
    tipo: "Grama",
    imagem:
      "https://www.nicepng.com/png/detail/99-991833_bulbasaur-png-pic-bulbasaur-png.png",
    descricao:
      "Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.",
    altura: "0.7m",
    peso: "6.9kg",
    categoria: "Semente",
    habilidade: "Superar",
  },
  {
    id: 3,
    nome: "SQUIRTLE",
    tipo: "Água",
    imagem:
      "https://www.nicepng.com/png/detail/147-1474808_squirtle-free-png-image-pokemon-turtle.png",
    descricao:
      "Quando retrai seu longo pescoço em sua concha, esguicha água com força vigorosa.",
    altura: "0.5m",
    peso: "9.0kg",
    categoria: "Tartaruga",
    habilidade: "Corrente de água",
  },
];

//ROTAS:
app.get("/", (req, res) => {
  res.render("index", { pokedex });
});

app.listen(3000, () =>
  console.log("Servidor rodando em https://localhost :3000")
);
