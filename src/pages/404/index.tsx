import CustomButton from "@/components/custom-button";
import { Home, Leaf } from "lucide-react";

const NotFound = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-emerald-50/30 to-green-50/50">
      <div className="relative container mx-auto px-6 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl w-full text-center">
          <div className="relative mb-2">
            <h1 className="text-[8rem] md:text-[12rem] leading-none font-black tracking-wider bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent drop-shadow-sm select-none">
              404
            </h1>
            <div className="flex justify-center mt-4">
              <div className="h-1 w-32 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full" />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              頁面迷路了 🌿
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              抱歉，您要尋找的碳匯項目頁面似乎不存在。
              <br />
              讓我們引導您回到正確的永續之路。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <CustomButton
              href="/"
              variant="primary"
              icon={<Home className="w-4 h-4" />}
            >
              回到首頁
            </CustomButton>
          </div>

          <div className="relative">
            <div className="flex justify-center items-center gap-2 text-emerald-600/70 text-sm font-medium">
              <Leaf className="w-4 h-4" />
              <span>永續發展 · 綠色未來</span>
              <Leaf className="w-4 h-4" />
            </div>

            <div className="mt-8 h-16 overflow-hidden">
              <svg
                className="mx-auto w-full max-w-2xl h-20"
                viewBox="0 0 800 40"
                fill="none"
              >
                <path
                  d="M0 20 Q 100 5, 200 20 T 400 20 Q 500 35, 600 20 T 800 20"
                  stroke="url(#waveGradient)"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.6"
                >
                  <animate
                    attributeName="d"
                    dur="4s"
                    repeatCount="indefinite"
                    values="M0 20 Q 100 5, 200 20 T 400 20 Q 500 35, 600 20 T 800 20;
                            M0 20 Q 100 35, 200 20 T 400 20 Q 500 5, 600 20 T 800 20;
                            M0 20 Q 100 5, 200 20 T 400 20 Q 500 35, 600 20 T 800 20"
                  />
                </path>
                <defs>
                  <linearGradient id="waveGradient" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="50%" stopColor="#34d399" />
                    <stop offset="100%" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
