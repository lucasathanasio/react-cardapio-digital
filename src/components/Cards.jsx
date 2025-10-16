//digite rafce para criar uma estrutura de arrow function (atalho)

import Card from "./Card";

// "Banco de dados" dos itens cardápio
import { pratosPrincipais, sobremesas, bebidas } from "../assets/cardapio";

const Cards = ({ numCategoriaSelecionada = { numCategoriaSelecionada } }) => {
  const itensCategoria = [pratosPrincipais, sobremesas, bebidas];
  const categoriaSelecionada = itensCategoria[numCategoriaSelecionada];

  return (
    <div className="cards">
      {categoriaSelecionada.map((item) => (
        <Card
          titulo={item.nome}
          descricao={item.descricao}
          preco={item.preco}
          imagem={item.imagem}
        />
      ))}
    </div>
  );
};

export default Cards;
