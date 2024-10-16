"use client";

import { useEffect, useState } from "react";
const fetchedData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);
      const result = await response.json();
      console.log("result");
      setData(result);
    };

    fetchData();
  }, []);

  return data;
};

export default fetchedData;
