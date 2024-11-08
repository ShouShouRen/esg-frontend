import { Footer } from "antd/es/layout/layout";

const FooterComponent = () => {
  return (
    <Footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 公司資訊 */}
        <div>
          <h3 className="text-lg font-bold mb-4">公司資訊</h3>
          <p>碳權交易整合平台</p>
          <p>地址：台北市XX區XX街XX號</p>
          <p>電話：+886 123 456 789</p>
          <p>Email：info@carbonplatform.com</p>
        </div>

        {/* 服務介紹 */}
        <div>
          <h3 className="text-lg font-bold mb-4">服務介紹</h3>
          <ul>
            <li>
              <a href="#service1" className="hover:underline">
                碳匯交易
              </a>
            </li>
            <li>
              <a href="#service2" className="hover:underline">
                價格機制
              </a>
            </li>
            <li>
              <a href="#service3" className="hover:underline">
                技術支持
              </a>
            </li>
            <li>
              <a href="#service4" className="hover:underline">
                環境保護
              </a>
            </li>
          </ul>
        </div>

        {/* 聯絡我們/社交媒體 */}
        <div>
          <h3 className="text-lg font-bold mb-4">聯絡我們</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f hover:text-blue-500"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter hover:text-blue-300"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram hover:text-pink-500"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in hover:text-blue-700"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>
          © {new Date().getFullYear()} 碳權交易整合平台. All Rights Reserved.
        </p>
      </div>
    </Footer>
  );
};

export default FooterComponent;
