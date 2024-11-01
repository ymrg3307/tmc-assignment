import "./globals.css";

export const metadata = {
  title: "TMC-Assignment",
  description: "Static mobile view website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
