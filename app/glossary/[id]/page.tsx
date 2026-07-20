import { TERMS } from "@/data/terms";
import TermDetailClient from "./TermDetailClient";

export function generateStaticParams() {
  return TERMS.map((t) => ({ id: t.id }));
}

export default function Page({ params }: { params: { id: string } }) {
  return <TermDetailClient id={params.id} />;
}
