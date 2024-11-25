// src/pages/BuyerDashboard.js
import React, { useState } from "react";
import ProductList from "../components/ProductList";
import { Button, List, Modal, Row, Col, Card } from "antd";
import { Column } from "@ant-design/charts"; // Assuming you are using Ant Design Charts

const BuyerDashboard = ({ onLogout }) => {
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const addToCart = (product) => {
    // Add product to the cart
    setCart((prevCart) => [...prevCart, product]);
  };

  const showCart = () => setIsCartVisible(true);
  const hideCart = () => setIsCartVisible(false);

  // Example of sales data for the chart (replace with actual data)
  const salesData = [
    { category: "Electronics", sales: 38 },
    { category: "Furniture", sales: 52 },
    { category: "Clothing", sales: 61 },
  ];

  const chartConfig = {
    data: salesData,
    xField: "sales",
    yField: "category",
    label: { style: { fill: "#fff" } },
    colorField: "category",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome, Buyer!</h1>

      {/* Display Chart */}
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card title="Sales Overview">
            <Column {...chartConfig} />
          </Card>
        </Col>

        {/* Product List Section */}
        <Col span={12}>
          <Card title="Product List">
            <ProductList addToCart={addToCart} />
          </Card>
        </Col>
      </Row>

      {/* Cart Button */}
      <Button onClick={showCart} style={{ marginTop: "20px" }}>
        View Cart ({cart.length})
      </Button>
      <Button onClick={onLogout} style={{ marginLeft: "10px" }}>
        Logout
      </Button>

      {/* Cart Modal */}
      <Modal
        title="Your Cart"
        visible={isCartVisible}
        onCancel={hideCart}
        footer={null}
      >
        <List
          dataSource={cart}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={item.name}
                description={`Price: $${item.price}`}
              />
            </List.Item>
          )}
        />
      </Modal>
    </div>
  );
};

export default BuyerDashboard;
