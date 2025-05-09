import { Circle } from "./BlogCard"


const BlogSkeleton = () => {
  return (
    
<div role="status" className=" animate-pulse">
    <div className="p-4 border-b border-gray-200 pb-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
               <div className=" h-5 w-5 ">
               <div className="h-5 w-5 bg-gray-200 rounded-full   mb-4"></div>
               </div>
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                    <div className="flex justify-center flex-col pl-2">
                      <Circle />
                    </div>
                    <div className="pl-2 font-thin text-slate-500">
                    <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                    </div>
            </div>
            <div className="text-2xl font-bold pt-2 pb-4 ">
               <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
            </div>
            <div className="text-md font-thin text-slate-600">
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
            </div>
            <div className="text-slate-400 text-sm font-thin pt-5">
              <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
            </div>
            
           
        
    
    
        </div>
    
</div>


  )
}

export default BlogSkeleton

