import Avatar from "./Avatar"

const Appbar = () => {
  return (
    <div className="border-b border-gray-200 flex justify-between px-10 py-2">
        <div className="flex justify-center flex-col text-3xl font-black">
            Lexora
        </div>
        <div className="h-6 w-6">
            <Avatar size={10} name="Mohit" />
        </div>
    </div>
  )
}

export default Appbar