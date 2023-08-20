import React, { useState } from "react";
function App() {
  
document.addEventListener('mousemove',(event)=>{
  const id = document.querySelectorAll(".id")
  for(let i=0;i<id.length;i++){
    id[i].style.top =  event.clientY +"px"
    id[i].style.left =  event.clientX +"px"
  }
})
  return (
<div className="h-[100vh] w-screen overflow-hidden relative bg-gray-800">
<div  className={ `id bg-cover bg-no-repeat absolute flex flex-col duration-[1.5s] bg-[url("https://i.ibb.co/PG24tqK/1000-F-53656507-6a-Rlz7-Gvglp-FMAbtf1z-Ssll-Wlep-Jfe-Tb.jpg")] shadow-lg shadow-[#00000054]   h-[10rem] w-[7rem]`}> </div>
<div  className={ `id bg-cover bg-no-repeat absolute flex flex-col duration-[1.3s] bg-[url("https://i.ibb.co/PG24tqK/1000-F-53656507-6a-Rlz7-Gvglp-FMAbtf1z-Ssll-Wlep-Jfe-Tb.jpg")] shadow-lg shadow-[#00000054]   h-[10rem] w-[7rem]`}></div>
<div  className={ `id bg-cover bg-no-repeat absolute flex flex-col duration-[1s]   bg-[url("https://i.ibb.co/PG24tqK/1000-F-53656507-6a-Rlz7-Gvglp-FMAbtf1z-Ssll-Wlep-Jfe-Tb.jpg")] shadow-lg shadow-[#00000054]   h-[10rem] w-[7rem]`}>  </div>
<div  className={ `id bg-cover bg-no-repeat absolute flex flex-col duration-[0.8s] bg-[url("https://i.ibb.co/PG24tqK/1000-F-53656507-6a-Rlz7-Gvglp-FMAbtf1z-Ssll-Wlep-Jfe-Tb.jpg")] shadow-lg shadow-[#00000054]   h-[10rem] w-[7rem]`}></div>
<div  className={ `id bg-cover bg-no-repeat absolute flex flex-col duration-[0.6s] bg-[url("https://i.ibb.co/PG24tqK/1000-F-53656507-6a-Rlz7-Gvglp-FMAbtf1z-Ssll-Wlep-Jfe-Tb.jpg")] shadow-lg shadow-[#00000054]   h-[10rem] w-[7rem]`}> </div>
<div  className={ `id bg-cover bg-no-repeat absolute flex flex-col duration-[0.4s] bg-[url("https://i.ibb.co/PG24tqK/1000-F-53656507-6a-Rlz7-Gvglp-FMAbtf1z-Ssll-Wlep-Jfe-Tb.jpg")] shadow-lg shadow-[#00000054]   h-[10rem] w-[7rem]`}> </div>

</div>

  );
}

export default App;
