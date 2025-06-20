import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Colecao1HomeProduto1 from '../../public/collection-1.png';
import Colecao1HomeProduto2 from '../../public/collection-2.png';
import Colecao1HomeProduto3 from '../../public/collection-3.png';

function ProductCollections() {
  return (
      <>
        <div className="ds-fundo-conteudo p-5">
          <p className="ds-coldestaque1-titulo">Coleções em destaque</p>
          <Row xs={1} sm={1} md={2} lg={3}>
            <Col>
              <div className="ds-coldestaque1-produto mb-5">
                <p className="ds-coldestaque1-desconto badge rounded-pill p-2">30% OFF</p>
                <img src={Colecao1HomeProduto1} />
                <Button id="botao-carrossel-slide1">Comprar</Button>
              </div>
            </Col>
            <Col>
              <div className="ds-coldestaque1-produto mb-5">
                <p className="ds-coldestaque1-desconto badge rounded-pill p-2">30% OFF</p>
                <img src={Colecao1HomeProduto2} />
                <Button id="botao-carrossel-slide1">Comprar</Button>
              </div>
            </Col>
            <Col>
              <div className="ds-coldestaque1-produto mb-5">
                <p className="ds-coldestaque1-desconto badge rounded-pill p-2">30% OFF</p>
                <img src={Colecao1HomeProduto3} />
                <Button id="botao-carrossel-slide1">Comprar</Button>
              </div>
            </Col>
          </Row>
        </div>
      </>
  )
}

export default ProductCollections;
