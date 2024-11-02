import "./globals.css";
import localFont from "next/font/local";

export const metadata = {
  title: "TMC-Assignment",
  description: "Static mobile view website",
};

const matteo = localFont({
  src: "./fonts/Matteo-Regular.woff",
  variable: "--font-matteo",
  weight: "100 700 900",
});

const neuehaas = localFont({
  src: "./fonts/NeueHaasDisplay-Roman.woff",
  variable: "--font-neuehaas",
  weight: "100 500 700 900",
});

const playfair = localFont({
  src: "./fonts/PlayfairDisplay-Regular.woff",
  variable: "--font-playfair",
  weight: "100 700 900",
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${matteo.variable} ${neuehaas.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
