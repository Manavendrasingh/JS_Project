import React from "react";

const Photo = ({obj}) => {
    const [id,url,link,links, username] = obj;

    console.log(id,url,link,links, username);
  return (
    <div className="card bg-base-100 w-96 h-[20rem] m-5">
      <figure>
        <img className="w-96 h-[20rem]"
          src={url}
          alt="loading....."
        />
      </figure>
      {/* <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div> */}
    </div>
  );
};
export default Photo;
