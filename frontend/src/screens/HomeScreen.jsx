import { useReducer, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';

const reducer = (state, action) => {
  if (action.type === 'FETCH_REQUEST') {
    return {
      ...state,
      loading: true,
    };
  } else if (action.type === 'FETCH_SUCCESS') {
    return {
      ...state,
      loading: false,
      products: action.payload,
    };
  } else state;
};

const initialArg = {
  products: [],
  loading: false,
};

const HomeScreen = () => {
  // REDUCER
  const [{ products, loading }, dispatch] = useReducer(reducer, initialArg);

  // FETCHING PRODUCTS FROM THE BACKEND
  useEffect(() => {
    const fetchData = async () => {
      // Send an AJAX request
      dispatch({
        type: 'FETCH_REQUEST',
      });

      const result = await axios
        .get('api/products')

        // CATCHING ERRORS FOR AXIOS
        .catch(function (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
        });

      dispatch({
        type: 'FETCH_SUCCESS',
        payload: result.data,
      });
    };
    // invoke fucntion
    fetchData();
  }, []);

  const dataProducts = products.map((product) => {
    const {slug} = product;
    return (
     <Col sm={6} md={4} lg={3} key={slug} className='mb-3'>
      <Product product={product} />
     </Col>
    );
  });

  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        <Row>{dataProducts}</Row>
      </div>
    </div>
  );
};

export default HomeScreen;

// variable names FETCH_REQUEST, FETCH_SUCCESS, 'FETCH_FAIL',
