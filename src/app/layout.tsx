export const metadata = {
  title: 'Dean Opara',
  description: 'Diese Website ist über Dean Opara, ein junger österreichischer Athlet, Software Entwickler und vieleres mehr.',
  icons: {
    icon: '/favicon.ico',
  },
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
