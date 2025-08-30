import CustomButton from "./custom-button";

interface HeroItem {
  src: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

const HeroSection = ({ data }: { data: HeroItem[] }) => {
  const item = data[0];
  return (
    <section className="relative bg-hero-green">
      <div className="relative">
        <img
          src={item.src}
          className="w-full h-[60vh] md:h-[72vh] xl:h-[86vh] object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/40 via-emerald-700/25 to-transparent" />
        <div className="pointer-events-none absolute -top-16 left-10 w-64 h-64 bg-emerald-400/25 blur-3xl rounded-full" />
        <div className="pointer-events-none absolute top-10 right-10 w-52 h-52 bg-teal-400/25 blur-3xl rounded-full" />
        <div className="pointer-events-none absolute bottom-10 left-1/3 w-72 h-72 bg-green-300/20 blur-3xl rounded-full" />

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 w-full">
            <div className="max-w-4xl text-white bg-black/35 md:bg-black/30 rounded-2xl p-6 md:p-8 ring-1 ring-white/10 backdrop-blur-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-md mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-sm tracking-wide">
                  推動永續的碳匯交易平台
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
                {item.title}
              </h1>
              {item.subtitle && (
                <p className="mt-4 text-base md:text-lg text-emerald-50/90 max-w-2xl leading-relaxed">
                  {item.subtitle}
                </p>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <CustomButton
                  href={item.ctaHref || "/carbon-trading"}
                  variant="primary"
                >
                  開始探索碳匯
                </CustomButton>
                <CustomButton
                  href={item.ctaHref || "/carbon-trading"}
                  variant="secondary"
                >
                  了解更多
                </CustomButton>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl">
                <div>
                  <p className="text-2xl md:text-3xl font-bold">500+</p>
                  <p className="text-emerald-50/90 text-sm">已上架碳匯項目</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold">99.9%</p>
                  <p className="text-emerald-50/90 text-sm">交易可用率</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold">24/7</p>
                  <p className="text-emerald-50/90 text-sm">即時監控</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
