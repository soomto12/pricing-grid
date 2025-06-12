export default function GridPricing(){
  return(
    <div>
      <div className="flex items-center justify-center min-h-screen bg-slate-800 ">
       <div className="flex flex-col my-3 space-y-6 md:flex-row md:space-x-6 md:space-y-0 md:my-0">
      <div className="bg-slate-700 rounded-xl text-white">
      <div className="p-8 mx-3 mt-8 rounded-t-xl bg-slate-800 ">
<div className=" text-center uppercase"> 
  basic
  <h2 className="mt-5 text-5xl text-center font-serif "> 100GB</h2>
  <div className="flex justify-center">

<a href="#" className="mt-2 inline-block  border border-violet-600 px-10 py-3 my-6 rounded-lg hover:bg-purple-900 hover:border-violet-800  duration-500 ">
purchase
</a>
  </div>
  <div className="border-t border-slate-700">
  </div>
  <div className="p-8 bg-slate-600 rounded-b-xl mb-3 mx-3"> </div>
</div>
      </div>
      </div>
       </div>
      </div>
    </div>
  )
}