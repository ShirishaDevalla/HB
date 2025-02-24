import axios from "axios";
import { basepath } from "./Url";
// import { ToastContainer, toast } from "react-toastify";
const headers = {
      Authorization: "Bearer " + sessionStorage?.getItem("token"), 
     "access-control-allow-origin": "*" ,
     "Content-Type": "application/json",
    //  "Cache-Control": "no-cache",
    //  "Expires": "0",
};

export const getSave = async(url, data)=>{
 try{
  const res = await axios.post(basepath + url, data, { headers } )
  return res?.data?.data || []
 }catch(error){
  console.error("Error fecthing data:", error);
  return [];

 }
   
};

export const getAllList = async (url, body) => {
  try {
    const res = await axios.post(basepath + url, body, { headers });
    return res?.data?.data || []; 
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; 
  }
};


export const Save = async (url, body) => {
  try {
    const res = await axios.post(basepath + url, body, { headers });
    return res?.data?.data || []; 
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; 
  }
};

export const getAllHospitalList = async (url, body) => {
  try {
    const res = await axios.post(basepath + url, body, { headers });
    return res?.data?.data || []
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
export const getSaveHospital = async (url, body) => {
  try {
    const res = await axios.post(basepath + url, body, { headers });
    return res?.data?.data || []
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};


// export const notify=(status, msg)=>{
//   if(status){
//     return toast.success(msg)
//   }
//   else{
//     return toast.error(msg)
//   }
// }

