export const metadata = {
  title: 'Dean Opara - Athlet und Software-Developer',
  description: 'Diese Website ist über Dean Opara, ein junger österreichischer Software Entwickler und Athlet. Außerdem ist er beliebt unter seinen Mitschülern und kann Gitarre spielen.',
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
