"use client"
import React from 'react';

const page = () => {


    const handle = async (e)=>{
      e.preventDefault()
      
      const data = {
        name: e.target.email.value,
        password: e.target.password.value,
        address: e.target.address.value,
        mobile: e.target.mobile.value,
      }
       const resp = await fetch('http://localhost:3000/coments',{
        method: 'POST',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data),
      })
      .then(res=>res.json())
      .then(data=>console.log(data))
    }
     
    return (
        <div className='bg-cyan-800'>
           <form onSubmit={handle} action="">
            <input type="text" placeholder='email' className='form-control border-slate-800' name="email" id="" />
            <input type="text" placeholder='password' className='form-control' name="password" id="" />
            <input type="text" placeholder='password' className='form-control' name="address" id="" />
            <input type="text" placeholder='password' className='form-control' name="mobile" id="" />
            <button className='btn'>summit</button>
            
            
            </form> 
        </div>
    );
};

export default page;