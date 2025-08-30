import { changePassword } from "@/api";
import { useRequest } from "ahooks";
import {
  Button,
  Form,
  Input,
  message,
  Card,
  Tabs,
  Avatar,
  Divider,
} from "antd";
import { UserOutlined, LockOutlined, SafetyOutlined } from "@ant-design/icons";
import logo from "@/image/logo.png";

interface ChangePasswordType {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const AccountManagement = () => {
  const [form] = Form.useForm();

  const { run: handleChangePassword, loading: changePasswordLoading } =
    useRequest(
      (data: { currentPassword: string; newPassword: string }) =>
        changePassword(data),
      {
        manual: true,
        onSuccess: () => {
          message.success("密碼變更成功！");
          form.resetFields();
        },
        onError: (error: unknown) => {
          console.error("變更密碼錯誤:", error);

          const axiosError = error as {
            response?: { status?: number; data?: { message?: string } };
            code?: string;
          };
          if (axiosError?.response?.status === 404) {
            message.error("API 端點不存在，請聯繫管理員");
          } else if (axiosError?.response?.status === 401) {
            message.error("認證失敗，請重新登入");
          } else if (axiosError?.response?.status === 400) {
            const errorMessage =
              axiosError?.response?.data?.message || "請求參數錯誤";
            message.error(errorMessage);
          } else if (axiosError?.response?.status === 500) {
            message.error("伺服器錯誤，請稍後再試");
          } else if (axiosError?.code === "ERR_NETWORK") {
            message.error("網路連接失敗，請檢查網路設定");
          } else {
            message.error("密碼變更失敗，請檢查原密碼是否正確");
          }
        },
      }
    );

  const onFinish = (data: ChangePasswordType) => {
    if (data.newPassword !== data.confirmPassword) {
      message.error("新密碼與確認密碼不一致");
      return;
    }

    if (data.currentPassword === data.newPassword) {
      message.error("新密碼不能與原密碼相同");
      return;
    }

    message.loading("正在變更密碼...", 0);

    handleChangePassword({
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
    });
  };

  const getUserInfo = () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        JSON.parse(token);
        return {
          email: "user@example.com",
          username: "用戶名稱",
          joinDate: "2024-01-01",
        };
      } catch (error) {
        console.error("解析 token 失敗:", error);
      }
    }
    return null;
  };

  const userInfo = getUserInfo();

  const tabItems = [
    {
      key: "profile",
      label: (
        <span>
          <UserOutlined />
          個人資料
        </span>
      ),
      children: (
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Avatar size={64} src={logo} />
            <div>
              <h3 className="text-lg font-semibold">{userInfo?.username}</h3>
              <p className="text-gray-600">{userInfo?.email}</p>
              <p className="text-sm text-gray-500">
                加入時間：{userInfo?.joinDate}
              </p>
            </div>
          </div>

          <Divider />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium mb-2">帳號狀態</h4>
              <p className="text-green-600">正常</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium mb-2">最後登入</h4>
              <p className="text-gray-600">2024-01-15 14:30</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "security",
      label: (
        <span>
          <LockOutlined />
          安全設定
        </span>
      ),
      children: (
        <div className="space-y-6">
          <Card title="變更密碼" className="shadow-sm">
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                name="currentPassword"
                label="目前密碼"
                rules={[{ required: true, message: "請輸入目前密碼" }]}
              >
                <Input.Password
                  placeholder="請輸入目前密碼"
                  size="large"
                  prefix={<LockOutlined />}
                />
              </Form.Item>

              <Form.Item
                name="newPassword"
                label="新密碼"
                rules={[
                  { required: true, message: "請輸入新密碼" },
                  { min: 6, message: "密碼長度至少6位" },
                ]}
              >
                <Input.Password
                  placeholder="請輸入新密碼"
                  size="large"
                  prefix={<LockOutlined />}
                />
              </Form.Item>

              <Form.Item
                name="confirmPassword"
                label="確認新密碼"
                rules={[
                  { required: true, message: "請確認新密碼" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("兩次輸入的密碼不一致"));
                    },
                  }),
                ]}
              >
                <Input.Password
                  placeholder="請再次輸入新密碼"
                  size="large"
                  prefix={<LockOutlined />}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={changePasswordLoading}
                  size="large"
                  className="w-full"
                >
                  變更密碼
                </Button>
              </Form.Item>
            </Form>
          </Card>

          <Card title="安全提醒" className="shadow-sm">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <SafetyOutlined className="text-blue-500 mt-1" />
                <div>
                  <h4 className="font-medium">密碼安全建議</h4>
                  <p className="text-sm text-gray-600">
                    建議使用包含大小寫字母、數字和特殊符號的強密碼
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <SafetyOutlined className="text-green-500 mt-1" />
                <div>
                  <h4 className="font-medium">定期更新密碼</h4>
                  <p className="text-sm text-gray-600">
                    建議每3-6個月更新一次密碼，確保帳號安全
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
  ];

  if (!userInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">請先登入</h2>
          <p className="text-gray-600">您需要登入後才能訪問帳號管理頁面</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">帳號管理</h1>
          <p className="text-gray-600">管理您的個人資料和安全設定</p>
        </div>

        <Card className="shadow-lg">
          <Tabs
            defaultActiveKey="profile"
            items={tabItems}
            className="account-tabs"
          />
        </Card>
      </div>
    </div>
  );
};

export default AccountManagement;
