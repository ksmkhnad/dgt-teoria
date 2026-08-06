import { THEORY } from "@/data/theory";
import ChapterClient from "./ChapterClient";

export function generateStaticParams() {
  return THEORY.map((c) => ({ id: c.id }));
}

export default function Page({ params }: { params: { id: string } }) {
  return <ChapterClient id={params.id} />;
}
