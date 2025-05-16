import React from "react";
import ProductCard from "./component/ProductCard";

// import ProductCard from "components/ProductCard";


const productData = {

name: "Smartphone XYZ",

price: 19999,

inStock: true,

image: './public/M1Q1.jpg',

description: "A high-performance smartphone with an amazing display and camera."

};


const App = () => {

return (

<div className="app">

<h1>Dynamic E-commerce Product Page</h1>

  <ProductCard product={productData}></ProductCard>
</div>

);

};


export default App;
