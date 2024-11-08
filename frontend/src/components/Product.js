import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
  const navigate = useNavigate();
  const addToCartHandler = () => {
    navigate(`/cart/${product._id}?qty=1`);
  };

  return (
    <Card className='my-3 p-3 rounded text-center'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
          <Card.Title as='div' style={{ color: 'black' }}>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='h3'>₹{product.price}</Card.Text>

        {/* Add to Cart Button */}
        <Button
          onClick={addToCartHandler}
          style={{
            backgroundColor: 'Red',
            color: 'white',
            border: 'none',
            width: '100%',
            fontWeight: 'bold',
          }}
          className='mt-3'
          type='button'
        >
          ADD TO CART
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
