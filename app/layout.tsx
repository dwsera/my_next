import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import { CustomNavbar } from "./components/Navbar";
import { Footer } from "./components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body>
        <Providers>
        {/* min-h-screen 确保了 body 的最小高度为视口高度,flex 布局和 flex-col 类使得子元素在垂直方向上排列
        ，justify-between 类则确保了 Footer 始终位于页面的底部 */}
          <div className="min-h-screen flex flex-col justify-between">
            <CustomNavbar></CustomNavbar>
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
