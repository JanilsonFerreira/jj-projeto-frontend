import Layout from './Layout';
import ProductList from '../components/ProductList';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import LojaProduto7Imagem from '../../public/produtos/tenis-nike-feminino.png';
const LojaProduto7 = {
id: 7, imagem: LojaProduto7Imagem, nome: "Nike Air Max", marca: "Nike", 
    genero: "Feminino", categoria: "Casual", desconto: 30, preco: 300, precoatual: 210
};

function ProductViewPage() {
    return (
        <Layout>
            <div className="p-5 ds-fundo-conteudo">
                <Row>
                    <p className="ds-productview-rota">Home / Produtos / Casual / Nike / Nike Air Max - Feminino</p>
                </Row>
                <Row xs={1} sm={1} md={1} lg={2}>
                  <Col>
                    <img src={LojaProduto7.imagem} className="ds-productview-imagem" />
                  </Col>
                  <Col>
                    <p className="ds-productview-nome">{LojaProduto7.nome} - {LojaProduto7.genero}</p>
                    <p className="ds-productview-detalhes">{LojaProduto7.categoria} | {LojaProduto7.marca} | 4.2 / 5.0 (90 avaliações) | REF: 12345678</p>
                    <p className="ds-productview-preco"><span>R${LojaProduto7.preco},00</span> R${LojaProduto7.precoatual},00</p>
                    <p className="ds-productview-descricao"><span>Descrição do produto</span><br />Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                    minim veniam, quis nostrud exercitation ullamco.</p>
                    <Button id="botao-comprar" className="ds-botao-primary p-2">Comprar</Button>
                  </Col>
                </Row>
            </div>
            <div className="p-5 ds-fundo-conteudo">
              <ProductList />
            </div>
        </Layout>
    )
}

export default ProductViewPage;
