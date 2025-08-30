interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

const SectionTitle = ({
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) => {
  const alignment =
    align === "left"
      ? "items-start text-left"
      : align === "right"
      ? "items-end text-right"
      : "items-center text-center";

  return (
    <div className={`w-full flex flex-col ${alignment} gap-3 py-4 md:py-6`}>
      <div className="inline-flex items-center gap-3">
        <span className="inline-block h-6 w-1.5 rounded-full bg-gradient-to-b from-emerald-400 to-cyan-500" />
        <h2 className="text-gradient-green hero-title text-3xl md:text-4xl">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className="text-slate-500 max-w-3xl leading-relaxed text-sm md:text-base">
          {subtitle}
        </p>
      )}
      <div className="relative mt-1 w-36 md:w-48">
        <div className="h-[2px] w-full bg-slate-200" />
        <div className="absolute -top-[1px] left-0 h-[3px] w-16 md:w-24 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full" />
      </div>
    </div>
  );
};

export default SectionTitle;
