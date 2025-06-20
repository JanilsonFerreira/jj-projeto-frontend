import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import LojaProdutoOferta from '../../public/produtos/oferta-air-jordan.png';

function ProductOffer() {
  return (
      <>
        <div className="ds-fundo-conteudo p-5">
          <Row xs={1} sm={1} md={1} lg={2} className="ds-coldestaque4-oferta">
            <Col>
              <img src={LojaProdutoOferta} text="Oferta especial" className="ds-coldestaque4-oferta-imagem" />
            </Col>
            <Col>
              <p className="ds-carrossel-subtitulo">Oferta especial</p>
              <p className="ds-carrossel-titulo">Air Jordan edição de colecionador</p>
              <p className="ds-carrossel-descricao">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
              </p>
              <Button id="botao-carrossel-slide1" className="ds-botao-primary">Ver&nbsp;Oferta</Button>
            </Col>
          </Row>
        </div>
      </>
  )
}

export default ProductOffer;
