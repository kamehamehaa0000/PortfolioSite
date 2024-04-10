import React from 'react'

const Grill = () => {
  const cnt = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 1, 2,
    3, 4, 5, 6, 7, 8, 9, 10,
  ]
  const cntmid = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  return (
    <div className="w-full h-full hidden xl:flex justify-center items-center border-2 border-black rounded-full overflow-hidden ">
      {cnt.map((l, index) => {
        return (
          <>
            <div className="w-[2px] hover:bg-white  hover:rotate-[-6deg]  m-[3px] h-full bg-black"></div>
          </>
        )
      })}

      {cntmid.map((l, index) => {
        return (
          <>
            <div className="w-[2px]  hover:bg-white  m-[3px] h-full bg-black"></div>
          </>
        )
      })}
      {cnt.map((l, index) => {
        return (
          <>
            <div className="w-[2px]  hover:bg-white  hover:rotate-[6deg]  m-[3px] h-full bg-black"></div>
          </>
        )
      })}
    </div>
  )
}

export default Grill
