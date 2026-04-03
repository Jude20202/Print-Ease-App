export default function Logo({
  size = "text-2xl",
  onDark = false,
}: {
  size?: string;
  onDark?: boolean;
}) {
  return (
    <span className={`font-bold ${size} tracking-tight`}>
      <span className={onDark ? "text-white" : "text-brand-charcoal"}>print</span>
      <span className="text-brand-orange">ease</span>
    </span>
  );
}
