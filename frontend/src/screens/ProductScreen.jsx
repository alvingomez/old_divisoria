import { useParams } from "react-router"

const ProductScreen = () => {
  const params = useParams();
//DESTRUCTURING   
  const {slug} = params;
    return (
    <div>
        {/*  */}
      <h1>{slug}</h1>
    </div>
  )
}

export default ProductScreen
