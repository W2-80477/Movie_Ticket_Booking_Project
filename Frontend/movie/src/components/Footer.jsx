import React from 'react'
import "./footer.css"


function Footer() {
  return (
    <div>
      <Footer bgColor='light' className='text-center text-lg-left'>

        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className='text-dark' href='sunbeaminfo.in'>
            sunbeaminfo.in
          </a>
        </div>
      </Footer>
    </div>
  )
}

export default Footer
