import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='footer fixed-bottom'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)',
      display: "flex",
      justifyContent: "center",
      position: "relative",
      left: 0,
      minHeight: 0,
      textAlign: "center",
}}>
        &copy; {new Date().getFullYear()} Copyright:{'By Eloi '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          Brawlers.com
        </a>
      </div>
    </MDBFooter>
  );
}