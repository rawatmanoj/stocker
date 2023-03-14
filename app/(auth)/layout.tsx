export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="bg-baseColor">{children}</section>;
}
