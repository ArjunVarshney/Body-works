import axios from "axios";
import { useEffect, useState } from "react";

export const useRequest = (url: string) => {
   const [data, setData] = useState<any>({});

   const fetchData = async () => {
      try {
         const data = (await axios.get(url)).data;
         setData(data);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      fetchData();
   }, []);

   return data;
};
