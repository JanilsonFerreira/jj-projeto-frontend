import Layout from './Layout';

import Gallery from '../components/Gallery';
import ProductListing from '../components/ProductListing';
import ProductCollections from '../components/ProductCollections';
import ProductCategories from '../components/ProductCategories';
import ProductOffer from '../components/ProductOffer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

function Homepage() {
  return (
      <Layout>
        <Gallery />
        <ProductCollections />
        <ProductCategories />
        <ProductListing />
        <ProductOffer />
      </Layout>
  )
}

export default Homepage;
