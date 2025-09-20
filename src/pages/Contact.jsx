import React from 'react'

export default function Contact() {
  return (
    <div className='py-12 bg-green-50 min-h-screen'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-3xl sm:text-4xl font-bold text-green-800 mb-10 text-center'>
          Contact Us
        </h2>

        <div className='grid gap-8 md:grid-cols-2'>
          {/* Contact Form */}
          <div className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1'>
            <h4 className='text-xl font-semibold text-green-800 mb-4'>Write to Us</h4>
            <form className='space-y-4'>
              <input
                placeholder='Name'
                className='w-full border border-green-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
              />
              <input
                placeholder='Email'
                className='w-full border border-green-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
              />
              <input
                placeholder='Phone'
                className='w-full border border-green-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
              />
              <textarea
                placeholder='Message'
                className='w-full border border-green-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none'
              ></textarea>
              <button
                type='button'
                className='w-full bg-green-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-green-700 transition transform hover:-translate-y-1'
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Visit Us / Info */}
          <div className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1'>
            <h4 className='text-xl font-semibold text-green-800 mb-4'>Visit Us</h4>
            <p className='text-green-700 text-sm'>
              We operate collection drives across cities — email us to find the nearest drive.  
              Follow us on social media for updates on upcoming events and donation drives.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

