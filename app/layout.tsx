import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mosaïque — Templates photo",
  description: "Transforme tes photos en histoires avec des templates éditoriaux.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
