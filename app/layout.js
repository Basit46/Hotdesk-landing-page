import "./globals.css";

export const metadata = {
  title: "Hotdesk",
  description: "Space for your next big move.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="mx-auto max-w-[1440px]">{children}</body>
    </html>
  );
}
