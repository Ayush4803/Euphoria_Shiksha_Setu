import React from 'react'

export default function GetAssociated(){
  return (
    <div className='py-12'>
      <div className='container'>
        <h2 className='text-3xl font-semibold text-green-800 mb-6'>Volunteer / Intern With Us</h2>
        <p className='text-gray-700 max-w-2xl mb-6'>Join to help collect, sort and distribute books. We welcome volunteers for collection drives and community outreach.</p>
        <div className='card'>
          <h4 className='font-semibold'>Sign up for volunteering</h4>
          <form className='space-y-3 mt-3'>
            <input placeholder='Name' className='w-full border px-3 py-2 rounded' />
            <input placeholder='Email' className='w-full border px-3 py-2 rounded' />
            <input placeholder='Phone' className='w-full border px-3 py-2 rounded' />
            <button type='button' className='btn-primary'>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  )
}
