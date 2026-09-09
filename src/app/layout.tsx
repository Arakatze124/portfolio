export const metadata = {
  title: 'Dean Opara | Football Recruiting & IT Portfolio',
  description: 'Bilingual profile website focused on football recruiting, IT portfolio, and services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
