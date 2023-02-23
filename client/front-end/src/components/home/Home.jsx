import React, { useEffect, useState } from "react";
import "../../styles/Home.css";
import fruit from  "../../static/images/category/baby.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const [groceryData, setGroceryData] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/categories').then(response =>
            response.json()).then(data => {
            setGroceryData(data);
        })
    },[]);
    const handleProduct = (e, item) =>{
        e.preventDefault();
        navigate(`/products`)
    }
    return (
        <div>
            <React.Fragment >
            <Carousel >
                <div style={{overflow:'hidden'}}>
                    <img src={require('../../static/images/offers/offer1.jpg')} alt={'Offer'}/>
                </div>
                <div>
                    <img src={require('../../static/images/offers/offer2.jpg')} alt={'Offer'}/>
                </div>
                <div>
                    <img src={require('../../static/images/offers/offer3.jpg')} alt={'Offer'}/>
                </div>
            </Carousel>
            </React.Fragment>
        <div className="container text-center home-container">
            
            {groceryData && groceryData.map((item) => {
                return (
                    <div className="row box-shadow" key={item.order}>
                        {item.order % 2 === 1  && 
                        <>
                          <div className= "column-33">
                        <img src={item.imageUrl}  alt={item.key} width={500}/>
                        </div>
                        <div className="column-66 desc">
                        <h3>{item.name}</h3>
                        <span>{item.description}</span>
                        <div>
                        <button className="explore-button" onClick={(e) => handleProduct(e,item)}>Explore {item.name}</button>
                        </div>
                        
                        </div>
                        </>
                      
                        }
                    
                    {item.order % 2 !== 1  && 
                        <>
                         
                        <div className="column-66 desc" key={item.order} >
                            <h3>{item.name}</h3>
                            <span>{item.description}</span>
                            <div>
                            <button className="explore-button" onClick={handleProduct}>Explore {item.name}</button>

                            </div>
                            
                        </div>
                        <div className= "column-33" >
                            <img src={fruit}  alt={item.key} width={500}/>
                        </div>
                        </>
                      
                        }
                </div>
                )
            })}
       
       
        </div>
        </div>
    )
}

export default Home;