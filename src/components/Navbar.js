// import React, { useState } from "react";
// // import { MenuItems } from "./MenuItems"
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import { Button } from "./Button";
// import Dropdown from "./Dropdown";

// function Navbar(props) {
//   console.log(props);

//   const [click, setClick] = useState(false);
//   const [dropdown, setDropdown] = useState(false);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const onMouseEnter = () => {
//     if (window.innerWidth < 960) {
//       setDropdown(false);
//     } else {
//       setDropdown(true);
//     }
//   };

//   const onMouseLeave = () => {
//     if (window.innerWidth < 960) {
//       setDropdown(false);
//     } else {
//       setDropdown(false);
//     }
//   };

//   return (
//     <>
//       <nav className={props.hidden ? "navbar hidden" : "navbar"}>
//         <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
//           <h5>
//             change 4 change <i className="fa-solid fa-coins"></i>{" "}
//           </h5>
//         </Link>
//         <div className="menu-icon" onClick={handleClick}>
//           <i className={click ? "fas fa-times" : "fas fa-bars"} />
//         </div>
//         <div className={click ? "nav-menu active" : "nav-menu"}>
//           <li className="nav-item">
//             <Link to="/" className="nav-links" onClick={closeMobileMenu}>
//               home
//             </Link>
//           </li>
//           <li
//             className="nav-item"
//             onMouseEnter={onMouseEnter}
//             onMouseLeave={onMouseLeave}
//           >
//             <Link
//               to="/how-it-works"
//               className="nav-links"
//               onClick={closeMobileMenu}
//             >
//               how it works <i className="fas fa-caret-down" />
//             </Link>
//             {dropdown && <Dropdown />}
//           </li>

//           <li className="nav-item">
//             <Link to="/rewards" className="nav-links" onClick={closeMobileMenu}>
//               rewards
//             </Link>
//           </li>

//           <li className="nav-item">
//             <Link
//               to="/connect-us"
//               className="nav-links"
//               onClick={closeMobileMenu}
//             >
//               {/* was Contact Us, now connect */}
//               connect
//             </Link>
//           </li>

//           <li className="nav-item">
//             <Link
//               to="/register"
//               className="nav-links-mobile"
//               onClick={closeMobileMenu}
//             >
//               sign up
//             </Link>
//           </li>
//         </div>
//         <Button />
//       </nav>
//     </>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
// import { MenuItems } from "./MenuItems"
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";
import Dropdown from "./Dropdown";
import { Nav, NavDropdown } from "react-bootstrap";

function Navbar(props) {
  console.log(props);

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const navigate = useNavigate;

  function logOut() {
    navigate("/login");
  }

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
      <nav className={props.hidden ? "navbar hidden" : "navbar"}>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <h5>
            change 4 change <i className="fa-solid fa-coins"></i>{" "}
          </h5>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <div className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/how-it-works"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              how it works <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className="nav-item">
            <Link to="/rewards" className="nav-links" onClick={closeMobileMenu}>
              rewards
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/connect-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              {/* was Contact Us, now connect */}
              connect
            </Link>
          </li>

          <li className="nav-item">
            <Nav>
              <NavDropdown title="Khadija Williams">
                <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </li>
        </div>
        {/* <Button /> */}
      </nav>
    </>
  );
}

export default Navbar;
