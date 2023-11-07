import React, { useState } from 'react';
// import { MenuItems } from "./MenuItems"
import { Link } from 'react-router-dom';
import './Navbar.css'
import { Button } from "./Button"
import Dropdown from './Dropdown';


function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const onMouseEnter = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };
  
    const onMouseLeave = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(false);
      }
    };
  
    return (
      <>
        <nav className='navbar'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <h5>change 4 change <i className="fa-solid fa-coins"></i></h5>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li
              className='nav-item'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About <i className='fas fa-caret-down' />
              </Link>
              {dropdown && <Dropdown />}
            </li>

            <li className='nav-item'>
              <Link
                to='/rewards'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Rewards
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/contact-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>

            {/* <li className='nav-item'>
              <Link
                to='/payment'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Payment Form
              </Link>
            </li> */}

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          <Button />
        </nav>
      </>
    );
  }
  
  export default Navbar;
  




// class Navbar extends Component {
//     state = { clicked: false}

//     handleClick = () => {
//         this.setState({ clicked: !this.state.clicked})
//     }

//     render() {
//         return(
//             <nav className="NavbarItems">
//                 <h1 className="navbar-logo">change 4 change<i className="fa-sharp fa-solid fa-coins"></i></h1>
//                 <div className="menu-icon" onClick={this.handleClick}>
//                     <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}>
//                     </i>
                    
//                 </div>
//                 <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
//                     {MenuItems.map((item, index) => {
//                         return (
//                             <li key={index}>
//                                 <a className={item.cName} href={item.url}>
//                                 {item.title}
//                                 </a>
//                             </li>
//                         )
//                     })}
//                 </ul>
//                 <Button>Sign Up</Button>
//             </nav>
//         )
//     }
// }
// export default Navbar