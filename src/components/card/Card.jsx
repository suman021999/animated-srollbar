import React from 'react'

function Card({img,id}) {
  return (
    <>
      <div className='bg-[#eee] h-[200px] w-[200px] rounded-xl' key={id}>
        <img src={img} className='h-[200px] w-[200px] rounded-xl bg-cover bg-center' alt="" />
      </div>
    </>
  )
}

export default Card
