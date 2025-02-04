import React from 'react'
import logo from '../../Assests/Untitled.jpeg'
import { Link } from 'react-router-dom'
import CountryDropDown from '../CountryDropdown';

const Header = () => {
  return (
    <>
    <div className='headerWrapper'>
      <div className='top-stripe bg-purple'>
        <div className='container'>
          <p className='mb-0 mt-0 text-center'>Due to the <b>COVID-19</b> epidemic, orders may be processed with a 
          slight delay</p>
        </div>
      </div>
       
      <div className='header'>
        <div className='container'>
          <div className='row'>
            <div className='logoWrapper d-flex align-items-center col-sm-2'>
              <Link to={'/'}> <img src={logo} alt='Logo'/></Link>
            </div>
            <div className='col-sm-10 d-flex align-items-center part2'>
              <CountryDropDown/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header
