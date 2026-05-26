export const metadata = {
  title: "Taxalis Consulting",
  description: "Premium Buchhaltung & Consulting in Berlin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        style={{
          margin: 0,
          fontFamily: "Inter, system-ui, sans-serif",
          background: "#F5F7FA",
          color: "#0B1B2B",
        }}
      >
        {children}
      </body>
    </html>
  );
}