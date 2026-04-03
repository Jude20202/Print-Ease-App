import { ReactNode } from "react";

export default function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-sm ${className}`}>
      {children}
    </div>
  );
}
