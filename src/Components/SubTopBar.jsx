import React from 'react';
import jsPDF from 'jspdf';

import html2canvas from 'html2canvas';
import Recipt from './Recipt';


const SubTopBar = ({companyDetails,clientDetails,additionalInfo,invoiceDetails,items,reciptRef}) => {
  if (!companyDetails || !clientDetails) {
    return <div>Loading invoice details...</div>; // Or return null, or a spinner
  }
  const DownloadButton = ({invoiceDetails}) => {
    
    const downloadPdf = async () => {
      const element = reciptRef.current;
      const canvas = await html2canvas(element,{scale:2});
      const data = canvas.toDataURL('image/png');

      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProperties = pdf.getImageProperties(data);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

      pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`invoice-${invoiceDetails.billNumber}.pdf`);
    };

    return <button onClick={downloadPdf}>Download PDF</button>;
  };
  return (
    <div className='mb-2 flex justify-end'>
        
        <div className='bg-gray-900 rounded'>
            <DownloadButton invoiceDetails={invoiceDetails}/>
        </div>
    </div>
  )
}

export default SubTopBar