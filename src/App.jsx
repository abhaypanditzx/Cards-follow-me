import React, { useState } from "react";
function App() {
  document.addEventListener("mousemove", (event) => {
    const id = document.querySelectorAll(".id");
    for (let i = 0; i < id.length; i++) {
      id[i].style.top = event.clientY + "px";
      id[i].style.left = event.clientX + "px";
    }
  });
const sound ="https://audio-previews.elements.envatousercontent.com/files/204869/preview.mp3?response-content-disposition=attachment%3B+filename%3D%222LSU7D6-click.mp3%22"
  document.addEventListener("click", (event) => {
    const audio = new Audio(sound)
    audio.play();
    const btn = document.querySelector(".btn");
    btn.style.top = event.clientY + "px";
    btn.style.left = event.clientX + "px";
    btn.classList.add("gradient");
      btn.style.opacity = "1"
  
    setTimeout(()=>{
      btn.style.opacity = "0"
    },100)
  });

  return (
    <div className="h-[100vh] w-screen overflow-hidden relative bg-gray-800">
      <h1 className="p-2 flex space-x-2">
        <div className="relative  overflow-hidden w-fit  text-white   bg-gradient-to-bl from-red-600 p-1 rounded-lg  to-purple-800 shadow-sm px-2 text-center  ">
          {" "}
          instagram - @clown_abhay<div className="shine"></div>
        </div>
      </h1>
      <div
        className={`id bg-cover bg-no-repeat absolute flex flex-col duration-[1.5s] bg-[url("https://i.ibb.co/PG24tqK/1000-F-53656507-6a-Rlz7-Gvglp-FMAbtf1z-Ssll-Wlep-Jfe-Tb.jpg")] shadow-lg shadow-[#00000054]   h-[10rem] w-[7rem]`}
      >
        {" "}
      </div>
      <div
        className={`id bg-cover bg-no-repeat absolute flex flex-col duration-[1.3s] bg-[url("https://i.ibb.co/PG24tqK/1000-F-53656507-6a-Rlz7-Gvglp-FMAbtf1z-Ssll-Wlep-Jfe-Tb.jpg")] shadow-lg shadow-[#00000054]   h-[10rem] w-[7rem]`}
      ></div>
      <div
        className={`id bg-cover bg-no-repeat absolute flex flex-col duration-[1s]   bg-[url("https://i.ibb.co/PG24tqK/1000-F-53656507-6a-Rlz7-Gvglp-FMAbtf1z-Ssll-Wlep-Jfe-Tb.jpg")] shadow-lg shadow-[#00000054]   h-[10rem] w-[7rem]`}
      >
        {" "}
      </div>
      <div
        className={`id bg-cover bg-no-repeat absolute flex flex-col duration-[0.8s] bg-[url("https://i.ibb.co/PG24tqK/1000-F-53656507-6a-Rlz7-Gvglp-FMAbtf1z-Ssll-Wlep-Jfe-Tb.jpg")] shadow-lg shadow-[#00000054]   h-[10rem] w-[7rem]`}
      ></div>
      <div
        className={`id bg-cover bg-no-repeat absolute flex flex-col duration-[0.6s] bg-[url("https://i.ibb.co/PG24tqK/1000-F-53656507-6a-Rlz7-Gvglp-FMAbtf1z-Ssll-Wlep-Jfe-Tb.jpg")] shadow-lg shadow-[#00000054]   h-[10rem] w-[7rem]`}
      >
        {" "}
      </div>
      <div
        className={`id bg-cover bg-no-repeat absolute flex flex-col duration-[0.4s] bg-[url("https://i.ibb.co/PG24tqK/1000-F-53656507-6a-Rlz7-Gvglp-FMAbtf1z-Ssll-Wlep-Jfe-Tb.jpg")] shadow-lg shadow-[#00000054]   h-[10rem] w-[7rem]`}
      >
        {" "}
      </div>

      
      <button className="btn absolute rounded-full  h-[4rem] w-[4rem]" ></button>
    </div>
  );
}

export default App;
