export const metadata = {
  title: 'Dean Opara',
  description: 'Diese Website ist über Dean Opara, ein östrreichischer Software Entwickler und Athlet. Die Website befasst sich mit seiner Geschichte, seinen Hobbies und seinen Fähigkeiten. Außerdem bietet sie verschiedene Möglichkeiten, um ihn höchst persönlich zu kontaktieren',
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
