import React from 'react'
import Card from '../card/Card'
import {Firstpage} from '../../data.js'
import {secondpage} from '../../data.js'
import {thirdpage} from '../../data.js'
import {forthpage} from '../../data.js'
import {fifthpage} from '../../data.js'
import {sixpage} from '../../data.js'
import {sevenpage} from '../../data.js'
import "../../index.css"

const Home = () => {
  return (
    <>
      <section className='bg-[#bbb8b8] fixed  overflow-hidden flex items-center min-h-screen w-[100vw] '>
  
     
        
      <div className='-mx-3'>
      <div className='h-screen animate-marquee relative w-[239px]  flex items-center gap-y-3 flex-col '>
        
        {
          Firstpage.map((data,index)=>(
            <Card key={index} id={data.id} img={data.img} />
          ))
        }
        
      </div>
      <div className='h-screen animate-marquee2 absolute top-12  w-[239px]  flex items-center gap-y-3 flex-col '>
        
        {
          Firstpage.map((data,index)=>(
            <Card key={index} id={data.id} img={data.img} />
          ))
        }
        
      </div>
      </div>
        
     
        
        <div className='-mx-3 '>
        <div className='h-screen animate-marqueex relative  w-[239px]  flex items-center gap-y-3 flex-col'>
          {
            secondpage.map((data,index)=>(
              <Card key={index} id={data.id} img={data.img} />
            ))
          }
        </div>
        <div className='h-screen  animate-marqueex2 absolute top-12 w-[239px] flex items-center gap-y-3 flex-col'>
          {
            secondpage.map((data,index)=>(
              <Card key={index} id={data.id} img={data.img} />
            ))
          }
        </div>
        </div>
        
        
          <div className='-mx-3'>
          <div className='h-screen animate-marquee relative w-[239px]  flex items-center gap-y-3 flex-col '>
          {
            thirdpage.map((data,index)=>(
              <Card key={index} id={data.id} img={data.img} />
            ))
          }
        </div>
        <div className='h-screen animate-marquee2 absolute top-12 w-[239px]  flex items-center gap-y-3 flex-col '>
          {
            thirdpage.map((data,index)=>(
              <Card key={index} id={data.id} img={data.img} />
            ))
          }
        </div>
          </div>
        


          <div className='-mx-3'>
          <div className='h-screen animate-marqueex relative w-[239px]  flex items-center gap-y-3 flex-col '>
          {
            forthpage.map((data,index)=>(
              <Card key={index} id={data.id} img={data.img} />
            ))
          }
        </div>
        <div className='h-screen animate-marqueex2 absolute top-12 w-[239px]  flex items-center gap-y-3 flex-col '>
          {
            forthpage.map((data,index)=>(
              <Card key={index} id={data.id} img={data.img} />
            ))
          }
        </div>
          </div>
        

          <div className='-mx-3'>
          <div className='h-screen animate-marquee relative w-[239px]  flex items-center gap-y-3 flex-col '>
          {
            fifthpage.map((data,index)=>(
              <Card key={index} id={data.id} img={data.img} />
            ))
          }
        </div>
        <div className='h-screen animate-marquee2 absolute top-12 w-[239px]  flex items-center gap-y-3 flex-col '>
          {
            fifthpage.map((data,index)=>(
              <Card key={index} id={data.id} img={data.img} />
            ))
          }
        </div>
          </div>

        
          <div className='-mx-3'>
        <div className='h-screen animate-marqueex relative w-[239px]  flex items-center gap-y-3 flex-col '>
          {
            sixpage.map((data,index)=>(
              <Card key={index} id={data.id} img={data.img} />
            ))
          }
        </div>
        <div className='h-screen animate-marqueex2 absolute top-12 w-[239px]  flex items-center gap-y-3 flex-col '>
          {
            sixpage.map((data,index)=>(
              <Card key={index} id={data.id} img={data.img} />
            ))
          }
        </div>
        </div>
         
        <div className='-ml-4'>
        <div className='h-screen animate-marquee relative  w-[239px]  flex items-center gap-y-3 flex-col '>
          {
            sevenpage.map((data,index)=>(
              <Card key={index} id={data.id} img={data.img} />
            ))
          }
        
        </div>
        <div className='h-screen animate-marquee2 absolute top-12 w-[239px]  flex items-center gap-y-3 flex-col '>
          {
            sevenpage.map((data,index)=>(
              <Card key={index} id={data.id} img={data.img} />
            ))
          }
        
        </div>
        </div>
        

      </section>



     
    </>
  )
}

export default Home

  
