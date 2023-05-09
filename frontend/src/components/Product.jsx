import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';

const Product = (props) => {
  const { slug, image, name, price, rating, numReviews } = props.product;
  return (
    <Card className="product" key={slug}>
      <Link to={`/product/${slug}`}>
        <img src={image} alt="" />
      </Link>

      <Card.Body>
        <Link to={`/product/${slug}`}>
          <Card.Title>{name}</Card.Title>
        </Link>
        <Rating rating={rating} numReviews={numReviews} />
      </Card.Body>
      
      <Card.Text>{name}</Card.Text>

      <button>Add to cart</button>
    </Card>
  );
};

export default Product;
