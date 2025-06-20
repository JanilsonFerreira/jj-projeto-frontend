import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import CarrosselHomeProduto1 from '../../public/produtos/tenis-nike.png';
import CarrosselHomeProduto2 from '../../public/produtos/tenis-kswis.png';
import CarrosselHomeProduto3 from '../../public/produtos/tenis-adidas.png';
import CarrosselHomeProduto4 from '../../public/produtos/tenis-air-jordan.png';

function Gallery() {
  return (
      <>
        <div className="ds-fundo-conteudo p-5">
          <Carousel fade controls={false} interval={4000} touch={true} className="ds-carrossel-indicador">
            <Carousel.Item>
              <Row xs={1} sm={1} md={1} lg={2}>
                <Col xs={{order: 2}} sm={{order: 2}} md={{order: 2}} lg={{order: 1}}>
                  <p className="ds-carrossel-subtitulo">Melhores ofertas personalizadas</p>
                  <p className="ds-carrossel-titulo">Queima de estoque Nike 🔥</p>
                  <p className="ds-carrossel-descricao">
                    Consequat culpa exercitation mollit nisi excepteur do tempor laboris eiusmod nure consectetur.
                  </p>
                  <Button id="botao-carrossel-slide1" className="ds-botao-primary">Ver&nbsp;Ofertas</Button>
                </Col >
                <Col xs={{order: 1}} sm={{order: 1}} md={{order: 1}} lg={{order: 2}}>
                  <img src={CarrosselHomeProduto1} text="First slide" className="ds-carrossel-imagem" />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row xs={1} sm={1} md={1} lg={2}>
                <Col xs={{order: 2}} sm={{order: 2}} md={{order: 2}} lg={{order: 1}}>
                  <p className="ds-carrossel-subtitulo">Edição limitada</p>
                  <p className="ds-carrossel-titulo">Sinal Vermelho K-Swiss V8 🔴</p>
                  <p className="ds-carrossel-descricao">
                    Consequat culpa exercitation mollit nisi excepteur do tempor laboris eiusmod nure consectetur.
                  </p>
                  <Button id="botao-carrossel-slide1" className="ds-botao-primary">Ver&nbsp;Ofertas</Button>
                </Col>
                <Col xs={{order: 1}} sm={{order: 1}} md={{order: 1}} lg={{order: 2}}>
                  <img src={CarrosselHomeProduto2} text="Second slide" className="ds-carrossel-imagem" />
                </Col>
              </Row>
            </Carousel.Item >
            <Carousel.Item>
              <Row xs={1} sm={1} md={1} lg={2}>
                <Col xs={{order: 2}} sm={{order: 2}} md={{order: 2}} lg={{order: 1}}>
                  <p className="ds-carrossel-subtitulo">Novidades imperdíveis</p>
                  <p className="ds-carrossel-titulo">Coleção Tênis Adidas 2025 🏃</p>
                  <p className="ds-carrossel-descricao">
                    Consequat culpa exercitation mollit nisi excepteur do tempor laboris eiusmod nure consectetur.
                  </p>
                  <Button id="botao-carrossel-slide1" className="ds-botao-primary">Ver&nbsp;Coleção</Button>
                </Col>
                <Col xs={{order: 1}} sm={{order: 1}} md={{order: 1}} lg={{order: 2}}>
                  <img src={CarrosselHomeProduto3} text="Third slide" className="ds-carrossel-imagem" />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row xs={1} sm={1} md={1} lg={2}>
                <Col xs={{order: 2}} sm={{order: 2}} md={{order: 2}} lg={{order: 1}}>
                  <p className="ds-carrossel-subtitulo">Edição Colecionador</p>
                  <p className="ds-carrossel-titulo">Promoção Air Jordans 1 🥾</p>
                  <p className="ds-carrossel-descricao">
                    Consequat culpa exercitation mollit nisi excepteur do tempor laboris eiusmod nure consectetur.
                  </p>
                  <Button id="botao-carrossel-slide1" className="ds-botao-primary">Ver&nbsp;Promoção</Button>
                </Col>
                <Col xs={{order: 1}} sm={{order: 1}} md={{order: 1}} lg={{order: 2}}>
                  <img src={CarrosselHomeProduto4} text="Fourth slide" className="ds-carrossel-imagem" />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </div>
      </>
  )
}

export default Gallery;
