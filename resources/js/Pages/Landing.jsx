import AppLayout from '@/Layouts/AppLayout'
import { Link } from '@inertiajs/react'
import React from 'react'

const LandingPage = () => {
  return (
    <AppLayout>
        <div className="container mx-auto flex justify-center">
            <div className="w-1/2 bg-gray-100 p-8 rounded-lg mt-8">
                <h1 className="text-2xl font-bold mb-4">Selamat Datang di Portal Berita</h1>
                <p className="mb-4">Dapatkan berita terbaru dari kami</p>
                <div className="flex gap-2">
                    <Link href="/berita" className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4 hover:bg-blue-600">Berita</Link>
                    <Link href="/kontak" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">Kontak</Link>
                </div>
            </div>
        </div>
    </AppLayout>
  )
}

export default LandingPage