import React from "react";
import { useState,useEffect } from "react";
import Photo from "./Photo";

const Home = ()=>{

    const [loading, setLoading] = useState(false);
    const [photoData, setPhotoData] = useState([]);

    useEffect(()=>{

        const fetchData = async()=>{
            setLoading(true);
            try{
                let data = await fetch('https://api.unsplash.com/photos/?client_id=pG1uCsOzW_jCG-y7cQh5V2QzW9Fjm4iWyXi3afa-6sQ');
                let photos = await data.json()
                setPhotoData(photos);
                setLoading(false);
            }
            catch(error){
                setLoading(false);
                console.log(error);
            }
            
        }
        fetchData();
    },[])  
    if(loading)
        {
            return(<p className="text-white">Loading......</p>)
        }
    
    return(
        <div className="w-100vw flex justify-center flex-wrap bg-white p-5">
           { photoData.map((photo)=>(
              <Photo obj = {[photo.id , photo.urls.regular , photo.links.download , photo.likes,photo.user.username]} key = {photo.id}></Photo>
              //<Photo></Photo>
              //console.log([photo.id , photo.urls.regular , photo.links.download , photo.likes,photo.user.username])
            ))}
        </div>
    )
}

export default Home;