'use client'

import { useRef, useEffect } from 'react'

export default function CameraPage() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    async function setupCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user' },
          audio: false,
        })
        if (videoRef.current) {
          videoRef.current.srcObject = stream
        }
      } catch (err) {
        console.error('Failed to access webcam:', err)
      }
    }

    setupCamera()
  }, [])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black">
      <h1 className="text-white text-2xl font-semibold mb-4">📹 Camera View</h1>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="w-full max-w-xl rounded-xl border-2 border-white shadow-lg"
      />
    </main>
  )
}
