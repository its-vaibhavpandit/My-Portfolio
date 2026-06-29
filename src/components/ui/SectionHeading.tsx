interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-16 text-center lg:text-left">
      <span className="font-mono-code text-[var(--color-accent-cyan)] tracking-[0.2em] uppercase block mb-3 text-[10px]">
        {label}
      </span>
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-heading-section text-white tracking-tight"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-xs sm:text-sm text-[var(--color-text-tertiary)] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
