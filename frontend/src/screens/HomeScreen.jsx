import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
// import data from '../../../data';

const HomeScreen = () => {
  //STATE
  const [products, setProducts] = useState([]);

  // FETCHING PRODUCTS FROM THE BACKEND
  useEffect(() => {
    const fetchData = async () => {
      // Send an AJAX request

      const response = await axios.get('api/products')
      
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
      
      setProducts(response.data);
    }
    // invoke fucntion
    fetchData();
  }, []);

  console.log(products) 

  const dataProducts = products.map((product) => {
    const { name, slug, image, price } = product;
    return (
      <div className="product" key={slug}>
        <Link to={`/product/${slug}`}>
          <img src={image} alt="" />
        </Link>
        <div className="product-info">
          <Link to={`/product/${slug}`}>
            <p>{name}</p>
            <p>{price}</p>
            <button>Add to cart</button>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">{dataProducts}</div>
    </div>
  );
};

export default HomeScreen;
