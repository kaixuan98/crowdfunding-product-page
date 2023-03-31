import React from 'react';
import Logo from './Logo';
import useWindowSize from '../hooks/useWindowSize'; 
import Hamburger from './Hamburger';
import CloseMenu from './CloseMenu';

// bp-xl : 9:1:1:1
// between bp-lg and bp-md: 6:2:2:2
// bp-sm : 10:0:0:2 (logo and collaps to a burger menu)
// Q: is this DRY code? I am repeating and building more elements. 

const Navbar : React.FC<Toggle> =  ( { isActive, setToggle }:Toggle) => {

  const size: Size = useWindowSize();

  return (
    <nav className="container--fluid">
      {
        size.width <= 768? ( // phone size
            <ul className="container__row">
              <li className={`${'nav__link'} ${'container__col-11'}`}><Logo/></li>
              <li 
                className={`${'nav__link'} ${'container__col-1'}`}
                onClick={() => setToggle(!isActive)}>
                  { isActive? <CloseMenu/> : <Hamburger/>}
              </li>
            </ul>
        ):(
          size.width >= 992? ( // desktop size
            <ul className="container__row">
              <li className={`${'nav__link'} ${'container__col-9'}`}><Logo/></li>
              <li className={`${'nav__link'} ${'container__col-1'}`}>About</li>
              <li className={`${'nav__link'} ${'container__col-1'}`}>Discover</li>
              <li className={`${'nav__link'} ${'container__col-1'}`}>Get Started</li>
            </ul>
          ):(
            // the middle (tablet)
            <ul className="container__row">
              <li className={`${'nav__link'} ${'container__col-6'}`}><Logo/></li>
              <li className={`${'nav__link'} ${'container__col-2'}`}>About</li>
              <li className={`${'nav__link'} ${'container__col-2'}`}>Discover</li>
              <li className={`${'nav__link'} ${'container__col-2'}`}>Get Started</li>
            </ul>
          )
        )
      }
      {
        isActive && size.width <= 768 ? (
            <ul className={`${"container__row"} ${"smallMenu"}`}>
              <li className={`${'nav__link--black'} ${'container__col-12'} ${'text-overline'}`}>About</li>
              <li className={`${'nav__link--black'} ${'container__col-12'} ${'text-overline'}`}>Discover</li>
              <li className={`${'nav__link--black'} ${'container__col-12'} ${'text-overline'}`}>Get Started</li>
            </ul>
        ):(<></>)
      }
    </nav>
  )
}

export default Navbar