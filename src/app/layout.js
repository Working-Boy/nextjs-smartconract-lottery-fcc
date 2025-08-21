import "./globals.css";
import Providers from "../components/Providers";



export const metadata = {
  title: "Smart Contract Lottery",
  description: "Our Smart Contract Lottery DApp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
