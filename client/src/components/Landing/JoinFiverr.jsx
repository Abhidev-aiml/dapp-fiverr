import Image from "next/image";
import React from "react";

function JoinFiverr() {
  return (
    // <div className="mx-32 my-16 relative">
    //   <div className="absolute z-10 top-1/3 left-10">
    //     <h4 className="text-white text-5xl mb-10">
    //       Suddenly it&apos;s all so <i>doable.</i>
    //     </h4>
    //     <button
    //       className="border text-base font-medium px-5 py-2   border-[#1DBF73] bg-[#1DBF73] text-white rounded-md"
    //       type="button"
    //     >
    //       Join Fiverr
    //     </button>
    //   </div>
    //   <div className=" w-full h-96">
    //     <Image src="/bg-signup.webp" fill alt="signup" className="rounded-sm" />
    //   </div>
    // </div>
    <div className={`bg-[#4d1727] w-100 p-10 flex flex-col justify-center items-center mb-16 `}>
              <h2 className="text-6xl text-white font-light mt-5">Freelance services at your</h2>
              <p className="text-6xl text-orange-600 italic" style={{fontFamily:"var(--playFair)"}}>fingertips!</p>
              {/* <div> */}
              <button className="text-whitep rounded mt-10 bg-green-500 px-7 py-2">Join Fiverr</button>
              {/* </div> */}
        </div>

  );
}

export default JoinFiverr;
