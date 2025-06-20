import Layout from './Layout';

import Button from 'react-bootstrap/Button';

function NotFound() {
  return (
      <Layout>
        <div className="ds-fundo-conteudo p-5 d-flex justify-content-center">
            <h1>Página não encontrada.</h1>
        </div>
        <div className="ds-fundo-conteudo p-5 d-flex justify-content-center">
            <h2>Nossa loja ainda está sendo construida, volte mais tarde!</h2>
        </div>
        <div className="ds-fundo-conteudo p-5 d-flex justify-content-center">
            <Button href="/" id="botao-voltar-home" className="ds-botao-primary p-2">Voltar</Button>
        </div>
      </Layout>
  )
}

export default NotFound;
