import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "BoopFart ($BOOPF) - The Internet's Silliest Meme Coin",
  description:
    "BoopFart ($BOOPF) is a revolutionary meme coin that combines the 'boop' from boopdotfun with 'fart' to create something truly magical. Join the silliest crypto community today!",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
