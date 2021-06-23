import axios from "axios"
import React, { useState, useEffect } from "react"
import { VscUnfold } from "react-icons/vsc"
import Card from "./components/Card"
import SearchBar from "./components/SearchBar"
import FetchUrl from "./FetchUrl"
import FadeLoader from "react-spinners/FadeLoader"

function App() {
   const [data, setData] = useState([])
   const [page, setPage] = useState(1)
   const [querySearch, setQuerySearch] = useState("")
   const [isLoading, setIsLoading] = useState(false)

   // fetch some photos to display in the home page
   const fetchData = async () => {
      try {
         setIsLoading(true)
         const images = await axios.get(
            `${FetchUrl}/?key=${process.env.React_APP_Key}&q=${querySearch}&image_type=photo&page=${page}`
         )
         setData(images.data.hits)
         console.log(images.data.hits)
         setIsLoading(false)
      } catch (e) {
         console.log(e.response.data)
         setIsLoading(false)
         alert(
            "unexpected error has occured please check your internet connexion and try again in a moment"
         )
      }
   }

   //  function that fire when the user want to see more images
   const fetchMorePhotos = async () => {
      try {
         setIsLoading(true)
         setPage((prevPage) => prevPage + 1)
         const images = await axios.get(
            `${FetchUrl}/?key=${process.env.React_APP_Key}&q=${querySearch}&image_type=photo&page=${page}`
         )
         setData([...data, ...images.data.hits])
         setIsLoading(false)
      } catch (e) {
         console.log(e.response.data)
         setIsLoading(false)
         alert(
            "unexpected error has occured please check your internet connexion and try again in a moment"
         )
      }
   }

   useEffect(() => {
      fetchData()
   }, [page, querySearch])

   //  css for the spinner
   const spinnercss = {
      display: "block",
      margin: "0 auto",
   }
   return (
      <div className=" h-screen w-screen pt-32 ">
         <div className=" bg-purple-300 w-screen py-2 fixed top-0">
            <h1 className=" text-3xl text-indigo-800 flex flex-row  ">
               <VscUnfold size={50} />
               Fun gallery
            </h1>
            <SearchBar queryImage={(text) => setQuerySearch(text)} />
         </div>

         <div className=" flex flex-wrap align-middle  flex-col md:flex-row md:justify-evenly px-2 ">
            {data.map((image) => (
               <Card
                  title={image.user}
                  imageUrl={image.largeImageURL}
                  likes={image.likes}
                  key={image.id}
               />
            ))}
         </div>
         {data.length > 0 && (
            <div className="mx-auto w-28">
               <button
                  onClick={fetchMorePhotos}
                  className="mb-2 mt-2 bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ml-2 text-white px-3 py-1 rounded-full">
                  show more
               </button>
            </div>
         )}
         {isLoading && (
            <FadeLoader color="purple" loading={isLoading} css={spinnercss} />
         )}
         {!isLoading && data.length === 0 && (
            <p className="text-center"> no item found for your research </p>
         )}
      </div>
   )
}

export default App
