const IntroSection = ({
  data,
}: {
  data: { title: string; icon: string; content: string }[];
}) => {
  return (
    <section className="py-12 bg-gray-50" id="intro">
      <div className="container mx-auto">
        <h2 className="text-4xl text-primary text-center font-semibold py-10">
          平台功能介紹
        </h2>
        <p className="text-lg leading-relaxed p-10 text-center max-w-5xl mx-auto">
          平臺結合了政府與民間的碳權交易平台，主要目的是促進碳匯的有效管理與交易，同時確保環境可持續發展。通過這個平台，小規模土地所有者也可以參與到碳權交易中，促進社會各界對減碳的共同參與。
        </p>
        <div className="flex flex-wrap justify-center gap-6 py-8">
          {data.map((item, index) => (
            <div key={index} className="w-5/6 lg:w-1/3">
              <div className="p-3">
                <div className="bg-white p-6 rounded-lg shadow-lg border border-blue-200 text-center min-h-[215px]">
                  <h3 className="pb-3 text-orange-500 font-bold text-2xl">
                    {item.title}
                  </h3>
                  <i
                    className={`${item.icon}`}
                    style={{ fontSize: "3.2em", color: "#4889a2" }}
                  ></i>
                  <p className="pt-3 leading-relaxed text-justify text-base">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
