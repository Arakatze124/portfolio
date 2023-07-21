export const metadata = {
  title: 'Dean Opara',
  description: 'This is a website about Dean Opara. An austrian Software Developer and Athlete. He is very cool',
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
