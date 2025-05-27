'use client'

import ContactForm from "@/components/ContactForm"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <ContactForm />
        </div>
      </div>
    </div>
  )
} 