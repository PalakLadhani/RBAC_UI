import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Card, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Title } = Typography;

const LoginPage = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (values) => {
    setLoading(true);

    // Mock authentication check
    const { username, password } = values;

    if (username === "admin" && password === "admin123") {
      onLogin(true, "admin");
      navigate("/admin-dashboard"); // Redirect to Admin Dashboard
    } else if (username === "seller" && password === "seller123") {
      onLogin(true, "seller");
      navigate("/seller-dashboard"); // Redirect to Seller Dashboard
    } else if (username === "buyer" && password === "buyer123") {
      onLogin(true, "buyer");
      navigate("/buyer-dashboard"); // Redirect to Buyer Dashboard
    } else {
      setLoading(false); // Stop loading spinner
      alert("Invalid credentials"); // Display alert on invalid login
    }
  };

  return (
    <div className="login-container">
      <Card className="login-card" bordered={false}>
        <Title level={2} style={{ textAlign: "center" }}>
          Welcome Back!
        </Title>
        <Form name="login" onFinish={handleLogin}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please enter your username!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Log In
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
