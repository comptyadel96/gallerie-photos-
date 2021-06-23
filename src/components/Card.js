import React from "react"

function Card({ title, imageUrl, likes }) {
   return (
      <div className=" ml-2  w-72 h-96 mt-5">
         <div className="md:flex-shrink-0">
            <img alt="art" src={imageUrl} className=" w-full object-cover" />
         </div>
         <div className=" flex flex-col  px-2">
            <div className="inline ">
               <span className="text-lg text-blue-300  mr-2 ">photo by</span>
               <h1 className=" text-2xl text-red-800">{title}</h1>
            </div>

            <p className=" text-lg font-semibold text-center text-purple-600 mt-4 ">
               likes: {likes}
            </p>
         </div>
      </div>
   )
}

export default Card
