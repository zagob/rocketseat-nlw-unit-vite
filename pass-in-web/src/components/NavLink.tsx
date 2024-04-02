import { ComponentProps } from "react";

interface NavLinkProps extends ComponentProps<"a"> {}

export function NavLink({ children, ...props }: NavLinkProps) {
  return (
    <a href="" className="font-medium text-sm" {...props}>
      {children}
    </a>
  );
}
