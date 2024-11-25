import React, { useState } from "react";
import {
  Layout,
  Menu,
  Table,
  Button,
  Modal,
  Form,
  Input,
  Select,
  Typography,
  Row,
  Col,
  Card,
} from "antd";
import {
  PieChartOutlined,
  ShoppingCartOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Column } from "@ant-design/charts";

const { Sider, Content } = Layout;
const { Option } = Select;
const { Title } = Typography;

const SellerDashboard = () => {
  const [selectedKey, setSelectedKey] = useState("productDetails");
  const [products, setProducts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleMenuClick = (e) => {
    setSelectedKey(e.key);
  };

  const salesData = [
    { category: "Furniture", sales: 500 },
    { category: "Electronics", sales: 700 },
    { category: "Clothing", sales: 300 },
    { category: "Books", sales: 450 },
  ];

  const salesChartConfig = {
    data: salesData,
    xField: "category",
    yField: "sales",
    seriesField: "category",
    label: {
      position: "top",
      style: {
        fill: "#000",
        fontSize: 12,
        fontWeight: "bold",
      },
    },
    color: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"],
    columnWidthRatio: 0.6,
    xAxis: {
      title: {
        text: "Categories",
        style: { fontSize: 14, fontWeight: "bold" },
      },
    },
    yAxis: {
      title: { text: "Sales ($)", style: { fontSize: 14, fontWeight: "bold" } },
    },
    legend: {
      position: "top-right",
    },
  };

  const productColumns = [
    { title: "Product Name", dataIndex: "name", key: "name" },
    { title: "Category", dataIndex: "category", key: "category" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Stock", dataIndex: "stock", key: "stock" },
  ];

  const showAddProductModal = () => {
    setIsModalVisible(true);
  };

  const handleAddProduct = () => {
    form.validateFields().then((values) => {
      const newProduct = { ...values, key: Date.now().toString() };
      setProducts((prevProducts) => [...prevProducts, newProduct]);
      setIsModalVisible(false);
    });
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={240} style={{ background: "#001529" }}>
        <div
          style={{
            color: "#fff",
            textAlign: "center",
            padding: "20px 0",
            fontSize: "24px",
          }}
        >
          Seller Dashboard
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["productDetails"]}
          style={{ height: "100%", borderRight: 0 }}
          theme="dark"
          onClick={handleMenuClick}
        >
          <Menu.Item key="salesInfo" icon={<PieChartOutlined />}>
            Sales Info
          </Menu.Item>
          <Menu.Item key="productDetails" icon={<ShoppingCartOutlined />}>
            Product Details
          </Menu.Item>
          <Menu.Item key="addProduct" icon={<PlusCircleOutlined />}>
            Add Product
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: "24px" }}>
        <Content
          style={{
            padding: 24,
            margin: 0,
            background: "#fff",
            borderRadius: "8px",
          }}
        >
          <Row>
            <Col span={24}>
              <div
                style={{
                  background: "linear-gradient(to right, #3b82f6, #10b981)",
                  padding: "20px",
                  borderRadius: "8px",
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                <Title level={2}>Welcome to Your Seller Dashboard</Title>
                <p>Manage your products and track your sales effectively.</p>
              </div>
            </Col>
          </Row>

          {selectedKey === "salesInfo" && (
            <Card title="Sales Info" style={{ marginTop: 24 }}>
              <Column {...salesChartConfig} />
            </Card>
          )}

          {selectedKey === "productDetails" && (
            <Card title="Product Details" style={{ marginTop: 24 }}>
              <Table
                dataSource={products}
                columns={productColumns}
                pagination={false}
              />
            </Card>
          )}

          {selectedKey === "addProduct" && (
            <Card title="Add New Product" style={{ marginTop: 24 }}>
              <Button type="primary" size="large" onClick={showAddProductModal}>
                Add Product
              </Button>
            </Card>
          )}
        </Content>
      </Layout>

      <Modal
        title="Add Product"
        visible={isModalVisible}
        onOk={handleAddProduct}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Product Name"
            rules={[
              { required: true, message: "Please enter the product name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="category"
            label="Category"
            rules={[{ required: true, message: "Please select a category!" }]}
          >
            <Select>
              <Option value="Furniture">Furniture</Option>
              <Option value="Electronics">Electronics</Option>
              <Option value="Clothing">Clothing</Option>
              <Option value="Books">Books</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: "Please enter the price!" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="stock"
            label="Stock Quantity"
            rules={[
              { required: true, message: "Please enter the stock quantity!" },
            ]}
          >
            <Input type="number" />
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default SellerDashboard;
