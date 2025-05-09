import Appbar from "./Appbar"


const FullBlogSkeleton = () => {
  return (
    <div>
        <Appbar />
        <div className="flex justify-center  ">
       <div className="grid grid-cols-12 px-12 w-full  max-w-screen-xl pt-12">
    <div className="col-span-8   ">
        <div className="text-4xl font-extrabold ">
                <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
                <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>

        </div>
        <div className="text-slate-400 pt-2">
               <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>

        </div>
        <div className="pt-4 text-gray-700">
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>

                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>

                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>

                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>

                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>


        </div>

    </div>
    <div className="col-span-4 px-4 ">
      <div className="text-slate-700 text-lg">
            <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>

      </div>
      <div className="flex ">
       <div className="h-5 w-5 mr-2 ">
       <div className="h-5 w-5 bg-gray-200 rounded-full   mb-4"></div>
       </div>
        <div>
          
            <div className="text-xl font-bold">
             <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>

      </div>
       <div className="pt-2 text-slate-500">
    <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div>
       </div>
        
        </div>
      </div>
    </div>
    

  </div>
 </div>
    </div>
  )
}

export default FullBlogSkeleton