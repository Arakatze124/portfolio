export const metadata = {
  title: 'Dean Opara - Athlet und Software-Developer',
  description: 'Diese Website ist über Dean Opara, ein österreichischer Software Entwickler und Athlet. ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
