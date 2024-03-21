

export default function Home() {
  

return (
    <main className="">
     <div className="flex-cols p-6 gap-x-6 justify-between flex items-center bg-slate-200">
      <p className="flex ">Profile</p>
      <div>
        <input placeholder="search" className="bg-slate-300 rounded-3xl px-6"></input>
      </div>
      <nav className="flex gap-x-6 ">
      <a className="flex">nav-items</a>
      <a className="flex">nav-items</a>
      <a className="flex">nav-items</a>
      <a className="flex">nav-items</a>
      </nav>
      </div>

      <div className=" grid grid-cols-4 p-2 gap-2  bg-slate-300 h-72">
        
        <div className="flex rounded-2xl p-4  flex-nowrap justify-center bg-slate-800 items-center flex-col">
        <h1 className="p-2 font-bold text-3xl text-white ">Card</h1>
        <p className="p-2 font-normal text-slate-400 ">somthing somthing somthing somthing somthing somthing </p>
        <p className="p-2 font-normal text-slate-400 ">somthing somthing somthing somthing somthing somthing </p>
        </div>

        <div className="flex rounded-2xl p-4  flex-nowrap justify-center bg-slate-800 items-center flex-col">
        <h1 className="p-2 font-bold text-3xl text-white ">Card</h1>
        <p className="p-2 font-normal text-slate-400 ">somthing somthing somthing somthing somthing somthing </p>
        <p className="p-2 font-normal text-slate-400 ">somthing somthing somthing somthing somthing somthing </p>
        </div>

        <div className="flex rounded-2xl p-4  flex-nowrap justify-center bg-slate-800 items-center flex-col">
        <h1 className="p-2 font-bold text-3xl text-white ">Card</h1>
        <p className="p-2 font-normal text-slate-400 ">somthing somthing somthing somthing somthing somthing </p>
        <p className="p-2 font-normal text-slate-400 ">somthing somthing somthing somthing somthing somthing </p>
        </div>

        <div className="flex rounded-2xl p-4  flex-nowrap justify-center bg-slate-800 items-center flex-col">
        <h1 className="p-2 font-bold text-3xl text-white ">Card</h1>
        <p className="p-2 font-normal text-slate-400 ">somthing somthing somthing somthing somthing somthing </p>
        <p className="p-2 font-normal text-slate-400 ">somthing somthing somthing somthing somthing somthing </p>
        </div>

      </div>
    </main>
  )
}

