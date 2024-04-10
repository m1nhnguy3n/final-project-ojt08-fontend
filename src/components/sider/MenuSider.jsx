import { Col, Layout, Menu, Row, Space } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import DashboardSvg from '../../assets/icons/DashboardIcon';
import OrderSvg from '../../assets/icons/OrderIcon';
import PageSvg from '../../assets/icons/PageIcon';
import Logo from '../../assets/logo.png';
import './MenuSider.scss';
const { Sider } = Layout;

const MenuSider = ({ ...other }) => {
    const { t } = useTranslation();

    const { pathname } = useLocation();
    const key = pathname.split('/')[1];
    const navigate = useNavigate();

    const [activeItem, setActiveItem] = useState(key ? key : '');

    useEffect(() => {
        setActiveItem(key);
    }, [key]);

    const items = [
        {
            key: '',
            icon: <DashboardSvg />,
            label: t('SIDE_BAR.DASHBOARD'),
        },
        {
            key: 'employee',
            icon: <PageSvg />,
            label: t('SIDE_BAR.PAGE'),
        },
        {
            key: 'project',
            icon: <OrderSvg className='w-3 h-3' />,
            label: t('SIDE_BAR.ORDERS'),
        },
    ];

    return (
        <>
            <Sider className='h-full w-10' trigger={null} {...other} style={{}}>
                <Row className='h-screen justify-items-center'>
                    <Col span={24} className=''>
                        <Space className='p-5'>
                            <img src={Logo} alt='' />
                        </Space>
                        <Menu
                            className='font-semibold text-[#637381]'
                            selectedKeys={activeItem}
                            mode='inline'
                            theme='light'>
                            {items.map((menuItem) =>
                                menuItem.children ? (
                                    <SubMenu
                                        key={menuItem.key}
                                        icon={menuItem.icon}
                                        theme='light'
                                        title={menuItem.label}>
                                        {menuItem.children.map((childItem) => (
                                            <Menu.Item
                                                onClick={() => {
                                                    navigate(childItem.key),
                                                        setActiveItem(
                                                            childItem.key
                                                        );
                                                }}
                                                className={`mr-5 ${
                                                    activeItem === childItem.key
                                                        ? 'ant-menu-item-selected'
                                                        : ''
                                                }`}
                                                key={childItem.key}>
                                                {childItem.label}
                                            </Menu.Item>
                                        ))}
                                    </SubMenu>
                                ) : (
                                    <Menu.Item
                                        onClick={() => {
                                            navigate(menuItem.key),
                                                setActiveItem(menuItem.key);
                                            console.log(menuItem.key);
                                        }}
                                        key={menuItem.key}
                                        icon={menuItem.icon}>
                                        {menuItem.label}
                                    </Menu.Item>
                                )
                            )}
                        </Menu>
                    </Col>
                    <Col span={24} className='flex items-end'></Col>
                </Row>
            </Sider>
        </>
    );
};

export default MenuSider;
