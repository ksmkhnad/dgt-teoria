import { SECTIONS } from "@/lib/types";
import PracticeSectionClient from "./PracticeSectionClient";

export function generateStaticParams() {
  return SECTIONS.map((section) => ({ section }));
}

export default function Page({ params }: { params: { section: string } }) {
  return <PracticeSectionClient section={params.section} />;
}
