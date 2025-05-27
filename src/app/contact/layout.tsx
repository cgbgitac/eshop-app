import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | E-Shop",
  description: "Get in touch with us for any questions or support",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 