import React, { useState } from 'react'

const Useformvalidation = (metadata) => {
    const[data, setData]=useState({})
  
    const handleOnChange = (key) => (event) => {
        setData({
            ...data,
            [key]: event.target.value,
        });
        // console.log(key, event, "handleOnChange");
    };
    
   
   
    const handlesubmit = async (e) => {
        e.preventDefault();  
        if (metadata?.submit) {
          metadata.submit();  
        }
    };
    
    // console?.log(metadata);
    
    
  return (
   {
    
    data,
    setData,
    handleOnChange,
    handlesubmit
   }
  )
}

export default Useformvalidation