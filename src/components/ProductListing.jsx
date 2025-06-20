import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router";

import LojaProduto1 from '../../public/produtos/tenis-nike.png';
import LojaProduto2 from '../../public/produtos/tenis-kswis.png';
import LojaProduto3 from '../../public/produtos/tenis-adidas.png';
import LojaProduto4 from '../../public/produtos/tenis-air-jordan.png';
import LojaProduto5 from '../../public/produtos/tenis-own-the-game.png';
import LojaProduto6 from '../../public/produtos/tenis-puma.png';
import LojaProduto7 from '../../public/produtos/tenis-nike-feminino.png';
import LojaProduto8 from '../../public/produtos/tenis-kswis-speedster.png';
const LojaProdutos = [
  {id: 1, imagem: LojaProduto1, nome: "Nike Air Force One", marca: "Nike", 
    genero: "Masculino", categoria: "Casual", desconto: 40, preco: 320, precoatual: 192},
  {id: 2, imagem: LojaProduto2, nome: "K-Swiss V8", marca: "K-Swiss", 
    genero: "Masculino", categoria: "Tênis", desconto: 50, preco: 400, precoatual: 200},
  {id: 3, imagem: LojaProduto3, nome: "Adidas Tensaur Run", marca: "Adidas", 
    genero: "Masculino", categoria: "Utilitário", desconto: 10, preco: 200, precoatual: 180},
  {id: 4, imagem: LojaProduto4, nome: "Nike Air Jordan", marca: "Nike", 
    genero: "Masculino", categoria: "Corrida", desconto: 25, preco: 800, precoatual: 600},
  {id: 5, imagem: LojaProduto5, nome: "Adidas Own The Game", marca: "Adidas", 
    genero: "Masculino", categoria: "Corrida", desconto: 25, preco: 700, precoatual: 525},
  {id: 6, imagem: LojaProduto6, nome: "Puma Runner", marca: "Puma", 
    genero: "Unissex", categoria: "Esporte e lazer", desconto: 60, preco: 350, precoatual: 140},
  {id: 7, imagem: LojaProduto7, nome: "Nike Air Max", marca: "Nike", 
    genero: "Feminino", categoria: "Casual", desconto: 30, preco: 300, precoatual: 210},
  {id: 8, imagem: LojaProduto8, nome: "K-Swiss Speedster", marca: "K-Swiss", 
    genero: "Unissex", categoria: "Utilitário", desconto: 25, preco: 180, precoatual: 135}
];

