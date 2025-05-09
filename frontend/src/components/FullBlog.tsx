import type { Blog } from "../hooks"
import Appbar from "./Appbar"
import Avatar from "./Avatar"


const FullBlog = ({blog}: {blog: Blog}) => {
  return <div>
    <Appbar />
 <div className="flex justify-center ">
       <div className="grid grid-cols-12 px-12 w-full  max-w-screen-xl pt-12">
    <div className="col-span-8   ">
        <div className="text-4xl font-extrabold ">
            {blog.title}
        </div>
        <div className="text-slate-400 pt-2">
            Posted on 2nd December 2023
        </div>
        <div className="pt-4 text-gray-700">
            {blog.content}
        </div>

    </div>
    <div className="col-span-4 px-4 ">
      <div className="text-slate-700 text-lg">
          Author
      </div>
      <div className="flex ">
       <div className="h-5 w-5 mr-2 ">
         <Avatar size={5} name={blog.author.name || "Anonymous"} />
       </div>
        <div>
          
            <div className="text-xl font-bold">
         {blog.author.name || "Anonymous"}
      </div>
       <div className="pt-2 text-slate-500">
        Random Catch Phrase about the authors ability to grab the suers attention
       </div>
        
        </div>
      </div>
    </div>
    

  </div>
 </div>
  </div>
}

export default FullBlog