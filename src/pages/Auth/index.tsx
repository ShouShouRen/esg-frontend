import { login, register } from "@/api";
import { useRequest } from "ahooks";
import { Button, Form, Input, Tabs } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "@/image/logo.png";

interface LoginType {
  username: string;
  password: string;
}

interface RegisterType {
  username: string;
  password: string;
  email: string;
}

const LoginSignup = () => {
  const nav = useNavigate();
  const [loginType, setLoginType] = useState<"login" | "register">("login");
  const [form] = Form.useForm();

  const { run: handleLogin, loading: loginLoading } = useRequest(
    (data: LoginType) => login(data),
    {
      manual: true,
      onSuccess: ({ data }) => {
        localStorage.setItem("token", JSON.stringify(data));
        nav("/");
      },
    }
  );

  const { run: handleRegister } = useRequest(
    (data: RegisterType) => register(data),
    {
      manual: true,
      onSuccess: () => {
        form.resetFields();
        setLoginType("login");
      },
    }
  );

  const onFinish = (data: LoginType | RegisterType) => {
    if (loginType === "login") {
      handleLogin(data as LoginType);
    } else {
      handleRegister(data as RegisterType);
    }
  };

  return (
    <div className="w-full h-full flex flex-col xl:flex-row items-center justify-center bg-[#e3e4e6]">
      <div className="w-4/12 xl:w-4/12">
        <img
          src={logo}
          alt="logo"
          className="w-40 h-40 object-contain block xl:hidden mx-auto pb-4"
        />
        <h2 className="text-primary text-4xl font-bold leading-relaxed px-9 text-shadow hidden xl:block">
          「創新交易，綠意無限，讓碳權成為台灣的驕傲！」
        </h2>
      </div>
      <div className="w-4/12 xl:w-3/12 min-w-80">
        <div className="w-full h-[452px] shadow-md p-5 bg-white rounded-xl">
          <Tabs
            centered
            activeKey={loginType}
            onChange={(activeKey) =>
              setLoginType(activeKey as "login" | "register")
            }
          >
            <Tabs.TabPane key="login" tab="登入" />
            <Tabs.TabPane key="register" tab="註冊" />
          </Tabs>
          <div className="h-full">
            <Form
              autoComplete="off"
              layout="vertical"
              form={form}
              onFinish={onFinish}
              initialValues={{ email: "" }}
            >
              {loginType === "register" && (
                <Form.Item<LoginType | RegisterType>
                  name="username"
                  rules={[{ required: true, message: "請輸入您的姓名" }]}
                >
                  <Input className="h-12 text-lg mt-6" placeholder="姓名" />
                </Form.Item>
              )}

              <Form.Item<RegisterType>
                name="email"
                rules={[
                  { required: true, message: "請輸入您的電子郵件" },
                  { type: "email", message: "請輸入有效的電子郵件" },
                ]}
              >
                <Input className="h-12 text-lg mt-6" placeholder="電子郵件" />
              </Form.Item>

              <Form.Item<LoginType | RegisterType>
                name="password"
                rules={[{ required: true, message: "請輸入您的密碼" }]}
              >
                <Input.Password
                  className="h-12 text-lg mt-6"
                  placeholder="密碼"
                />
              </Form.Item>

              <Form.Item className="text-center">
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loginType === "login" && loginLoading}
                >
                  {loginType === "login" ? "登入" : "註冊"}
                </Button>
                {loginType === "login" && (
                  <a
                    href="/"
                    className="text-primary text-xs hover:underline block py-5"
                  >
                    忘記密碼?
                  </a>
                )}
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginSignup;
