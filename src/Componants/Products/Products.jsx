import axios from "axios";
import { useEffect, useState } from "react";

function Products() {
  let [data, setData] = useState([]);
  let [images, setImages] = useState([]);
  async function getData() {
    let { data } = await axios.get(`https://fakestoreapi.com/products`);
    setData(data);
  }
  useEffect(() => {
    getData();
  }, []);

  function handleCart() {
    console.log("Gg");
  }
  return (
    <>
      <div className="parent products   py-4">
        <div className="container m-auto row g-4">
          {data.map((ele) => {
            return (
              <div className="col-md-4 text-center product" key={ele.id}>
                <div className="image">
                  <img className="w-100" src={ele.image} alt="Title" />
                </div>
                <div className="body">
                  <h4 className="productName">{ele.category}</h4>
                  <p className="productPrice text-success fs-bold fs-4">
                    Price {ele.price}$
                  </p>
                </div>
                <button
                  className=" btn btn-success"
                  onClick={() => handleCart()}
                >
                  add to cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
