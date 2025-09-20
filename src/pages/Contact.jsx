import React from 'react'

export default function Contact(){
  return (
    <div className='py-12'>
      <div className='container'>
        <h2 className='text-3xl font-semibold text-green-800 mb-6'>Contact Us</h2>
        <div className='grid md:grid-cols-2 gap-6'>
          <div className='card'>
            <h4 className='font-semibold'>Write to us</h4>
            <form className='space-y-3 mt-3'>
              <input placeholder='Name' className='w-full border px-3 py-2 rounded' />
              <input placeholder='Email' className='w-full border px-3 py-2 rounded' />
              <input placeholder='Phone' className='w-full border px-3 py-2 rounded' />
              <textarea placeholder='Message' className='w-full border px-3 py-2 rounded'></textarea>
              <button type='button' className='btn-primary'>Send Message</button>
            </form>
          </div>
          <div className='card'>
            <h4 className='font-semibold'>Visit Us</h4>
            <p className='text-sm text-gray-700'>We operate collection drives across cities — email us to find the nearest drive.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
