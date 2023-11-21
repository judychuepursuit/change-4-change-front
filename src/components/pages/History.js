import { Link } from 'react-router-dom';
import React from 'react';
import logo from "../../reward-img/logo.png";
 function History(props) {
    props.hideNavBar();
  return (
    <div className="history">
        <section>
        <img src={logo} alt="logo" width="15%" height="25%" className='logo' />
        <Link to='/'>
        <button className="hm-bttn">Home</button>
        </Link>
        </section>

        <section>
        <h4>transaction</h4>
        <h1>history</h1>
        </section>

        <section>

        </section>

    </div>
  );
}

export default History; 