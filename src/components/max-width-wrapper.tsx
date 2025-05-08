import type { FC, ReactNode } from "react";

import { cn } from "@/lib/utils";

type MaxWidthWrapperType = {
  className?: string;
  children: ReactNode;
};
const MaxWidthWrapper: FC<MaxWidthWrapperType> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-2xl px-2.5 sm:px-5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
