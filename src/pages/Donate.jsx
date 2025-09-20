import React from 'react'

export default function Donate(){
  return (
    <div className='py-12'>
      <div className='container'>
        <h2 className='text-3xl font-semibold text-green-800 mb-6'>Donate Books</h2>
        <div className='grid md:grid-cols-2 gap-6'>
          <div className='card'>
            <h4 className='font-semibold'>What to donate</h4>
            <p className='text-sm text-gray-700'>School books, story books, reference books, and colouring books in good condition.</p>
            <ul className='list-disc list-inside mt-3 text-sm text-gray-700'>
              <li>Primary & secondary school textbooks</li>
              <li>Children's story books</li>
              <li>Competitive exam books (gently used)</li>
            </ul>
          </div>
          <div className='card'>
            <h4 className='font-semibold'>Donation Form</h4>
            <form className='space-y-3'>
              <input placeholder='Your name' className='w-full border px-3 py-2 rounded' />
              <input placeholder='Phone' className='w-full border px-3 py-2 rounded' />
              <input placeholder='City' className='w-full border px-3 py-2 rounded' />
              <textarea placeholder='List of books or a short note' className='w-full border px-3 py-2 rounded'></textarea>
              <button type='button' className='btn-primary'>Submit Donation</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
