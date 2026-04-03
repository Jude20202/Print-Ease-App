const variants = {
  active: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  inactive: "bg-gray-100 text-gray-600",
  online: "bg-green-100 text-green-800",
  offline: "bg-red-100 text-red-700",
  setup: "bg-blue-100 text-blue-700",
};

export default function Badge({
  variant,
  children,
}: {
  variant: keyof typeof variants;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
