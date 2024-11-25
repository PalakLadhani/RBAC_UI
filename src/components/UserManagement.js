import React, { useState } from "react";
import { Table, Button, Modal, Form, Input, Select, message } from "antd";

const { Option } = Select;

const UserManagement = () => {
  const [users, setUsers] = useState([
    { key: "1", name: "Shivam Asati", role: "Seller", status: "Active" },
    { key: "2", name: "Kritik Vaishnav", role: "Buyer", status: "Inactive" },
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null); // Tracks the user being edited
  const [form] = Form.useForm();

  // Open modal for adding/editing users
  const showModal = (user = null) => {
    setEditingUser(user);
    setIsModalVisible(true);
    if (user) {
      form.setFieldsValue(user); // Populate fields for editing
    } else {
      form.resetFields(); // Clear fields for adding
    }
  };

  // Handle modal OK
  const handleOk = () => {
    form.validateFields().then((values) => {
      if (editingUser) {
        // Update existing user
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.key === editingUser.key ? { ...user, ...values } : user
          )
        );
        message.success("User updated successfully!");
      } else {
        // Add new user
        const newUser = { ...values, key: Date.now().toString() };
        setUsers((prevUsers) => [...prevUsers, newUser]);
        message.success("User added successfully!");
      }
      setIsModalVisible(false);
    });
  };

  // Delete a user
  const handleDelete = (key) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.key !== key));
    message.success("User deleted successfully!");
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Role", dataIndex: "role", key: "role" },
    { title: "Status", dataIndex: "status", key: "status" },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_, record) => (
        <span>
          <Button type="link" onClick={() => showModal(record)}>
            Edit
          </Button>
          <Button type="link" danger onClick={() => handleDelete(record.key)}>
            Delete
          </Button>
        </span>
      ),
    },
  ];

  return (
    <div>
      <Button
        type="primary"
        onClick={() => showModal()}
        style={{ marginBottom: "16px" }}
      >
        Add User
      </Button>
      <Table dataSource={users} columns={columns} pagination={false} />
      <Modal
        title={editingUser ? "Edit User" : "Add User"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please enter the name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="role"
            label="Role"
            rules={[{ required: true, message: "Please select a role" }]}
          >
            <Select>
              <Option value="admin">Admin</Option>
              <Option value="seller">Seller</Option>
              <Option value="buyer">Buyer</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: "Please select a status" }]}
          >
            <Select>
              <Option value="Active">Active</Option>
              <Option value="Inactive">Inactive</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UserManagement;
