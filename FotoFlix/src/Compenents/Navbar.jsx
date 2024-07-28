import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-gray-100   text-black flex justify-between">
      <div className="ml-5">
        <a className="btn btn-ghost text-xl">FotoFlix</a>
      </div>
      <div className="flex-none gap-2">
            <div className="form-control flex flex-row  ">
                <input type="text" placeholder="Search" className="input input-bordered w-40 md:w-auto text-white"/>
                <button className="btn btn-active btn-neutral w-20 ml-2  text-white">Search</button>
            </div>
      </div>
      <div> <button className="btn btn-active btn-neutral mr-5 text-white">Fevourite</button></div>
     
    </div>
  );
};
export default Navbar;
