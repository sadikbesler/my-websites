import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Diyetisyen Merkez | Sağlıklı Yaşam ve Beslenme Danışmanlığı",
  description: "Kişiye özel online ve yüz yüze diyet, sporcu beslenmesi ve kurumsal danışmanlık hizmetleri. VKI ve kalori ihtiyacınızı hesaplayın.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
