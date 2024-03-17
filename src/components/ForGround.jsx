import React, { useRef } from 'react'
import Card from './Card'

function ForGround() {
  const ref =  useRef()
  const data = [
    {
      title : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      filesize : '.9mb',
      close : true,
      tag : { isOpen : true, tagTitle: "Doemload Now ", tagColor:"green" }

    },
    {
      title : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      filesize : '.9mb',
      close : true,
      tag : { isOpen : true, tagTitle: "Doemload Now ", tagColor:"blue" }

    },
    {
      title : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      filesize : '.9mb',
      close : true,
      tag : { isOpen : true, tagTitle: "Doemload Now ", tagColor:"green" }

    },
  ]
  return (
    <>
      <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-4'>
        {data.map((item,index)=>(
          
           <Card data={item} refrence={ref}/>
        ))}
      </div>
    </>
  )
}

export default ForGround
