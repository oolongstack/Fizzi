import Header from "@/components/header";
import ViewCanvas from "@/components/view-canvas";
import { repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";
import localFont from "next/font/local";
import "./app.css";

const alpino = localFont({
  src: "../../public/fonts/Alpino-Variable.woff2",
  weight: "100 900", // 100 - 900
  display: "swap",
  variable: "--font-alpino",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alpino.variable}>
      <body className="overflow-x-hidden bg-yellow-300">
        <Header />
        <main>
          {children}
          <ViewCanvas />
        </main>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
