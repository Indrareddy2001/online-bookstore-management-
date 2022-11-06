import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addToCart } from "../slices/cartSlice";
import books from "../books";

const Home = () => {
  const { items: product, status } = useSelector((state) => state.products);
  console.log(product)
  const dispatch = useDispatch();
  const history = useHistory();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
   history.push("/cart");
  };

  return (
    <div className="home-container">
      {status === "success" ? (
        <>
          <div className="products">
            {
              books.map((product) =>(
                <div key={product.isbn13} className="product">
                  <h5>{product.title}</h5>
                  <img src={product.image} alt={product.isbn13} />
                  <div className="details">
                    <span>{product.subtitle}</span>
                    <span className="price">Rs {product.price}</span>
                  </div>
                  <button onClick={() => handleAddToCart(product)}>Add To Cart</button>
                </div>
              ))}
          </div>
        </>
      ) : status === "pending" ? (
        <p>Loading...</p>
      ) : (
        <p>Unexpected error occured...</p>
      )}
    </div>
  );
};

export default Home;