import React from 'react'

export default function Donate() {
  return (
    <div className='py-12 bg-green-50 min-h-screen'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-3xl sm:text-4xl font-bold text-green-800 mb-10 text-center'>
          Donate Books
        </h2>

        <div className='grid gap-8 md:grid-cols-2'>
          {/* What to Donate Card */}
          <div className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1'>
            <h4 className='text-xl font-semibold text-green-800 mb-4'>What to Donate</h4>
            <p className='text-green-700 mb-4'>
              School books, story books, reference books, and colouring books in good condition.
            </p>
            <ul className='list-disc list-inside text-green-700 space-y-2'>
              <li>Primary & secondary school textbooks</li>
              <li>Children's story books</li>
              <li>Competitive exam books (gently used)</li>
            </ul>
          </div>

          {/* Donation Form Card */}
          <div className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1'>
            <h4 className='text-xl font-semibold text-green-800 mb-4'>Donation Form</h4>
            <form className='space-y-4'>
              <input
                placeholder='Your Name'
                className='w-full border border-green-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
              />
              <input
                placeholder='Phone'
                className='w-full border border-green-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
              />
              <input
                placeholder='City'
                className='w-full border border-green-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
              />
              <textarea
                placeholder='List of books or a short note'
                className='w-full border border-green-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none'
              ></textarea>
              <button
                type='button'
                className='w-full bg-green-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-green-700 transition transform hover:-translate-y-1'
              >
                Submit Donation
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
