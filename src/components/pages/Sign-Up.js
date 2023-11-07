// import React from 'react';
// import '../../App.css';

// export default function SignUp() {
//   return <h1 className='sign-up'>SIGN UP</h1>;
// }

import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (  
  <div className="signup">
  <Link to="/register"><h1>sign up</h1></Link>
  <Link to="/payment"><h1>payment</h1></Link>
</div>
);

}