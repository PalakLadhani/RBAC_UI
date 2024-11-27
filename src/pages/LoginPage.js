import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Card, Typography, Table } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Title } = Typography;

const LoginPage = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (values) => {
    setLoading(true);

    const { username, password } = values;

    if (username === "admin" && password === "admin") {
      onLogin(true, "admin");
      navigate("/admin-dashboard"); 
    } else if (username === "seller" && password === "seller") {
      onLogin(true, "seller");
      navigate("/seller-dashboard"); 
    } else if (username === "buyer" && password === "buyer") {
      onLogin(true, "buyer");
      navigate("/buyer-dashboard"); 
    } else {
      setLoading(false); 
      alert("Invalid credentials"); 
    }
  };

  const credentials = [
    {
      key: "1",
      role: "Admin",
      username: "admin",
      password: "admin",
    },
    {
      key: "2",
      role: "Seller",
      username: "seller",
      password: "seller",
    },
    {
      key: "3",
      role: "Buyer",
      username: "buyer",
      password: "buyer",
    },
  ];

  const columns = [
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
  ];

  return (
    <div style={styles.container}>

  
      <Card style={styles.card} bordered={false}>
        <Title level={2} style={{ textAlign: "center" }}>
           Login
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
      <div style={styles.tableContainer}>
        <Title level={4}>Login Credentials </Title>
        <Table
          dataSource={credentials}
          columns={columns}
          pagination={false}
          bordered
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f2f5",
  },
  card: {
    width: 400,
    padding: 20,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    borderRadius: "8px",
  },
  tableContainer: {
    marginTop: 20,
    width: "80%",
    maxWidth: 600,
  },
};

export default LoginPage;
