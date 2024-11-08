import Footer from "@/components/footer";
import Header from "@/components/header";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
  Select,
  Upload,
} from "antd";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";

const UploadCarbon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasCarbon, setHasCarbon] = useState(false);
  const [form] = Form.useForm();

  // 台灣縣市選項
  const taiwanCities = [
    { label: "台北市", value: "台北市" },
    { label: "新北市", value: "新北市" },
    { label: "桃園市", value: "桃園市" },
    { label: "台中市", value: "台中市" },
    { label: "台南市", value: "台南市" },
    { label: "高雄市", value: "高雄市" },
    { label: "基隆市", value: "基隆市" },
    { label: "新竹市", value: "新竹市" },
    { label: "嘉義市", value: "嘉義市" },
    { label: "宜蘭縣", value: "宜蘭縣" },
    { label: "新竹縣", value: "新竹縣" },
    { label: "桃園縣", value: "桃園縣" },
    { label: "苗栗縣", value: "苗栗縣" },
    { label: "台中縣", value: "台中縣" },
    { label: "南投縣", value: "南投縣" },
    { label: "彰化縣", value: "彰化縣" },
    { label: "台南縣", value: "台南縣" },
    { label: "高雄縣", value: "高雄縣" },
    { label: "屏東縣", value: "屏東縣" },
    { label: "澎湖縣", value: "澎湖縣" },
    { label: "金門縣", value: "金門縣" },
    { label: "連江縣", value: "連江縣" },
  ];

  const handleSubmit = async (values: any) => {
    console.log("Form values:", values);
  };

  return (
    <>
      <Header />
      <Content className="container py-28">
        <div className="flex justify-between align-center">
          <h4 className="text-2xl pl-4 border-l-8 md:w-3/12 xl:w-2/12 font-bold border-lime-900">
            上架碳匯
          </h4>
          <div className="flex justify-end px-4 lg:px-0">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setIsModalOpen(true)}
              className="bg-primary"
            >
              上架碳匯
            </Button>
          </div>
        </div>
        {hasCarbon && (
          <div className="flex justify-center items-center h-60">
            <p className="text-lg text-gray-500">尚未上架碳匯</p>
          </div>
        )}
      </Content>
      <Footer />
      <Modal
        title="上架碳匯"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={600}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="mt-4"
        >
          <Form.Item
            name="location"
            label="所在位置"
            rules={[{ required: true, message: "請選擇所在位置" }]}
          >
            <Select options={taiwanCities} placeholder="請選擇縣市" />
          </Form.Item>

          <Form.Item name="description" label="細節描述">
            <Input.TextArea rows={4} placeholder="請輸入細節描述（選填）" />
          </Form.Item>

          <Form.Item
            name="price"
            label="出售金額 (元)"
            rules={[{ required: true, message: "請輸入出售金額" }]}
          >
            <InputNumber className="w-full" min={0} placeholder="請輸入金額" />
          </Form.Item>

          <Form.Item
            name="carbonAmount"
            label="碳匯總量 (噸)"
            rules={[{ required: true, message: "請輸入碳匯總量" }]}
          >
            <InputNumber
              className="w-full"
              min={0}
              placeholder="請輸入碳匯總量"
            />
          </Form.Item>

          <Form.Item
            name="needStaff"
            label="整理人員需求"
            rules={[{ required: true, message: "請選擇是否需要整理人員" }]}
          >
            <Radio.Group>
              <Radio value={true}>是</Radio>
              <Radio value={false}>否</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="images"
            label="實景照片"
            rules={[{ required: true, message: "請上傳實景照片" }]}
          >
            <Upload
              listType="picture-card"
              maxCount={5}
              beforeUpload={() => false}
            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>上傳照片</div>
              </div>
            </Upload>
          </Form.Item>

          <Form.Item
            name="contact"
            label="聯絡方式"
            rules={[{ required: true, message: "請輸入聯絡方式" }]}
          >
            <Input placeholder="請輸入聯絡方式" />
          </Form.Item>

          <Form.Item className="mb-0 flex justify-end">
            <Button onClick={() => setIsModalOpen(false)} className="mr-2">
              取消
            </Button>
            <Button type="primary" htmlType="submit" className="bg-green-600">
              送出審核
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UploadCarbon;
