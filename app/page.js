

export default function Home() {
  

return (
    <main >
     <div className="grid grid-cols-3 p-7 justify-around gap-x-8 items-center bg-slate-200">
      <h1 className="grid justify-center">Profile</h1>
        <input placeholder="search" className="bg-slate-300 grid rounded-3xl px-5"></input>
      <nav className="grid  grid-cols-4 justify-center mx-4 ">
      <a className="justify-center grid">home</a>
      <a className="justify-center grid">about </a>
      <a className="justify-center grid">contact </a>
      <a className="justify-center grid">more</a>
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

