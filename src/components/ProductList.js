// src/components/ProductList.js
import React from "react";
import { Card, Button } from "antd";

// Sample product data for demonstration
const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: "Table", image: "/images/table.jpg", price: 100 },
    { id: 2, name: "Chair", image: "/images/chair.jpg", price: 50 },
    { id: 3, name: "Lamp", image: "/images/lamp.jpg", price: 30 },
  ];

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {products.map((product) => (
        <Card
          key={product.id}
          title={product.name}
          cover={
            <img
              alt={product.name}
              src={product.image}
              style={{ width: "100%", height: "auto" }}
            />
          }
          style={{ width: 240 }}
        >
          <p>Price: ${product.price}</p>
          <Button type="primary" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
