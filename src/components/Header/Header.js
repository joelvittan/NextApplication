"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
//  let count=0
//   const [inc, setinc] = useState(0);
//   const [dec, setdec] = useState(0)

//   const addBtn=async()=>{
//     count++
//     console.log(count)
// }
//   const subBtn=()=>{
//     count--
//     console.log(count)
// }

  return (

    <>
      <div className="h-auto bg-slate-600 flex justify-between p-3 w-screen ">
        <Link href={"/home"} className="text-slate-100">Home</Link>
        <div className="flex gap-3 align-middle justify-center">
          {/* <button
            type="button"
            className="bg-slate-900 p-1 rounded-full"
            onClick={addBtn}
          >
            +
          </button>
          <button
            type="button"
            className="bg-slate-900 p-1 rounded-full"
            onClick={subBtn}
          >
            -
          </button> */}
          <Link href={"/"}>HomeMain</Link>
          {/* {console.log(fetchedData())} */}
        </div>
      </div>
    </>
  );
};

export default Header
