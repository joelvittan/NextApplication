"use client";
import { useEffect, useState } from "react";
import { noTokenGetRequest } from "../../../../helper";
import Header from "@/components/Header/Header";

// import { useEffect, useState } from "react";
// import { noTokenGetRequest } from "../../../../helper";

// const blogDetails = (params) => {
//     // const router = useRouter();
//     // const { id } = router.query;
//     console.log(params);

//   useEffect(() => {
//     const [blogData, setBlogData] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [blogclick, setBlogClick] = useState(false);
//     const fetchBlogsData = async () => {
//       try {
//         const response = await noTokenGetRequest(
//           `${process.env.NEXT_PUBLIC_API_URL}/${params.id}`
//         );
//         const result = await response.json();
//         console.log(result);
//         if (Array.isArray(result)) {
//           setBlogData(result);
//         } else {
//           console.error("Expected an array but got", response.data);
//         }
//       } catch (error) {
//         setError(error);
//         console.error("Failed to fetch Blog data", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchBlogsData();
//   }, []);

// //   if (isLoading) {
// //     <span>Loading.......</span>;
// //   }

//   return (
//     <div className=" bg-green-200 h-screen flex align-bottom justify-center w-auto ">
//       <h1 className="text-black">sefsef</h1>
//       {/* <li className="flex-row align-bottom">
//         /<p2 className="">{e.id}</p2>
//         <h2 className="text-2xl font-bold ">{e.title}</h2>
//         <p className="">{e.body}</p>
//       </li> */}
//     </div>
//   );
// };

// export default blogDetails;

// // const blogid=({params})=>{
// //     console.log(params);
// //     return(
// //         <h1>Blog details</h1>
// //     )
// // }

// // export default blogid

const blodDetails = ({ params }) => {
  const [blogData, setBlogData] = useState([]);

  const idb = Number(params.id);
  console.log(idb);

  // useEffect(()=>{
  //   fetchBlogsDetail(params.id)
  //   },[])

  useEffect(() => {
    const fetchData = async () => {
      const response = await noTokenGetRequest(
        `${process.env.NEXT_PUBLIC_API_URL}/${idb + 1}`
      );
      const result = await response.json();
      setBlogData(result);
    };

    fetchData();
  }, []);
  console.log(blogData);
  console.log(blogData.length)

  return (
    <>
      <Header />
      <div className="p-auto  size-min bg-emerald-300  w-screen h-auto">
        <div className="  h-screen w-auto flex justify-center items-center">
          <div className=" text-slate-700 w-3/5  bg-white m-2 p-4 rounded-md shadow-2xl transition-all duration-20 font-mono hover:scale-150 hover:border-r-slate-700">
            <div >
              {blogData.id? 
                <div className=" flex-row ">
                  <p1 className=" text-red-800">/{blogData.id}</p1>
                  <h2 className="text-3xl font-bold text-slate-600 select-all hover:bg-transparent">{blogData.title}</h2>
                  <p className="text-emerald-950">{blogData.body}</p>
                </div>
              : 
                <h1>Loading...</h1>
                
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default blodDetails;