function ProductListing() {
  return (
      <>
        <div className="ds-fundo-conteudo p-5">
          <p className="ds-coldestaque3-titulo">Produtos em alta</p>
          <Row xs={2} sm={2} md={3} lg={4}>
            <Col>
              <Link to="/product">
                <div className="ds-coldestaque3-produto mb-5">
                  <p className="ds-coldestaque3-desconto badge rounded-pill p-2">{LojaProdutos[0].desconto}% OFF</p>
                  <img src={LojaProdutos[0].imagem} />
                  <p className="ds-coldestaque3-categoria">{LojaProdutos[0].categoria}</p>
                  <p className="ds-coldestaque3-nome">{LojaProdutos[0].nome} - {LojaProdutos[0].genero}</p>
                  <p className="ds-coldestaque3-preco"><span>R${LojaProdutos[0].preco},00</span> R${LojaProdutos[0].precoatual},00</p>
                </div>
              </Link>
            </Col>
            <Col>
              <Link to="/product">
                <div className="ds-coldestaque3-produto mb-5">
                  <p className="ds-coldestaque3-desconto badge rounded-pill p-2">{LojaProdutos[1].desconto}% OFF</p>
                  <img src={LojaProdutos[1].imagem} />
                  <p className="ds-coldestaque3-categoria">{LojaProdutos[1].categoria}</p>
                  <p className="ds-coldestaque3-nome">{LojaProdutos[1].nome} - {LojaProdutos[1].genero}</p>
                  <p className="ds-coldestaque3-preco"><span>R${LojaProdutos[1].preco},00</span> R${LojaProdutos[1].precoatual},00</p>
                </div>
              </Link>
            </Col>
            <Col>
              <Link to="/product">
                <div className="ds-coldestaque3-produto mb-5">
                  <p className="ds-coldestaque3-desconto badge rounded-pill p-2">{LojaProdutos[2].desconto}% OFF</p>
                  <img src={LojaProdutos[2].imagem} />
                  <p className="ds-coldestaque3-categoria">{LojaProdutos[2].categoria}</p>
                  <p className="ds-coldestaque3-nome">{LojaProdutos[2].nome} - {LojaProdutos[2].genero}</p>
                  <p className="ds-coldestaque3-preco"><span>R${LojaProdutos[2].preco},00</span> R${LojaProdutos[2].precoatual},00</p>
                </div>
              </Link>
            </Col>
            <Col>
              <Link to="/product">
                <div className="ds-coldestaque3-produto mb-5">
                  <p className="ds-coldestaque3-desconto badge rounded-pill p-2">{LojaProdutos[3].desconto}% OFF</p>
                  <img src={LojaProdutos[3].imagem} />
                  <p className="ds-coldestaque3-categoria">{LojaProdutos[3].categoria}</p>
                  <p className="ds-coldestaque3-nome">{LojaProdutos[3].nome} - {LojaProdutos[3].genero}</p>
                  <p className="ds-coldestaque3-preco"><span>R${LojaProdutos[3].preco},00</span> R${LojaProdutos[3].precoatual},00</p>
                </div>
              </Link>
            </Col>
            <Col>
              <Link to="/product">
                <div className="ds-coldestaque3-produto mb-5">
                  <p className="ds-coldestaque3-desconto badge rounded-pill p-2">{LojaProdutos[4].desconto}% OFF</p>
                  <img src={LojaProdutos[4].imagem} />
                  <p className="ds-coldestaque3-categoria">{LojaProdutos[4].categoria}</p>
                  <p className="ds-coldestaque3-nome">{LojaProdutos[4].nome} - {LojaProdutos[4].genero}</p>
                  <p className="ds-coldestaque3-preco"><span>R${LojaProdutos[4].preco},00</span> R${LojaProdutos[4].precoatual},00</p>
                </div>
              </Link>
            </Col>
            <Col>
              <Link to="/product">
                <div className="ds-coldestaque3-produto mb-5">
                  <p className="ds-coldestaque3-desconto badge rounded-pill p-2">{LojaProdutos[5].desconto}% OFF</p>
                  <img src={LojaProdutos[5].imagem} />
                  <p className="ds-coldestaque3-categoria">{LojaProdutos[5].categoria}</p>
                  <p className="ds-coldestaque3-nome">{LojaProdutos[5].nome} - {LojaProdutos[5].genero}</p>
                  <p className="ds-coldestaque3-preco"><span>R${LojaProdutos[5].preco},00</span> R${LojaProdutos[5].precoatual},00</p>
                </div>
              </Link>
            </Col>
            <Col>
              <Link to="/product">
                <div className="ds-coldestaque3-produto mb-5">
                  <p className="ds-coldestaque3-desconto badge rounded-pill p-2">{LojaProdutos[6].desconto}% OFF</p>
                  <img src={LojaProdutos[6].imagem} />
                  <p className="ds-coldestaque3-categoria">{LojaProdutos[6].categoria}</p>
                  <p className="ds-coldestaque3-nome">{LojaProdutos[6].nome} - {LojaProdutos[6].genero}</p>
                  <p className="ds-coldestaque3-preco"><span>R${LojaProdutos[6].preco},00</span> R${LojaProdutos[6].precoatual},00</p>
                </div>
              </Link>
            </Col>
            <Col>
              <Link to="/product">
                <div className="ds-coldestaque3-produto mb-5">
                  <p className="ds-coldestaque3-desconto badge rounded-pill p-2">{LojaProdutos[7].desconto}% OFF</p>
                  <img src={LojaProdutos[7].imagem} />
                  <p className="ds-coldestaque3-categoria">{LojaProdutos[7].categoria}</p>
                  <p className="ds-coldestaque3-nome">{LojaProdutos[7].nome} - {LojaProdutos[7].genero}</p>
                  <p className="ds-coldestaque3-preco"><span>R${LojaProdutos[7].preco},00</span> R${LojaProdutos[7].precoatual},00</p>
                </div>
              </Link>
            </Col>
          </Row>
        </div>
      </>
  )
}

export default ProductListing;
