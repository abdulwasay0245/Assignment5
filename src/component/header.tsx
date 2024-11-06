import React from 'react'
import { Rye } from "next/font/google";

const inter = Rye({ subsets: ['latin'],
    weight : ['400']
    })

function Header() {
  return (
    <main className={inter.className}>
    <div className=  " flex w-[1920px] bg-[#A29875] h-[134px]">
    <div className=" flex items-center justify-center h-[94px] w-[439px] mt-5 ml-9 text-[75px] ">
    <h1>MANZZARI</h1>
    </div>
    </div>
    </main>
  )
}

export default Header