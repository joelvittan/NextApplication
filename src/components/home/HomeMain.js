"use-client";
import productData from "../../data/productData.js";
import "../../app/globals.css";
import { useEffect, useState } from "react";
import { noTokenGetRequest } from "../../../helper/index.js";
import Link from "next/link.js";
import Popup from "reactjs-popup";



const HomeMain = () => {
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [blogclick, setBlogClick] = useState(false);

  useEffect(() => {
    const fetchBlogsData = async () => {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL
        );
        const result = await response.json();
        console.log(result);
        if (Array.isArray(result)) {
          setBlogData(result);
        } else {
          console.error("Expected an array but got", response.data);
        }
      } catch (error) {
        setError(error);
        console.error("Failed to fetch Blog data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogsData();
  }, []);

  if (isLoading) {
    <span>Loading.......</span>;
  }


  const blogClick=()=>{
    setBlogClick(!blogclick)
  } 


  // if(blogclick){
  //   return(
  //       <BlogDetails/>
  //     )
  // }


  return (
    <>
      {
        blogclick?<BlogDetails data={blogData}/>:
        <div className="  font-mono">
        <ul className="p-3 min-h-screen  flex flex-wrap justify-center">
          {
            blogData.length===100?
            blogData.map((e, i) => (
              <Link href={`blogDetails/${i}`} className=" text-slate-700 max-w-56 bg-white m-2 p-4 rounded-md flex-row gap-4 shadow-lg transition-all duration-20 hover:scale-110 cursor-pointer hover:bg-gray-900 hover:text-white">
                
                <li 
                  className="flex-row align-bottom"
                >
                  <p2 >/{e.id}</p2>
                  <h2 className="text-2xl font-bold ">
                    {e.title}
                  </h2>
                  <p className="">{e.body}</p>
                </li>
              </Link>
            ))
            :
            <h1 className="self-center font-extrabold text-gray-950 text-5xl animate-ping">❤️Hold On</h1>
          }
        </ul>
      </div>
      }
    </>
  );
};

export default HomeMain;
