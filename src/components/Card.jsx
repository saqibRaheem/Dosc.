import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa'
import { LuDownload } from 'react-icons/lu'
import { IoClose } from "react-icons/io5"
import { motion } from "framer-motion"
function Card({ data,refrence }) {
  return (
    <motion.div drag dragConstraints={refrence}  dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className='relative w-60 h-72 rounded-[30px] bg-zinc-900/90 text-white p-5 overflow-hidden '>
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.title}</p>
      <div className="footer absolute bottom-0  w-full left-0">
        <div className="flex items-center justify-between  py-1 px-8 mb-2">
          <h5>{data.filesize}</h5>
          <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
            {data.close ? <IoClose size={13} color='#fff' /> : <LuDownload size={13} color='#fff' />}

          </span>
        </div>
        {data.tag.isOpen ? (
          <div className={`tag w-full py-3 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex justify-center`}>
            <h3 className='text-md font-semibold'>{data.tag.tagTitle}</h3>
          </div>
        ) : null
        }

      </div>

    </motion.div>
  )
}

export default Card
