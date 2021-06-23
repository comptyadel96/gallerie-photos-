import React, { useState } from "react"

function SearchBar({ queryImage }) {
   const [searchedItem, setSearchedItem] = useState("")
   const handleSubmit = (event) => {
      event.preventDefault()
      queryImage(searchedItem)
   }
   return (
      <form
         className="mx-auto border-1 w-80 flex flex-row"
         onSubmit={handleSubmit}>
         <input
            placeholder="search what you love ...💜"
            className="border px-1 w-full  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            onChange={(e) => setSearchedItem(e.target.value)}
         />
         <button
            type="submit" 
            className=" bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ml-2 text-white px-2 py-1 rounded-full">
            search
         </button>
      </form>
   )
}

export default SearchBar
