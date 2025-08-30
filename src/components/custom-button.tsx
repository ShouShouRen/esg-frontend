import { ReactNode } from "react";

interface CustomButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  className?: string;
}

const CustomButton = ({
  children,
  href,
  onClick,
  variant = "primary",
  icon,
  className = "",
}: CustomButtonProps) => {
  const baseClasses =
    "custom-button group inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl no-underline";

  const variants = {
    primary:
      "custom-button-primary relative bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white hover:scale-105 overflow-hidden",
    secondary:
      "custom-button-secondary bg-emerald-600/80 backdrop-blur-sm border-2 border-emerald-400/50 text-white hover:bg-emerald-600 hover:border-emerald-400",
  };

  const Component = href ? "a" : "button";

  return (
    <Component
      {...(href ? { href } : { onClick })}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {variant === "primary" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
        </>
      )}

      {icon && <span className="custom-button-icon relative z-10">{icon}</span>}
      <span className="custom-button-text relative z-10">{children}</span>
    </Component>
  );
};

export default CustomButton;
