// import Image from "next/image";


// export default function Home() {
//   return (
    
//     <div className=  " flex w-[1920px] bg-[#A29875] h-[134px]">
//     <div className=" flex items-center justify-center h-[94px] w-[439px] mt-5 ml-9 text-[75px] ">
//     <h1>MANZZARI</h1>
//     </div>
//     </div>
 
//   );
// }
import Image from 'next/image'
import { Rye } from 'next/font/google'
import { Libre_Bodoni } from "next/font/google";
import Header from '@/component/header';
 


 const libre = Libre_Bodoni({ subsets: ['latin'],
  weight : ['400']
  })
 
export default function MyApp() {
  return (
    
    <main className={libre.className} >
      <Header></Header>
      <div className=' bg-white flex h-full w-[1920px]'>
        <div className='mt-[316px] ml-[176px]' >
        <div className='w-[496px] h-[189px] text-[40px] leading-[65.8px] font-[700]  '> 
      <h1 className='text-black' >IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
      </div>
      <div className='h-[147px] w-[902px]  '>
        <p className=' text-[#787054] leading-[49.35px] text-[30px]'>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our <br /> desirable collection.</p>
        </div>
        <div className='pt-10'>
        <button className='bg-[#A29875] w-[288px] h-[58px] leading-[37.5px] p-[10px] text-[30px] rounded-[10px] ' >Explore Now</button> 
       </div>
        </div>
      <div className='' >
        <Image className='mt-[198px]  ' src='/right.png' alt='sad' width={462} height={647}></Image>
      </div>
      </div>
    </main>
    
  )
}
{/* <div className=' flex  w-[1920px] h-full justify-evenly  bg-slate-600'>
<div className='border-2 h-[189px] border-black mt-[316px]  '>
  <h1>IMPECCABLE CRAFTSMANSHIP AND FINESSE-</h1>
</div>
<div className=' flex ml-[1164px] mt-[198px] w-[462px]'>
<Image className='  ' alt='image' src="/right.png" width={462} height={647} ></Image>
</div>
</div> */}