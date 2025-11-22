import "./globals.css";

export const metadata = {
  title: "VeeSave",
  description: "Vehicle Expenses Saver",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
