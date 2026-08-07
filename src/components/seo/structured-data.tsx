import type { JsonLd } from "@/types/seo";

type StructuredDataProps = {
  data: JsonLd;
};

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
