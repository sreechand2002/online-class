import React from 'react';
import { useHistory, Link } from 'react-router-dom';
const Navbar = () => {
  const history = useHistory();
  //   const renderList = () => {
  //     if (localStorage.getItem('jwt')) {
  //       return [
  //         <li>
  //           <Link to='/profile'>profile</Link>
  //         </li>,
  //         <li>
  //           <Link to='/create'>Add post</Link>
  //         </li>,
  //         <li style={{ margin: 'auto 1rem' }}>
  //           <button
  //             type='submit'
  //             value='Login'
  //             onClick={() => {
  //               localStorage.clear();
  //               dispatch({ type: 'CLEAR' });
  //               history.push('/login');
  //             }}
  //             className='btn red darken-3'
  //             style={{ width: '100%' }}
  //           >
  //             Logout
  //           </button>
  //         </li>
  //       ];
  //     } else {
  //       return [
  //         <li>
  //           <Link to='/login'>Login</Link>
  //         </li>,
  //         <li>
  //           <Link to='/signup'>Signup</Link>
  //         </li>
  //       ];
  //     }
  //   };
  return (
    <nav style={{ marginBottom: '5rem' }}>
      <div className='nav-wrapper white'>
        <Link className='brand-logo center'>
          <img src='/Images/Logo.png' width='20%' />
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link style={{ color: 'black' }} to='/profile'>
              profile
            </Link>
          </li>
          <li>
            <Link style={{ color: 'black' }} to='/create'>
              Add post
            </Link>
          </li>
          <li style={{ margin: 'auto 1rem' }}>
            <button type='submit' value='Login' className='btn red darken-3' style={{ width: '100%' }}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
