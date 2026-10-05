import React from 'react'
import './PDFbutton.css'
function PDFbutton() {
  return (
    <div className='pdfButtonContainer'>
      <button className='PDFbutton' disabled>Download Prescription</button>
      <p role='status'>Prescription downloads are temporarily unavailable.</p>
</div>
  )
}

export default PDFbutton
