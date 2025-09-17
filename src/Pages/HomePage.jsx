import React from 'react'
import '../index.css'
import { useNavigate } from 'react-router-dom'
import Create from './Create'
const HomePage = () => {
    const navigate=useNavigate()
  return (
    <div className='min-h-screen bg-gradient-to-r from-gray-950 from-10% via-gray-900 via-30% to-slate-950 to-90%'>
        <section className="flex flex-col items-center justify-center text-center py-20 px-4 md:py-32">
          <h1 className="text-4xl md:text-6xl bitcount-grid-double-title leading-tight text-white">
            Turn boring bills 
          </h1>
          <h1 className="text-4xl md:text-6xl bitcount-grid-double-title leading-tight mb-4 text-white">
            into beautiful brands.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
            Your invoices should be as impressive as your work. Make every bill a brand-building moment.
          </p>
          <button onClick={()=>{navigate('/create')}} className="bg-indigo-700 text-xl md:text-2xl bitcount-grid-double-title leading-tight p-3 text-white py-3 px-8 rounded-full shadow-lg hover:bg-indigo-500 transition duration-300 transform hover:scale-105 ">
            Create your first invoice..
          </button>
        </section>
        <div className='md:flex mt-9'>
            <div className=' p-5 hover:border-l-5 hover:border-l-gray-900 transition duration-900 transform'>
                <div className='text-xl md:text-2xl bitcount-grid-double-title leading-tight p-3 text-white'>Beautiful</div>
                <div className='text-lg md:text-xl text-gray-600 max-w-2xl p-3'>
                    Professionally designed and visually appealing invoices can increase the chances of clients paying promptly.
                </div>
            </div>
            <div className=' p-5 transition duration-900 transform hover:border-l-5 hover:border-l-slate-800 '>
                <div className='text-xl md:text-2xl bitcount-grid-double-title leading-tight p-3 text-white'>Free & Unlimited</div>
                <div className='text-lg md:text-xl text-gray-600 max-w-2xl p-3'>
                    Create and send as many invoices as you need — no limits, no hidden costs, just seamless billing freedom.
                </div>
            </div>
            <div className='p-5 hover:border-l-5 hover:border-l-gray-900 transition duration-900 transform'>
                <div className='text-xl md:text-2xl bitcount-grid-double-title leading-tight p-3 text-white'>Safe & Open Source</div>
                <div className='text-lg md:text-xl text-gray-600 max-w-2xl p-3'>
                    Your data stays yours — we never track, sell, or share it. Store everything locally or securely on our server — the choice is yours.
                </div>
            </div>
        </div>
    </div>

  )
}

export default HomePage