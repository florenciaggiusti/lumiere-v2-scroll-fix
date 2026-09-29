import "./globals.css";

export const metadata = {
  title: "Lumière — Estudio de piel",
  description: "Estética facial y corporal. Buenos Aires."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
