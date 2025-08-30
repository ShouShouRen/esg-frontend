import SectionTitle from "@/components/section-title";

const AboutSection = ({
  data,
}: {
  data: { title: string; icon: string; color: string; content: string }[];
}) => {
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <SectionTitle title="碳權與碳匯介紹" />
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-5 text-center py-3 gap-6 md:gap-8">
          {data.map((item, index) => (
            <div key={index}>
              <div className="p-4 md:p-6 card-elevated">
                <h3 className="leading-8 text-orange-400 text-2xl font-semibold pb-3 md:pb-4">
                  {item.title}
                </h3>
                <i
                  className={item.icon}
                  style={{ fontSize: "3.2em", color: item.color }}
                ></i>
                <p className="p-4 leading-8 text-dark text-base md:text-lg text-justify">
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
