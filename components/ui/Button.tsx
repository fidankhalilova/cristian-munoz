import type { ButtonHTMLAttributes } from "react";

const base =
  "inline-flex items-center justify-center rounded-lg px-5 py-3 text-base font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
const variants = {
  primary: "bg-brand text-white hover:bg-brand-hover active:scale-95",
  outline:
    "border border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800",
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
};

export default function Button({
  variant = "primary",
  className = "",
  ...rest
}: Props) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest} />
  );
}
