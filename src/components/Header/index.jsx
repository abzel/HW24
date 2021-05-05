import React from 'react'
import './Header.css'
import logo from './images/logo.png'
// import getStarted from './images/get_started.png'
import facebook from './images/f.png'
import m from './images/M.png'
import vector from './images/Vector.png'
import twitter from './images/twitter.png'

function Header() {
  return (
    <div className='header'>
      <img src={logo} className='logo1'/>
      <h1 className='text1'>Features</h1>
      <h1 className='text2'>Documentation</h1>
      <h1 className='text3'>Pricing</h1>
      <h1 className='text4'>Blog</h1>
      <h1 className='text5'>Home</h1>
      <button className='getStarted'/>
      <h1 className='text6'>Get started</h1>
      <img src={facebook} className="facebook"/>
      <img src={m} className="m"/>
      <img src={vector} className="vector"/>
      <img src={twitter} className="twitter"/>
    </div>
  )
}

export default Header
