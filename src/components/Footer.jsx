const Footer = () => {
  return (
    <>
      <div className='footer px-8 py-4 flex justify-between items-center'>
        <span>Copyright ©CIP 2022</span>
        <section className='flex gap-x-4'>
          <a href="https://mobile.twitter.com/globalcert2" target="_blank" rel="noreferrer">
            <img src={require('../assets/image/icons/twitter.png')} width="40" alt='social-media-icon' className='cursor-pointer'/>
          </a>
          
          <a href="https://www.facebook.com/globalcertificate/" target="_blank" rel='noreferrer'>
            <img src={require('../assets/image/icons/facebook.png')} width="40" alt='social-media-icon' className='cursor-pointer'/>
          </a>
          
          <a href='https://sg.linkedin.com/company/globalcert' target="_blank" rel='noreferrer'>
            <img src={require('../assets/image/icons/linkedin.png')} width="40" alt='social-media-icon' className='cursor-pointer'/>
          </a>
        </section>
        <section>
          <span className='mr-4'>Privacy Policy</span>
          <span>Terms Of Use</span>
        </section>
      </div>
      {/* <p className='text-center text-gray-400'>Icons by <a href='https://freepik.com' target="_blank" rel='noreferrer'>freepik.com</a></p> */}
    </>
    
  )
}

export default Footer;