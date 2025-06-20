import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Colecao2HomeProduto1 from '../../public/categorias/icon-camisa.png';
import Colecao2HomeProduto2 from '../../public/categorias/icon-calca.png';
import Colecao2HomeProduto3 from '../../public/categorias/icon-bone.png';
import Colecao2HomeProduto4 from '../../public/categorias/icon-fones.png';
import Colecao2HomeProduto5 from '../../public/categorias/icon-tenis.png';

function ProductCategories() {
  return (
      <>
        <div className="ds-fundo-conteudo p-5">
          <p className="ds-coldestaque2-titulo">Categorias em destaque</p>
          <Row xs={2} sm={2} md={3} lg={5}>
            <Col>
              <div className="ds-coldestaque2-categoria mb-5">
                <img src={Colecao2HomeProduto1} />
                <p>Camisetas</p>
              </div>
            </Col>
            <Col>
              <div className="ds-coldestaque2-categoria mb-5">
                <img src={Colecao2HomeProduto2} />
                <p>Calças</p>
              </div>
            </Col>
            <Col>
              <div className="ds-coldestaque2-categoria mb-5">
                <img src={Colecao2HomeProduto3} />
                <p>Bonés</p>
              </div>
            </Col>
            <Col>
              <div className="ds-coldestaque2-categoria mb-5">
                <img src={Colecao2HomeProduto4} />
                <p>Headphones</p>
              </div>
            </Col>
            <Col>
              <div className="ds-coldestaque2-categoria mb-5">
                <img src={Colecao2HomeProduto5} />
                <p>Tênis</p>
              </div>
            </Col>
          </Row>
        </div>
      </>
  )
}

export default ProductCategories;
