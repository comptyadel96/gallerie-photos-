import React from "react"

function Card({ title, imageUrl, likes }) {
   return (
      <div className=" ml-2  md:w-72 md:h-96 mt-5 md:bg-gray-100 md:hover:bg-purple-100 rounded-md shadow-lg ">
         <div className="md:flex-shrink-0">
            <img
               alt="art"
               src={imageUrl}
               className=" w-full object-cover rounded-md md:max-h-52"
            />
         </div>
         <div className=" flex flex-col   px-2">
            <div className="flex flex-row items-center ">
               <span className="text-md text-blue-300  mr-2 ">photo by</span>
               <h1 className=" text-2xl text-red-800">{title}</h1>
            </div>

            <p className=" text-lg font-semibold text-center justify-self-end text-purple-600 mt-4 ">
               likes: {likes}
            </p>
         </div>
      </div>
   )
}

export default Card
