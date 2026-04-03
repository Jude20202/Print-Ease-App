"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "dark" | "outline";
  fullWidth?: boolean;
  children: ReactNode;
}

const variants = {
  primary: "bg-brand-blue hover:bg-blue-700 text-white",
  accent: "bg-brand-orange hover:bg-orange-700 text-white",
  dark: "bg-brand-charcoal hover:bg-gray-800 text-white",
  outline: "border border-gray-300 text-brand-charcoal hover:bg-gray-50",
};

export default function Button({
  variant = "primary",
  fullWidth = false,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-lg px-6 py-3 font-medium transition-colors text-sm
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
