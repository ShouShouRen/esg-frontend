const HeroSection = ({ data }: { data: { src: string; title: string }[] }) => {
  return (
    <div className="md:block hidden">
      <div className="mask-dark"></div>
      {data.map((item, index) => (
        <div key={index}>
          <img src={item.src} className="w-full h-screen" alt="" />
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center z-10 text-white">
            <div className="container text-white">
              <h2 className="text-white text-4xl md:text-3xl lg:text-5xl xl:text-6xl w-full leading-relaxed font-medium">
                {item.title}
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default HeroSection;
