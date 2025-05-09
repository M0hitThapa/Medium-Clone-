import { Link } from "react-router-dom"
import Avatar from "./Avatar"

const Appbar = () => {
  return (
    <div className="border-b border-gray-200 flex justify-between px-10 py-2">
       <Link to={"/blogs"}>
        <div className="flex justify-center flex-col text-3xl font-black cursor-pointer">
            Lexora
        </div>
       </Link>
      <div className="flex  ">
         

<Link to={'/publish'}>

<button type="button" className="text-white bg-green-500 border border-gray-300 focus:outline-none hover:bg-green-600 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-1.5 mt-1 mb-2 mr-4 cursor-pointer  ">New</button>
</Link>
     
        <div className="h-10 w-10">
            <Avatar size={10} name="Mohit" />
        </div>
      </div>
    </div>
  )
}

export default Appbar