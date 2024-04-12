import { Button, Col, Drawer, Layout, Row, Switch, Tooltip } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useNavigate } from 'react-router-dom';
import MenuSvg from '../../assets/icons/MenuIcon';
import SettingIcon from '../../assets/icons/SettingIcon';
import MenuSider from '../../components/sider/MenuSider';
import { useAuth } from '../../hooks/useAuth';
import './ProtectedRoute.scss';
const { Header, Content, Sider } = Layout;

const ProtectedRoute = () => {
    const { i18n, t } = useTranslation();
    const navigate = useNavigate();
    const { logout } = useAuth();
    const [open, setOpen] = useState(false);
    const [siderOpen, setSiderOpen] = useState(true);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const toggleSider = () => {
        setSiderOpen(!siderOpen);
    };

    const logoutButton = async () => {
        await logout();
        navigate('/login');
    };

    return (
        <Layout hasSider className='font-sans h-full w-full'>
            <Sider
                id='sider_container'
                className={`h-full w-10 ant-layout-sider ${
                    siderOpen ? 'opened' : ''
                }`}
                trigger={<MenuSvg onClick={toggleSider} />}>
                <MenuSider />
            </Sider>

            <Drawer
                placement='left'
                onClose={onClose}
                size='large'
                closable={false}
                width={200}
                open={open}
                className='h-full top-0 left-0 bottom-0'>
                <MenuSider />
            </Drawer>

            <Row className='h-full w-full flex'>
                <Col span={24}>
                    <Header
                        id='header-container'
                        className='
                            h-[100px] bg-inherit w-full flex sticky top-0 z-10'>
                        <Row className='w-full' justify='space-between'>
                            <Col span={8} className='flex items-center'>
                                <Button
                                    shape='circle'
                                    id='show-sidebar-btn'
                                    className='bg-inherit'
                                    onClick={showDrawer}
                                    icon={<MenuSvg />}
                                />
                            </Col>
                            <Col
                                span={8}
                                className='flex justify-end items-center gap-5'>
                                <Switch
                                    checkedChildren='EN'
                                    unCheckedChildren='VI'
                                    defaultChecked={
                                        localStorage.getItem('lang') === 'en'
                                            ? true
                                            : false
                                    }
                                    onChange={(e) => {
                                        localStorage.setItem(
                                            'lang',
                                            e ? 'en' : 'vi'
                                        );
                                        i18n.changeLanguage(e ? 'en' : 'vi');
                                    }}
                                />
                                <Tooltip title='Log out'>
                                    <Button
                                        onClick={logoutButton}
                                        shape='circle'
                                        icon={<SettingIcon />}
                                    />
                                </Tooltip>
                            </Col>
                        </Row>
                    </Header>
                </Col>
                <Col span={24} className='p-5'>
                    <Content className='overflow-y-clip'>
                        <Outlet />
                    </Content>
                </Col>
            </Row>
        </Layout>
    );
};

export default ProtectedRoute;
