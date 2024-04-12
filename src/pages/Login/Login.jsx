import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  Col,
  Divider,
  Form,
  Input,
  Row,
  Space,
  Typography,
  notification,
} from "antd";
import { useTranslation } from "react-i18next";
import { Navigate, useNavigate } from "react-router-dom";
import iconGoogle from "../../assets/img/google-icon.png";
import Button from "../../components/atoms/Button/Button";
import { Toast } from "../../components/toast/Toast";
import { useAuth } from "../../hooks/useAuth";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./Login.scss";

const Login = () => {
  const { loginWithGoogle } = useAuth();

  const { getItem } = useLocalStorage();

  const navigate = useNavigate();
  const { t } = useTranslation();
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type, message) => {
    api[type]({
      message,
    });
  };

  // if (getItem("accessToken")) {
  //   return <Navigate to="/" />;
  // }
  const handleClick = async () => {
    await loginWithGoogle().then(() => {
      // if (data.user.email === import.meta.env.VITE_APP_EMAIL) {
      navigate("/");
      Toast("success", t("TOAST.LOGIN_SUCCESS"));
      // } else {
      //   return openNotificationWithIcon("error", `${t("LOGIN.ERROR")}`);
      // }
    });
  };

  // const onFinish = async (values) => {
  //   await axiosInstance.post("login", values).then((response) => {
  //     if (response) {
  //       navigate("/");
  //       Toast("success", t("TOAST.LOGIN_SUCCESS"));
  //       return setToken(response.data);
  //     } else {
  //       return openNotificationWithIcon("error", `${t("LOGIN.ERROR")}`);
  //     }
  //   });
  // };
  return (
    <div id="main-container">
      {contextHolder}
      <Row gutter={30} className="auth-sidebar items-center">
        <Col xs={0} sm={16} md={16}>
          <img
            src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/03/staffmanagement6.jpg"
            alt=""
          />
        </Col>
        <Col xs={24} sm={8} md={8} className="form-login bg-[#F9F6FF] h-full">
          <Space direction="vertical" className="form-content">
            <Typography className="title-login">{t("LOGIN.TEXT")}</Typography>
            <Button
              className="btn-login flex flex-grow items-center"
              type="secondary"
              block
              onClick={handleClick}
            >
              <Row className="w-full">
                <Col span={2}>
                  <img
                    className="self-start"
                    src={iconGoogle}
                    style={{
                      width: "30px",
                    }}
                  />
                </Col>
                <Col span={20} className="justify-center">
                  {t("LOGIN.WITH_GOOGLE")}
                </Col>
              </Row>
            </Button>
            <Divider>{t("LOGIN.WITH_EMAIL")}</Divider>
            <Form
              name="normal_login"
              className="login-form w-100"
              initialValues={{
                remember: true,
              }}
              // onFinish={onFinish}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                  type="email"
                />
              </Form.Item>
              <Form.Item
                className="grid  pt-2"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item className="grid justify-items-center pt-2 w-full">
                <Col span={24} >
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="btn-login w-[385px]"
                  >
                    Log in
                  </Button>
                </Col>
              </Form.Item>
            </Form>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
