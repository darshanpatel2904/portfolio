import React from "react";

type StarBorderProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties["animationDuration"];
  };

const StarBorder = <T extends React.ElementType = "button">({
  as,
  className = "",
  color = "white",
  speed = "6s",
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || "button";

  return (
    <Component
      className={`relative inline-block  overflow-hidden rounded-[20px] ${className}`}
      {...(rest as any)}
    >
      <div
        className="animate-star-movement-bottom absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="animate-star-movement-top absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] rounded-full z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className="relative z-1  border border-gray-800 text-white text-center  rounded-[20px]">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
