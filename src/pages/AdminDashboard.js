import React, { useState } from "react";
import { Layout, Menu, Button, Modal, Table, Form, Input, Select } from "antd";
import {
  UserOutlined,
  BarChartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import SellerChart from "../components/SellerChart";
import ProductList from "../components/ProductList";
import UserManagement from "../components/UserManagement"; // Ensure this component exists

const { Header, Content, Sider } = Layout;
const { Option } = Select;

const AdminDashboard = ({ onLogout }) => {
  const [selectedMenu, setSelectedMenu] = useState("userManagement");

  const handleMenuClick = ({ key }) => {
    setSelectedMenu(key);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider breakpoint="lg" collapsedWidth="0">
        <div
          className="logo"
          style={{ padding: "16px", color: "#fff", fontSize: "20px" }}
        >
          Admin Panel
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["userManagement"]}
          onClick={handleMenuClick}
        >
          <Menu.Item key="userManagement" icon={<UserOutlined />}>
            User Management
          </Menu.Item>
          <Menu.Item key="sellerDetails" icon={<BarChartOutlined />}>
            Seller Details
          </Menu.Item>
          <Menu.Item key="productDetails" icon={<BarChartOutlined />}>
            Product Details
          </Menu.Item>
          <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={onLogout}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            background: "#fff",
            padding: "0 20px",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Admin Dashboard
        </Header>
        <Content style={{ margin: "16px" }}>
          {selectedMenu === "userManagement" && <UserManagement />}
          {selectedMenu === "sellerDetails" && <SellerChart />}
          {selectedMenu === "productDetails" && <ProductList />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
