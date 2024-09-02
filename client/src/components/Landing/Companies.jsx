import Image from "next/image";
import React from "react";
import meta from '../../../public/svg/meta.svg'
import google from '../../../public/svg/google.svg'
import netflix from '../../../public/svg/netflix.svg'
import pg from '../../../public/svg/pg.svg'
import paypal from '../../../public/svg/paypal.svg'
import paynoerr from '../../../public/svg/payonerr.svg'

function Companies() {

  const imageFilter = {
    filter: 'brightness(0.5)'
  }

  return (
    <div className="flex items-center justify-center min-h-[11vh] w-full mt-5">
      <ul className={`flex max-w-4xl min-w-96 items-center justify-center gap-5`}>
          <li className='text-gray-500 text-xl'>Trusted by: </li>
          <li><Image src={meta} alt='Icon' style={imageFilter}/></li>
          <li><Image src={google} alt='Icon' style={imageFilter}/></li>
          <li><Image src={netflix} alt='Icon' style={imageFilter}/></li>
          <li><Image src={pg} alt='Icon' style={imageFilter}/></li>
          <li><Image src={paypal} alt='Icon' style={imageFilter}/></li>
          <li><Image src={paynoerr} alt='Icon' style={imageFilter}/></li>
      </ul>
    </div>
  );
}

export default Companies;
