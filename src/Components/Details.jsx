
import BOM from './BOM';

const Details = ({openPanel,setOpenPanel,companyDetails,setCompanyDetails,clientDetails,setClientDetails, additionalInfo, setAdditionalInfo,invoiceDetails,setInvoiceDetails,items, setItems}) => {

    const togglePanel = (panelName) => {
    setOpenPanel(openPanel === panelName ? null : panelName);
    };

    const handleTextChange = (e, setState) => {
      const { name, value } = e.target;
      setState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleFileChange = (e) => {
      const { name, files } = e.target;
      if (files.length > 0) {
        setCompanyDetails(prevState => ({
          ...prevState,
          [name]: URL.createObjectURL(files[0]),
        }));
      }
    };

    // Corrected: Handler function to delete an item
    const handleDeleteItem = (indexToDelete) => {
      // Create a new array that excludes the item at the specified index
      const newItems = items.filter((_, index) => index !== indexToDelete);
      // Update the state with the new array
      setItems(newItems);
    };
    const AccordionHeader = ({ title, panelName }) => (
        <div 
          className="flex justify-between items-center cursor-pointer p-4   hover:bg-gray-800 transition-colors"
          onClick={() => togglePanel(panelName)}
        >
          <h2 className="text-lg font-bold bitcount-grid-double-title">{title}</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transform transition-transform duration-300 ${openPanel === panelName ? 'rotate-180' : 'rotate-0'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
    );

    return (
    <div className='h-full p-4'>
        {/* Company Details Section */}
        
        <div className="border-b border-gray-200  overflow-hidden mx-1">
          <AccordionHeader title="Your Company Details" panelName="company" />
          {openPanel === 'company' && (
            <div className='p-6 '>
              <div className='flex flex-wrap gap-4 mb-4'>
                <div className='flex flex-col'>
                  <label className='font-semibold'>Upload Company Logo</label>
                  <input 
                    type="file" 
                    name="logo"
                    onChange={handleFileChange} 
                    className='mt-1 border rounded p-1 text-sm text-stone-500 file:mr-5 file:py-1 file:px-3 file:border-[1px] file:text-sm file:font-medium file:bg-stone-5 file:text-stone-700 hover:file:cursor-pointer hover:file:bg-gray-50 hover:file:text-gray-700'
                  />
                  {companyDetails.logo && (
                    <img src={companyDetails.logo} alt="Company Logo" className="mt-2 h-16 object-contain rounded " />
                  )}
                </div>
                <div className='flex flex-col'>
                  <label className='font-semibold'>Upload Company Signature</label>
                  <input 
                    type="file" 
                    name="signature"
                    onChange={handleFileChange} 
                    className='mt-1 border rounded p-1 text-sm text-stone-500 file:mr-5 file:py-1 file:px-3 file:border-[1px] file:text-sm file:font-medium file:bg-stone-5 file:text-stone-700 hover:file:cursor-pointer hover:file:bg-gray-50 hover:file:text-gray-700'
                  />
                  {companyDetails.signature && (
                    <img src={companyDetails.signature} alt="Company Signature" className="mt-2 h-16 object-contain rounded" />
                  )}
                </div>
              </div>
              <div className='mb-4'>
                <label className='block font-semibold'>Company Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={companyDetails.name || ''}
                  onChange={(e) => handleTextChange(e, setCompanyDetails)} 
                  className='p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500' 
                  placeholder='e.g., Your Business Inc.' 
                />
              </div>
              <div>
                <label className='block font-semibold'>Company Address</label>
                <input 
                  type="text" 
                  name="address"
                  value={companyDetails.address || ''}
                  onChange={(e) => handleTextChange(e, setCompanyDetails)} 
                  className='p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500' 
                  placeholder='e.g., 123 Main St, Anytown' 
                />
              </div>
            </div>
          )}
        </div>
          
        {/* Client Details Section */}
          
        <div className="border-b border-gray-200  overflow-hidden mx-1">
          <AccordionHeader title="Client Details" panelName="client" />
          {openPanel === 'client' && (
            <div className='p-6'>
              <div className='mb-4'>
                <label className='block font-semibold'>Client Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={clientDetails.name || ''}
                  onChange={(e) => handleTextChange(e, setClientDetails)} 
                  className='p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500' 
                  placeholder='e.g., Bill Gates' 
                />
              </div>
              <div>
                <label className='block font-semibold'>Client Address</label>
                <input 
                  type="text" 
                  name="address"
                  value={clientDetails.address || ''}
                  onChange={(e) => handleTextChange(e, setClientDetails)} 
                  className='p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500' 
                  placeholder='e.g., White House USA' 
                />
              </div>
            </div>
          )}
        </div>

        {/* Invoice Details Section */}
        <div className="border-b border-gray-200 overflow-hidden mx-1">
          <AccordionHeader title="Invoice Details" panelName="invoice" />
          {openPanel === 'invoice' && (
            <div className='p-6'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div>
                  <label className='block font-semibold'>Bill Number</label>
                  <input 
                    type="text" 
                    name="billNumber"
                    value={invoiceDetails.billNumber || ''}
                    onChange={(e) => handleTextChange(e, setInvoiceDetails)}
                    className='p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500' 
                    placeholder='e.g., INV-001' 
                  />
                </div>
                <div>
                  <label className='block font-semibold'>Currency</label>
                  <input 
                    type="text" 
                    name="currency"
                    value={invoiceDetails.currency || ''}
                    onChange={(e) => handleTextChange(e, setInvoiceDetails)} 
                    className='p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500' 
                    placeholder='e.g., INR' 
                  />
                </div>
                <div>
                  <label className='block font-semibold'>Date</label>
                  <input 
                    type="date" 
                    name="date"
                    value={invoiceDetails.date || ''}
                    onChange={(e) => handleTextChange(e, setInvoiceDetails)} 
                    className='p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500' 
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Invoice Items Section */}
        <div className="border-b border-gray-200 overflow-hidden mx-1">
          <AccordionHeader title="Invoice Items" panelName="items" />
          {openPanel === 'items' && (
            <div className='p-6'>
              {items.map((item, index) => (
                <div key={index} className='flex items-center justify-between p-4 mb-2 border rounded-lg shadow-sm'>
                  <div className='flex items-center space-x-4'>
                    <div className='flex items-center justify-center p-2 rounded-lg bg-gray-300 text-gray-700'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
                      </svg>
                    </div>
                    <div>
                      <div className='text-zinc-500 font-medium'>{item.itemName}</div>
                      <div className='text-sm text-gray-500'>
                        {item.itemCost} &times; {item.itemQty}
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center space-x-4'>
                    <div className='font-bold text-gray-700'>
                      ${(item.itemCost * item.itemQty).toFixed(2)}
                    </div>
                    <button 
                      onClick={() => handleDeleteItem(index)}
                      className='p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors'
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
              
              <BOM items={items} setItems={setItems} />
              
              
            </div>
          )}
        </div>

        {/* Additinal Information */}          
        <div className="border-b border-gray-200 overflow-hidden mx-1">
          <AccordionHeader title="Additional Information" panelName="additionalInfo" />
          {openPanel === 'additionalInfo' && (
            <div className='p-6'>
              <div className='mb-4'>
                <label className='block font-semibold'>Notes</label>
                <input 
                  type="text" 
                  name="notes"
                  value={additionalInfo.notes || ''}
                  onChange={(e) => handleTextChange(e, setAdditionalInfo)} 
                  className='p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500' 
                  placeholder='e.g., Ojas Gambheera' 
                />
              </div>
              <div>
                <label className='block font-semibold'>Terms</label>
                <input 
                  type="text" 
                  name="terms"
                  value={additionalInfo.terms || ''}
                  onChange={(e) => handleTextChange(e, setAdditionalInfo)} 
                  className='p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500' 
                  placeholder='e.g., karewa tensai wan tachi haida' 
                />
              </div>
            </div>
          )}
        </div>
    </div>
  );
};

export default Details;