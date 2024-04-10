import { ConfigProvider } from 'antd';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18n';
import AuthProvider from './context/AuthContext.jsx';
import { Provider as ReduxProvider } from 'react-redux'
import './index.css';
import { store } from './redux/store.js';
import Routes from './router.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <ReduxProvider store={store}>
            <ConfigProvider
                theme={{
                    components: {
                        Layout: {
                            siderBg: '#233044',
                        },
                        Drawer: {
                            paddingLG: 0,
                        },
                        Popover: {
                            sizePopupArrow: 0,
                        },
                    },
                }}>
                <I18nextProvider i18n={i18n}>
                    <Routes />
                </I18nextProvider>
            </ConfigProvider>
        </ReduxProvider>
    </AuthProvider>
);
