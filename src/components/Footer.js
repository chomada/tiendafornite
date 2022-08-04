import React from 'react'
import Logo from '../assets/instagram.png'

const Footer = () => {
  return (
    <footer className="site-footer">


    <hr className='marginT'/>

  <div className="container">
    <div className="row">
      <div className=" col-md-8 col-sm-6 col-xs-12">
     
         
        <p className="copyright-text centrado"> <a className="copyright-text centrado " href='https://www.instagram.com/tiendafornite.arg' rel='noreferrer' target="_blank"> <img 
          
          alt =""src={Logo}/> Instagram</a>Ponete en contacto con nosotros | This website is made by blabla
        </p>
      </div>

 
    </div>
  </div>
</footer>
  )
}

export default Footer