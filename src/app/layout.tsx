import { Header, Footer, Providers, MyDrawer } from "@/components";
import { fontClassName } from "@/styles";
import { css, cx } from "@styled-system/css";
import { container } from "@styled-system/patterns";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={fontClassName}>
        <Providers>
          <Header />
          <main className={container({ maxWidth: "6xl" })}>{children}</main>
          <MyDrawer />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
