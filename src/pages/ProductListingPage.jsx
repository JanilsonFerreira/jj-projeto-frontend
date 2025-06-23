import Layout from './Layout';
import ProductList from '../components/ProductList';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

function ProductListingPage() {
    return (
        <Layout>
            <div className="p-5 ds-fundo-conteudo">
                <Row>
                    <Col xs={10}>
                        <p className="ds-listaproduto-titulo"><span>Resultados para todos os produtos -</span> 8 produtos</p>
                    </Col>
                    <Col>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic-button" className="ds-botao-primary">Ordenar por</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#1" className="ds-navlink">mais relevantes</Dropdown.Item>
                                <Dropdown.Item href="#2" className="ds-navlink">menor preço</Dropdown.Item>
                                <Dropdown.Item href="#3" className="ds-navlink">maior preço</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
                <Row>
                    <Col md={2} lg={2}>
                        <Stack direction="vertical" className="pt-5" gap={3}>
                            <p className="ds-listaproduto-conteudo"><span>Filtrar por</span></p>
                            <div>
                                <p className="ds-listaproduto-conteudo"><span>Marca</span></p>
                                <Form>
                                    <Form.Check type="checkbox" id="default-checkbox" label="Adidas" />
                                    <Form.Check type="checkbox" id="default-checkbox" label="K-Swiss" />
                                    <Form.Check type="checkbox" id="default-checkbox" label="Nike" />
                                    <Form.Check type="checkbox" id="default-checkbox" label="Puma" />
                                </Form>
                            </div>
                            <div>
                                <p className="ds-listaproduto-conteudo"><span>Categoria</span></p>
                                <Form>
                                    <Form.Check type="checkbox" id="default-checkbox" label="Esporte e lazer" />
                                    <Form.Check type="checkbox" id="default-checkbox" label="Casual" />
                                    <Form.Check type="checkbox" id="default-checkbox" label="Utilitário" />
                                    <Form.Check type="checkbox" id="default-checkbox" label="Corrida" />
                                </Form>
                            </div>
                            <div>
                                <p className="ds-listaproduto-conteudo"><span>Gênero</span></p>
                                <Form>
                                    <Form.Check type="checkbox" id="default-checkbox" label="Masculino" />
                                    <Form.Check type="checkbox" id="default-checkbox" label="Feminino" />
                                    <Form.Check type="checkbox" id="default-checkbox" label="Unissex" />
                                </Form>
                            </div>
                            <div>
                                <p className="ds-listaproduto-conteudo"><span>Estado</span></p>
                                <Form>
                                    <Form.Check type="radio" id="default-checkbox" label="Novo" name="group1" />
                                    <Form.Check type="radio" id="default-checkbox" label="Usado" name="group1" />
                                </Form>
                            </div>
                        </Stack>
                    </Col>
                    <Col md={10} lg={10}>
                        <ProductList />
                    </Col>
                </Row>
            </div>
        </Layout>
    )
}

export default ProductListingPage;
