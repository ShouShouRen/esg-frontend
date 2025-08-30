import { login, register } from "@/api";
import { useRequest } from "ahooks";
import { Button, Form, Input, Tabs, App as AntdApp } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "@/image/logo.png";
import SectionTitle from "@/components/section-title";

interface LoginType {
  email: string;
  password: string;
}

interface RegisterType {
  username: string;
  email: string;
  password: string;
}

const FeatureItem = ({ color, text }: { color: string; text: string }) => (
  <div className="flex items-center space-x-2">
    <div className={`w-3 h-3 ${color} rounded-full`}></div>
    <span className="text-sm opacity-80">{text}</span>
  </div>
);

const HeroSection = () => (
  <div className="space-y-4">
    <div>
      <img
        src={logo}
        alt="Logo"
        className="w-20 h-20 md:w-24 md:h-24 object-contain"
      />
    </div>
    <div className="chip">綠能企業 • ESG</div>
    <h1 className="text-3xl md:text-4xl font-semibold text-gradient-green">
      歡迎來到碳匯交易平台
    </h1>
    <p className="text-slate-600 leading-relaxed max-w-md">
      加入我們，共同為地球的永續發展貢獻一份力量。透過創新的碳權交易機制，讓環保行動更有價值。
    </p>
    <div className="flex items-center gap-4 pt-2">
      <FeatureItem color="bg-green-400" text="安全交易" />
      <FeatureItem color="bg-teal-400" text="即時監控" />
      <FeatureItem color="bg-amber-400" text="透明管理" />
    </div>
  </div>
);

const LoginForm = ({
  loginType,
  onFinish,
  loading,
}: {
  loginType: "login" | "register";
  onFinish: (data: LoginType | RegisterType) => void;
  loading: boolean;
}) => {
  const [form] = Form.useForm();

  return (
    <Form
      autoComplete="off"
      layout="vertical"
      form={form}
      onFinish={onFinish}
      className="mt-6"
    >
      {loginType === "register" && (
        <Form.Item
          name="username"
          rules={[{ required: true, message: "請輸入您的用戶名" }]}
        >
          <Input placeholder="用戶名" size="large" />
        </Form.Item>
      )}

      <Form.Item
        name="email"
        rules={[
          { required: true, message: "請輸入您的電子郵件" },
          { type: "email", message: "請輸入有效的電子郵件" },
        ]}
      >
        <Input placeholder="電子郵件" size="large" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: "請輸入您的密碼" }]}
      >
        <Input.Password placeholder="密碼" size="large" />
      </Form.Item>

      <Form.Item className="mb-0">
        <div className="relative flex w-full items-center">
          {loginType === "login" && (
            <div className="forgot-password absolute left-1/2 -translate-x-1/2">
              <a href="/">忘記密碼?</a>
            </div>
          )}
          <div className="flex-1"></div>
          <Button
            className="btn-primary ml-auto"
            type="primary"
            htmlType="submit"
            loading={loading}
            size="large"
          >
            {loginType === "login" ? "登入" : "註冊"}
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

const FormCard = ({
  loginType,
  onTabChange,
  onFinish,
  loading,
}: {
  loginType: "login" | "register";
  onTabChange: (activeKey: string) => void;
  onFinish: (data: LoginType | RegisterType) => void;
  loading: boolean;
}) => (
  <div className="login-form-card">
    <SectionTitle title="開始您的碳匯之旅" />
    <div className="login-form">
      <Tabs
        centered
        activeKey={loginType}
        onChange={onTabChange}
        items={[
          { key: "login", label: "登入" },
          { key: "register", label: "註冊" },
        ]}
      />

      <LoginForm loginType={loginType} onFinish={onFinish} loading={loading} />
    </div>
  </div>
);

const LoginSignup = () => {
  const nav = useNavigate();
  const [loginType, setLoginType] = useState<"login" | "register">("login");

  const { message } = AntdApp.useApp();

  const { run: handleLogin, loading: loginLoading } = useRequest(
    (data: LoginType) => login(data),
    {
      manual: true,
      onSuccess: (response) => {
        if (response && response.data) {
          localStorage.setItem("token", JSON.stringify(response.data));
          message.success({ content: "登入成功！", duration: 1 }).then(() => {
            window.dispatchEvent(new Event("auth:changed"));
            nav("/carbon-trading");
          });
        } else {
          message.error("登入失敗，請檢查帳號密碼");
        }
      },
      onError: (error: unknown) => {
        const resp = (
          error as {
            response?: {
              data?: { message?: string; data?: { message?: string } };
            };
          }
        )?.response;
        const fallbackMsg =
          resp?.data?.message ||
          resp?.data?.data?.message ||
          "登入失敗，請稍後再試";
        message.open({
          type: "error",
          content: fallbackMsg,
          key: "request-error",
        });
      },
    }
  );

  const { run: handleRegister, loading: registerLoading } = useRequest(
    (data: RegisterType) => register(data),
    {
      manual: true,
      onSuccess: () => {
        message.success("註冊成功！請登入");
        setLoginType("login");
      },
      onError: (error) => {
        console.error("註冊錯誤:", error);
        message.error("註冊失敗，請稍後再試");
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

  const handleTabChange = (activeKey: string) => {
    setLoginType(activeKey as "login" | "register");
  };

  const isLoading =
    (loginType === "login" && loginLoading) ||
    (loginType === "register" && registerLoading);

  return (
    <div className="min-h-screen auth-hero flex items-center justify-center px-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <HeroSection />
        <div className="auth-card p-6 md:p-10">
          <FormCard
            loginType={loginType}
            onTabChange={handleTabChange}
            onFinish={onFinish}
            loading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
