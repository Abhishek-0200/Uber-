import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className='h-screen w-full bg-[url(https://images.unsplash.com/photo-1737531691773-2d4f1b79f650?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYWZmaWMlMjBsaWdodCUyMGltYWdzfGVufDB8fDB8fHww)] bg-cover bg-center flex flex-col pt-6 justify-between'>
      <img  src=" https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoid2VhcmVcL2ZpbGVcLzhGbTh4cU5SZGZUVjUxYVh3bnEyLnN2ZyJ9:weare:F1cOF9Bps96cMy7r9Y2d7affBYsDeiDoIHfqZrbcxAw?width=1200&height=417" alt="" className= ' w-20  ml-5 '/>
      <div className=' bg-white pb-8 py-4 px-4 flex justify-center items-center flex-col '>
        <h3 className=' font-bold text-[30px] '>Get Started with Uber
        </h3>
        <Link to="/user/login" className=' flex justify-center items-center bg-black text-white w-full mt-1 p-2 rounded-md '> Continue </Link>
      </div>
    </div>
  )
}

export default Start;