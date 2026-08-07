import type { ComponentPropsWithoutRef } from "react";

type SectionShellProps = ComponentPropsWithoutRef<"section">;

export function SectionShell({ className, ...props }: SectionShellProps) {
  return (
    <section
      className={["site-section py-16 sm:py-20 lg:py-24", className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
