import React from 'react';
import {Form, Input, Select, Row, Col, DatePicker, Button, Divider, Typography, Breadcrumb} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {useTranslation} from 'react-i18next';
import {useNavigate} from "react-router-dom";

const {Option} = Select;

const ProductForm = () => {
    const navigate = useNavigate();
    const {t} = useTranslation();

    const onFinish = (values) => {
        console.log('Received values:', values);
    };

    return (
        <div>
            <Row justify="space-between" align="middle" className='h-max'>
                <Col span={24} md={12}>
                    <Typography.Title level={2} style={{color: 'black'}}>{t('PROJECTS.CREATEPROJECT')}</Typography.Title>
                </Col>
                <Col span={24} md={12} style={{textAlign: 'right'}}>
                    <Button onClick={() => navigate('')} type="primary"
                            style={{
                                backgroundColor: '#000',
                                borderColor: '#000',
                                color: '#fff'
                            }}>
                        {t('PROJECTS.SAVEPROJECT')}</Button>
                </Col>
            </Row>
            <Breadcrumb className="my-4 text-[#101011] cursor-pointer">
                <Breadcrumb.Item onClick={() => {
                    navigate("/");
                }}
                >{t('PROJECTS.PROJECT5')}</Breadcrumb.Item>
                <Breadcrumb.Item onClick={() => {
                    navigate("/project");
                }}
                >{t('PROJECTS.CREATE1')}</Breadcrumb.Item>
            </Breadcrumb>
            <Divider className="divider-dark"/>
            <Form
                name="product_form"
                layout="vertical"
                onFinish={onFinish}
            >
                <Row gutter={16}>
                    <Col span={12} xs={24} sm={12} md={24} lg={12} xl={12}>
                        <Form.Item
                            name="productName"
                            label={t('PROJECTS.PRODUCT')}
                            rules={[{required: true, message: 'Please enter product name!'}]}
                        >
                            <Input placeholder={t('PROJECTS.PRODUCT1')}/>
                        </Form.Item>
                        <Form.Item
                            name="productTechnical"
                            label={t('PROJECTS.TECHNICAL')}
                            rules={[{required: true, message: 'Please select product technical!'}]}
                        >
                            <Select placeholder={t('PROJECTS.TECHNICAL1')}>
                                <Option value="technical1">{t('PROJECTS.SELECT4')}</Option>
                                <Option value="technical2">{t('PROJECTS.SELECT5')}</Option>
                                <Option value="technical3">{t('PROJECTS.SELECT6')}</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="productManager"
                            label={t('PROJECTS.MANAGER')}
                            rules={[{required: true, message: 'Please select product manager!'}]}
                        >
                            <Select placeholder={t('PROJECTS.MANAGER1')}>
                                <Option value="manager1">{t('PROJECTS.SELECT1')}</Option>
                                <Option value="manager2">{t('PROJECTS.SELECT2')}</Option>
                                <Option value="manager3">{t('PROJECTS.SELECT3')}</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12} xs={24} sm={12} md={24} lg={12} xl={12}>
                        <Form.Item
                            name="projectTime"
                            label={t('PROJECTS.TIME')}
                            rules={[{required: true, message: 'Please enter project time!'}]}
                        >
                            <Col span={24} xs={24} sm={24} md={24} lg={24} xl={24}>
                                <DatePicker.RangePicker style={{width: '100%'}}/>
                            </Col>
                        </Form.Item>

                        <Form.Item
                            name="productDescription"
                            label={t('PROJECTS.DESCRIPTION')}
                            rules={[{required: true, message: 'Please enter product description!'}]}
                        >
                            <Input.TextArea placeholder={t('PROJECTS.PRODUCT2')}/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12} xs={24} sm={12} md={24} lg={12} xl={12}>
                        <Form.Item
                            name="productMember"
                            label={t('PROJECTS.MEMBER')}
                            rules={[{required: true, message: 'Please select product member!'}]}
                        >
                            <Select mode="multiple" placeholder={t('PROJECTS.MEMBER1')}>
                                <Option value="member1">{t('PROJECTS.SELECT7')}</Option>
                                <Option value="member2">{t('PROJECTS.SELECT8')}</Option>
                                <Option value="member3">{t('PROJECTS.SELECT9')}</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12} xs={24} sm={12} md={24} lg={12} xl={12}>
                        <Form.Item
                            name="productRole"
                            label={t('PROJECTS.ROLE')}
                            rules={[{required: true, message: 'Please select product role!'}]}
                        >
                            <Select mode="multiple" placeholder={t('PROJECTS.ROLE1')}>
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
                            <Button type="primary" style={{backgroundColor: '#000', borderColor: '#000', color: '#fff'}}
                                    icon={<PlusOutlined/>} htmlType="submit">
                                {t('PROJECTS.CREATE')}
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default ProductForm;
