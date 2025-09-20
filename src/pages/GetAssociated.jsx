import React from 'react'

export default function GetAssociated() {
  return (
    <div className='py-12 bg-green-50 min-h-screen'>
      <div className='max-w-4xl mx-auto px-4'>
        <h2 className='text-3xl sm:text-4xl font-bold text-green-800 mb-6 text-center'>
          Volunteer / Intern With Us
        </h2>
        <p className='text-green-700 text-center max-w-2xl mx-auto mb-10'>
          Join to help collect, sort and distribute books. We welcome volunteers for collection drives and community outreach.
        </p>

        <div className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1'>
          <h4 className='text-xl font-semibold text-green-800 mb-4'>Sign Up for Volunteering</h4>
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
            <button
              type='button'
              className='w-full bg-green-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-green-700 transition transform hover:-translate-y-1'
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
