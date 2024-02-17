import { Jumbotron, Block } from "@/components";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article>
      <Jumbotron title="About" />
      <Block as="section">{children}</Block>
    </article>
  );
}
