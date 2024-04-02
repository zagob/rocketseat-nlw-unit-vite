import clsx from "clsx";
import { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<"button"> {
  transparent?: boolean;
}

export function IconButton({ transparent, ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      className={clsx("border border-white/10 rounded-md p-1.5", {
        ["bg-black/10"]: transparent,
        ["bg-white/10"]: !transparent,
      })}
    />
  );
}
