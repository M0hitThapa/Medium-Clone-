import Appbar from "../components/Appbar"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useState, type ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"
export const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  return (
    <div>
      <Appbar />
      <div className="flex justify-center pt-8">
      <div className="max-w-screen-lg w-full">
      

<input onChange={(e) => {
  setTitle(e.target.value)
}} type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5  " placeholder="Title" />
<TextEditor onChange={(e) => {
  setDescription(e.target.value)
}} />
<button
  onClick={async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
        title,
        content: description,
      }, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      });
      navigate(`/blog/${response.data.id}`);
    } finally {
      setIsLoading(false);
    }
  }}
  type="submit"
  className="inline-flex items-center px-5 py-2.5 mt-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
>
  Publish post
  {isLoading && (
    <svg
      className="ml-2 w-4 h-4 animate-spin text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8H4z"
      ></path>
    </svg>
  )}
</button>

    </div>
    
    </div>
    
    </div>
  )
}

function TextEditor({onChange}: {onChange: (e:ChangeEvent<HTMLTextAreaElement>) => void}) {
  return (
<form>
   <div className="w-full mb-4  ">
       <div className="flex items-center justify-between  mt-5 border border-gray-200 rounded-xl p-2  ">
       
       <div className="  bg-white rounded-b-lg w-full ">
           <label  className="sr-only">Publish post</label>
           <textarea onChange={onChange} id="editor" rows={8} className="block w-full px-0 text-sm text-gray-800 bg-white focus:outline-none focus:border-none   " placeholder="Write an article..." required ></textarea>
       </div>
   </div>
   
   </div>
</form>
  )
}

