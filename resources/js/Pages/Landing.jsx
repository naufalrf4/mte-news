import AppLayout from '@/Layouts/AppLayout'
import React from 'react'

const LandingPage = () => {
  return (
    <AppLayout>
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Home</h1>
            <p className="text-gray-600">Welcome to the home page.</p>
        </div>
    </AppLayout>
  )
}

export default LandingPage