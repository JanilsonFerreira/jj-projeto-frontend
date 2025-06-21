import LogoRodape from '../../assets/logo-footer.svg'
import IconeFacebook from '../../assets/facebook.svg'
import IconeInstagram from '../../assets/instagram.svg'
import IconeTwitter from '../../assets/twitter.svg'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <div className="ds-fundo-rodape">
        <Row className="m-0" xs={1} sm={1} md={1} lg={3}>
            <Col className="p-5">
                <Stack direction="vertical" gap={3}>
                    <img src={LogoRodape} alt="Logo Rodapé" width="253" height="44" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <div>
                        <Stack direction="horizontal" gap={4}>
                            <Nav.Link href="https://www.facebook.com"><img src={IconeFacebook} alt="Rede Social Facebook" className="ds-navicon" /></Nav.Link>
                            <Nav.Link href="https://www.instagram.com"><img src={IconeInstagram} alt="Rede Social Instagram" className="ds-navicon" /></Nav.Link>
                            <Nav.Link href="https://www.twitter.com"><img src={IconeTwitter} alt="Rede Social Twitter" className="ds-navicon" /></Nav.Link>
                        </Stack>
                    </div>
                </Stack>
            </Col>
            <Col className="p-5">
                <Stack direction="horizontal" gap={5}>
                    <div>
                        <h5 className="font-weight-bold">Informação</h5>
                        <Nav.Link href="#/about" className="ds-navlink"><p>Sobre&nbsp;Drip&nbsp;Store</p></Nav.Link>
                        <Nav.Link href="#/security" className="ds-navlink"><p>Segurança</p></Nav.Link>
                        <Nav.Link href="#/wishlist" className="ds-navlink"><p>Wishlist</p></Nav.Link>
                        <Nav.Link href="#/blog" className="ds-navlink"><p>Blog</p></Nav.Link>
                        <Nav.Link href="#/work-with-us" className="ds-navlink"><p>Trabalhe&nbsp;conosco</p></Nav.Link>
                        <Nav.Link href="#/my-cart" className="ds-navlink"><p>Meus&nbsp;Pedidos</p></Nav.Link>
                    </div>
                    <div>
                        <h5 className="font-weight-bold">Categorias</h5>
                        <Nav.Link href="#/products/camisetas" className="ds-navlink"><p>Camisetas</p></Nav.Link>
                        <Nav.Link href="#/products/calcas" className="ds-navlink"><p>Calças</p></Nav.Link>
                        <Nav.Link href="#/products/bone" className="ds-navlink"><p>Bonés</p></Nav.Link>
                        <Nav.Link href="#/products/headphones" className="ds-navlink"><p>Headphones</p></Nav.Link>
                        <Nav.Link href="#/products/tenis" className="ds-navlink"><p>Tênis</p></Nav.Link>
                        <p>&nbsp;</p>
                    </div>
                </Stack>
            </Col>
            <Col className="p-5">
                <Stack direction="vertical" gap={0}>
                    <h5 className="font-weight-bold">Contato</h5>
                    <p>
                        Av. Santos Dumont, 1510 - 1 andar - 
                        Aldeota, Fortaleza - CE, 60150-161
                    </p>
                    <p>(85) 3051-3411</p>
                </Stack>
            </Col>
        </Row>
        <hr />
        <p className="m-0 pb-3 text-center">&copy; 2025 Digital College</p>
    </div>
  );
}

export default Footer;
