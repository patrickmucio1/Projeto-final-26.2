type SectionHeadingProps = {
  title: string;
  subtitle: string;
};

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <header className="mb-12 text-center md:mb-16">
      <h2 className="text-[30px] font-bold leading-tight tracking-[-0.02em] text-[#030711] md:text-[36px]">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-[350px] text-[14px] leading-[1.45] text-[#6B7280] md:max-w-none md:text-[16px]">{subtitle}</p>
    </header>
  );
}
