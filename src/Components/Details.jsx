import React from 'react'
import { useState } from 'react';
const Details = () => {

  const [companyLogo,setCompanyLogo]=useState(null);
  const [companySignature,setCompanySignature]=useState(null);
  const [companyName,setCompanyName]=useState(null);
  const [companyAddress,setCompanyAddress]=useState(null);

  const handleLogoChange=(e)=>{
    setCompanyLogo(URL.createObjectURL(e.target.files[0]))
  }
  const handleSignatureChange=(e)=>{
    setCompanySignature(URL.createObjectURL(e.target.files[0]))
  }
  const handleCompanyNameChange=(e)=>{
    setCompanyName(e.target.value)
  }
  const handleCompanyAddressChange=(e)=>{
    setCompanyAddress(e.target.value)
  }

  return (
    <div className='h-full'>
        <div className='border rounded-xl p-2 m-2'>
            <div>
                Your Company name
            </div>
            <div className='flex'>
                <div className='px-4 border-r'>
                    <div>
                        Upload Company Logo
                    </div>
                    <div className='border'>
                        <input type="file" onChange={handleLogoChange}/>
                    </div>
                </div>
                <div className='px-4'>
                    <div>
                        Upload Company Sign
                    </div>
                    <div className='border'>
                        <input type="file" onChange={handleSignatureChange}/>
                    </div>
                </div>
            </div>
            <div>
                <div className='p-2'>Company name</div>
                <div className='px-2'>
                    <input type="text" onChange={handleCompanyNameChange} className='p-2 border border-gray-800 rounded w-3/5 h-auto' placeholder='Bill gates' />
                </div>
            </div>
            <div>
                <div className='p-2'>Company Address</div>
                <div className='px-2'>
                    <input type="text" onChange={handleCompanyAddressChange} className='p-2 border border-gray-800 rounded w-3/5 h-auto' placeholder='Bill gates' />
                </div>
            </div>
        </div>
        <div className='border rounded-xl p-2 m-2'>
            <div>
                Client Details
            </div>
            <div>
                <div className='p-2'>Client name</div>
                <div className='px-2'>
                    <input type="text" className='p-2 border border-gray-800 rounded w-3/5 h-auto' placeholder='Bill gates' />
                </div>
            </div>
            <div>
                <div className='p-2'>Client Address</div>
                <div className='px-2'>
                    <input type="text" className='p-2 border border-gray-800 rounded w-3/5 h-auto' placeholder='White house USA' />
                </div>
            </div>
        </div>
        <div className='border rounded-xl p-2 m-2'>
            <div>
                Invoice Details
            </div>
            <div>
                <div>
                    <div className='p-2'>Bill Number</div>
                    <div className='px-2'>
                        <input type="text" className='p-2 border border-gray-800 rounded w-3/5 h-auto' placeholder='INV-001' />
                    </div>
                </div>
                <div>
                    <div className='p-2'>Currency</div>
                    <div className='px-2'>
                        <input type="text" className='p-2 border border-gray-800 rounded w-3/5 h-auto' placeholder='INR' />
                    </div>
                </div>
                <div>
                    <div className='p-2'>Date</div>
                    <div className='px-2'>
                        <input type="date" className='p-2 border border-gray-800 rounded w-3/5 h-auto' placeholder='' />
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>
                Invoice Items
            </div>
            <div>
                
            </div>
        </div>
    </div>
  )
}

export default Details