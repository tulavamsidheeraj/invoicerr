import React from 'react'

const Recipt = ({companyDetails,clientDetails,additionalInfo,invoiceDetails,items}) => {
  return (
    <div className='bg-white m-2 text-black h-full flex flex-col p-2'>
      <h1 className='text-2xl p-2'>
        Invoice - {invoiceDetails.billNumber}
      </h1>
      <hr />
      <div className='flex border-y justify-between h-20'>
        <div className='border-r w-7/16 pl-1'>
          <div className='text-lg font-light underline'>
            Billed by
          </div>
          <div className='font-medium'>{clientDetails.name}</div>
          <div>{clientDetails.address}</div>
        </div>
        <div className='border-r w-7/16 pl-1'>
          <div className='text-lg font-light underline'>
            Billed to
          </div>
          <div className='font-medium'>{companyDetails.name}</div>
          <div>{companyDetails.address}</div>
        </div>
        <div className='border-r w-1/8'>
          <img className='h-19 p-0.5' src={companyDetails.logo} alt="" />
        </div>
      </div>
      <div className='border-b py-2 '>
        Billed On : <span className='font-medium'>{invoiceDetails.date}</span>
      </div>
      <div className='grid grid-cols-8 text-lg font-light border-b p-1'>
        <div className='col-span-1'>
          S No
        </div>
        <div className='col-span-3'>
          Item Description
        </div>
        <div className='col-span-1'>
          Quantity
        </div>
        <div className='col-span-1'>
          Cost
        </div>
        <div className='col-span-2'>
          Item total cost
        </div>
      </div>
      <div>
        {items.map((item,index)=>{
          return(
            <div className='grid grid-cols-8 p-1'>
              <div className='col-span-1 place-content-center'>
                {index+1}
              </div>
              <div className='col-span-3'>
                {item.itemName}
              </div>
              <div className='col-span-1'>
                {item.itemQty}
                {console.log}
              </div>
              <div className='col-span-1'>
                {item.itemCost}
              </div>
              <div className='col-span-2'>
                {item.itemQty*item.itemCost}
              </div>
            </div>
          )
        })}
      </div>
      <div className='mt-auto'>
        <div className='flex justify-between p-4 text-xl'>
          <div>
            TOTAL COST
          </div>
          <div className='flex'>
            <div className='font-semibold mr-2'>{invoiceDetails.currency}</div>
            <div>
              {items.reduce((currTotal,item)=>{
                return ((item.itemCost*item.itemQty)+currTotal)
              },0)}
            </div>
          </div>

        </div>
        <div className='flex justify-between border-y h-auto'>
          <div className='border-r w-4/5'>
            <div>
              <div className='text-lg font-light'>
                Terms and conditions
              </div>
              <div>
                {additionalInfo.terms}
              </div>
            </div>
            <div>
              <div className='text-lg font-light'>
                Notes
              </div>
              <div>
                {additionalInfo.notes}
              </div>
            </div>
          </div>
          <div>
            <img src={companyDetails.signature} alt="" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Recipt