import React, { useEffect, useState } from "react";
import "../../styles/product.css";
import ProductNavBar from "./ProductNavBar";
import config from "../../config.json";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState([]);
  const [originalCategoryArray, setOriginalCategoryArray ] = useState([]);
  const [counter,setCounter] = useState(0);
  useEffect(() => {
    fetch(`${config.APP_URL}/products`)
      .then((res) => res.json())
      .then((product) => {setProducts(product);
        setOriginalCategoryArray(product)
    });

    fetch(`${config.APP_URL}/categories`)
      .then((res) => res.json())
      .then((categoryName) => {
        setCategoryName(categoryName);
      });
  }, []);

  const selectedItem =  (selected) => {
     setProducts(originalCategoryArray.filter(item => item.category === selected))
  };


  const handleBuyNow = (e, id) => {
    e.preventDefault();
    setCounter(state => state+1)
    navigate('/cart')
  };
  const goBack = () => {
    navigate(-1)
  }
  return (
    <div className="d-flex container">
      <div className=" cards">
        <div className="row">
          <button className="btn btn-primary goback_btn " onClick={goBack} > Go Back</button>
          <ProductNavBar
            prouctCategoryName={categoryName}
            selectedItem={selectedItem}
          />
          {products &&
            products.map((product) => {
              return (
                <>
                  <div className="col-sm-4 mb-3 " key={product.id}>
                    <div className="card" style={{ width: "18rem" }}>
                      <img src={product.imageURL} alt={product.name} />
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text product_card_text">
                          {product.description}
                        </p>
                        <span>
                          Available stock <strong>{product.stock}</strong>
                        </span>
                        <div className="" style={{display : 'flex'}}>
                          <span style={{display: "inline-block"}}>MRP Rs.{product.price}</span>
                          <button
                          className="btn product_btn"
                          onClick={(e) => handleBuyNow(e, product.id)}
                        >
                          Buy Now 
                        </button>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Products;
