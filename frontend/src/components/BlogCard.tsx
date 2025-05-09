import { Link } from "react-router-dom";
import Avatar from "./Avatar";



interface BlogCardProps {
    authorName:string;
    title:string;
    content:string;
    publishedDate:string;
    id:string;
}

const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate,
    id
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
    <div className="p-4 border-b border-gray-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
           <div className=" h-5 w-5 ">
           <Avatar size={5} name={authorName} />
           </div>
            <div className="font-extralight text-gray-700 pl-2">
            {authorName}
                </div> 
                <div className="flex justify-center flex-col pl-2">
                  <Circle />
                </div>
                <div className="pl-2 font-thin text-slate-500">
                {publishedDate}
                </div>
        </div>
        <div className="text-2xl font-bold pt-2 pb-4 ">
            {title}
        </div>
        <div className="text-md font-thin text-slate-600">
            {content.slice(0,100) + "..."}
        </div>
        <div className="text-slate-400 text-sm font-thin pt-5">
           {`${Math.ceil(content.length / 100)} minute(s) read`}
        </div>
        
       
    


    </div>
    </Link>
  )
}

export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-gray-500">

    </div>
}



export default BlogCard