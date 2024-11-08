const AboutSection = ({
  data,
}: {
  data: { title: string; icon: string; color: string; content: string }[];
}) => {
  return (
    <section className="hero" id="about">
      <div className="container">
        <h2 className="text-4xl text-primary text-center font-semibold py-10">
          碳權與碳匯介紹
        </h2>
        <div className="flex flex-wrap mt-5 justify-center lg:justify-start text-center py-3">
          {data.map((item, index) => (
            <div key={index} className="w-5/6 lg:w-1/3">
              <div className="p-3">
                <h3 className="leading-8 text-orange-400 text-2xl font-semibold pb-4">
                  {item.title}
                </h3>
                <i
                  className={item.icon}
                  style={{ fontSize: "3.2em", color: item.color }}
                ></i>
                <p className="p-4 leading-8 text-dark text-lg text-justify">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
