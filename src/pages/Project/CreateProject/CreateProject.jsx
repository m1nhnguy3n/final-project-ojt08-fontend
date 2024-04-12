import React from 'react';
import { Form, Input, Select, Row, Col, DatePicker, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;

const ProductForm = () => {
    const onFinish = (values) => {
        console.log('Received values:', values);
    };

    return (
        <Form
            name="product_form"
            layout="vertical"
            onFinish={onFinish}
        >
            <Row gutter={16}>
                <Col span={12} xs={24} sm={12} md={24} lg={12} xl={12}>
                    <Form.Item
                        name="productName"
                        label="Product Name"
                        rules={[{ required: true, message: 'Please enter product name!' }]}
                    >
                        <Input placeholder="Enter product name" />
                    </Form.Item>
                    <Form.Item
                        name="productDescription"
                        label="Product Description"
                        rules={[{ required: true, message: 'Please enter product description!' }]}
                    >
                        <Input.TextArea placeholder="Enter product description" />
                    </Form.Item>
                    <Form.Item
                        name="productManager"
                        label="Product Manager"
                        rules={[{ required: true, message: 'Please select product manager!' }]}
                    >
                        <Select placeholder="Select product manager">
                            <Option value="manager1">Manager 1</Option>
                            <Option value="manager2">Manager 2</Option>
                            <Option value="manager3">Manager 3</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12} xs={24} sm={12} md={24} lg={12} xl={12}>
                    <Form.Item
                        name="projectTime"
                        label="Project Time"
                        rules={[{ required: true, message: 'Please enter project time!' }]}
                    >
                        <Col span={24} xs={24} sm={24} md={24} lg={24} xl={24}>
                            <DatePicker.RangePicker style={{ width: '100%' }} />
                        </Col>
                    </Form.Item>
                    <Form.Item
                        name="productTechnical"
                        label="Product Technical"
                        rules={[{ required: true, message: 'Please select product technical!' }]}
                    >
                        <Select placeholder="Select product technical">
                            <Option value="technical1">Technical 1</Option>
                            <Option value="technical2">Technical 2</Option>
                            <Option value="technical3">Technical 3</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12} xs={24} sm={12} md={24} lg={12} xl={12}>
                    <Form.Item
                        name="productMember"
                        label="Product Member"
                        rules={[{ required: true, message: 'Please select product member!' }]}
                    >
                        <Select mode="multiple" placeholder="Select product members">
                            <Option value="member1">Member 1</Option>
                            <Option value="member2">Member 2</Option>
                            <Option value="member3">Member 3</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12} xs={24} sm={12} md={24} lg={12} xl={12}>
                    <Form.Item
                        name="productRole"
                        label="Product Role"
                        rules={[{ required: true, message: 'Please select product role!' }]}
                    >
                        <Select mode="multiple" placeholder="Select product roles">
                            <Option value="role1">Role 1</Option>
                            <Option value="role2">Role 2</Option>
                            <Option value="role3">Role 3</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row justify="end">
                <Col>
                    <Form.Item>
                        <Button type="primary" icon={<PlusOutlined />} htmlType="submit">
                            Create Product
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};

export default ProductForm;
