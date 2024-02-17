import { Jumbotron, Block } from "@/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <article>
      <Jumbotron title="Hello, Park UI" />
      <Block as="section">{children}</Block>
    </article>
  );
}
