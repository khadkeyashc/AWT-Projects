import React, { useState } from "react";

import ProductPopup from "./ProductPopup";


const ProductCard = ({ product }) => {

const [available, setAvailable] = useState(product.inStock);

const [showPopup, setShowPopup] = useState(false);


const toggleAvailability = () => {

setAvailable(!available);

};


return (

<div className="product-card">

<img src={product.image} alt={product.name} />

<h2>{product.name}</h2>

<p>Price: ₹{product.price}</p>

<p>Status: {available ? "In Stock" : "Out of Stock"}</p>

<button onClick={toggleAvailability}>

{available ? "Mark Out of Stock" : "Mark In Stock"}

</button>

<button onClick={() => setShowPopup(true)}>View Details</button>


{showPopup && <ProductPopup product={product} closePopup={() => setShowPopup(false)} />}

</div>

);

};


export default ProductCard;
