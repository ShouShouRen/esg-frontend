import { Layout } from "antd";
import AboutSection from "@/components/aboutSection";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import image from "@/image/pexels-zhengxun-lin-15379002.jpg";
import IntroSection from "@/components/introSection";
import { Content } from "antd/es/layout/layout";

const Home = () => {
  const heroData = [
    {
      src: image,
      title: "碳權交易整合平台",
    },
  ];
  const aboutData = [
    {
      title: "什麼是碳權（Carbon Credit）？",
      icon: "fa-solid fa-stamp",
      color: "#4889a2",
      content:
        "碳權是指企業或個體根據減少溫室氣體排放量所獲得的一種證書。這些證書代表了一定量的溫室氣體減排，可以在碳市場上進行買賣。這個機制鼓勵減少碳足跡，並促進投資於可再生能源和其他低碳技術。",
    },
    {
      title: "什麼是碳匯（Carbon Sink）？",
      icon: "fas fa-leaf",
      color: "#4889a2",
      content:
        "碳匯是自然界中可以吸收大氣中二氧化碳的資源，例如森林、海洋和泥炭地。它們通過光合作用等自然過程減少大氣中的二氧化碳濃度，是對抗全球暖化的重要自然資產。",
    },
    {
      title: "碳權的功能與重要性",
      icon: "fas fa-globe",
      color: "#4889a2",
      content:
        "碳權是指企業或個體根據減少溫室氣體排放量所獲得的一種證書。這些證書代表了一定量的溫室氣體減排，可以在碳市場上進行買賣。這個機制鼓勵減少碳足跡，並促進投資於可再生能源和其他低碳技術。",
    },
  ];
  const introData = [
    {
      title: "碳匯整合與交易",
      icon: "fa-solid fa-people-group",
      content:
        "平台會整合私有地和公有地的碳匯總額，即使是小單位的碳匯也能與大企業進行交易。這有助於減少土地閒置和荒廢，並提高土地的有效利用。",
    },
    {
      title: "價格機制",
      icon: "fa-solid fa-coins",
      content:
        "交易系統根據市場供需和碳排放量來調整價格，並及時計算碳稅，以量計價，確保交易的公平性和透明度。",
    },
    {
      title: "技術支持",
      icon: "fa-brands fa-ethereum",
      content: "結合區塊鏈技術，平台創建智能合約，以提高交易的安全性和公平性。",
    },
    {
      title: "環境保護與社會責任",
      icon: "fa-solid fa-earth-americas",
      content:
        "利用交易所得資金，聘請人員進行環境整理和保護，為社會提供額外的就業機會",
    },
  ];
  return (
    <Layout>
      <Header />
      <Content>
        <HeroSection data={heroData} />
        <AboutSection data={aboutData} />
        <IntroSection data={introData} />
        <Footer />
      </Content>
    </Layout>
  );
};
export default Home;
