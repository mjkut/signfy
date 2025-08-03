'use client'

import { useEffect, useState } from 'react'

export default function HomePage() {
  const [status, setStatus] = useState('Checking API...')

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/health')
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.message)
      })
      .catch((err) => {
        console.error(err)
        setStatus('API is unreachable')
      })
  }, [])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">
        SignFy
      </h1>
      <p className="text-lg text-gray-700">
        🔌 Backend Status: <strong>{status}</strong>
      </p>
    </main>
  )
}
