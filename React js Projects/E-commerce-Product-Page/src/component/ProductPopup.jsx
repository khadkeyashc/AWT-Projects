import React from "react";


const ProductPopup = ({ product, closePopup }) => {

return (

<div className="popup-overlay">

<div className="popup-content">

<h2>{product.name}</h2>

<img src={product.image} alt={product.name} />

<p>{product.description}</p>

<p>Price: ₹{product.price}</p>

<button onClick={closePopup}>Close</button>

</div>

</div>

);

};


export default ProductPopup;