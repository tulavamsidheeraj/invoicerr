import React, { useState,useRef } from 'react';
import SideBar from "../Components/SideBar";
import Details from "../Components/Details";
import Recipt from "../Components/Recipt";
import SubTopBar from "../Components/SubTopBar";
const Create = () => {
    const [openPanel, setOpenPanel] = useState('company');
    const [companyDetails, setCompanyDetails] = useState({
        logo: null,
        signature: null,
        name: null,
        address: null,
    });
    const [clientDetails, setClientDetails] = useState({
      name: null,
      address: null,
    });
    const [additionalInfo,setAdditionalInfo]=useState({
        notes:null,
        terms:null
    })
    const [invoiceDetails, setInvoiceDetails] = useState({
      billNumber: null,
      currency: null,
      date: null,
    });
    const [items, setItems] = useState([]);
    const reciptRef=useRef(null);
  return (
    <div>
        <div className="mx-7">
            <SubTopBar reciptRef={reciptRef} invoiceDetails={invoiceDetails} companyDetails={companyDetails} clientDetails={clientDetails} additionalInfo={additionalInfo} items={items}/>
        </div>
        <div className='flex min-h-svh'>
            <div className='max-w-1/8 h-screen'>
                <SideBar/>
            </div>
            <div className="flex-1 ">
                <Details openPanel={openPanel} setOpenPanel={setOpenPanel} companyDetails={companyDetails} setCompanyDetails={setCompanyDetails} clientDetails={clientDetails} setClientDetails={setClientDetails} additionalInfo={additionalInfo} setAdditionalInfo={setAdditionalInfo} invoiceDetails={invoiceDetails} setInvoiceDetails={setInvoiceDetails} items={items} setItems={setItems}/>
            </div>
            <div className="flex-1" >
                <Recipt ref={reciptRef} companyDetails={companyDetails} clientDetails={clientDetails} additionalInfo={additionalInfo} invoiceDetails={invoiceDetails} items={items}/>
            </div>
        </div>
    </div>
  )
}

export default Create