import React from 'react'
import { useState } from 'react';
import arrow1 from '../../images/arrow1.png';
const ContactForm = () => {
   const [value, setValue] = useState({
      name: '',
      phone: '',
      email: '',
   });

   const handleChange=(e)=>{
      setValue({...value, [e.target.name]: e.target.value});
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      const res = await fetch('http://localhost:5000/contact', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(value)
      });
      const data=await res.json();
      // console.log(data);
      alert(data.message);
   };

   return (
      <>
         <div className='flex items-start justify-center discusion-form'>
            <div className="w-full mr-10 mrs">
               <h3>Let’s Discuss your Project</h3>
               <form onSubmit={handleSubmit}>
                  <div className=" flex items-start common-form">
                     <div className="first-form">
                        <div className="form-field">
                           <input type="text" placeholder="Name*" name="name" onChange={handleChange} value={value.name} />
                        </div>
                        <div className="form-field mt-5">
                           <input type="text" placeholder="Phone number*" name="phone" onChange={handleChange} value={value.phone} />
                        </div>
                        <div className="form-field mt-5">
                           <input type="email" placeholder="Email Address*" name="email" onChange={handleChange} value={value.email} />
                        </div>
                        <div>
                           <button type={handleSubmit}>Submit <img className="tih" src={arrow1} alt="" /></button>
                        </div>
                     </div>
                     <div className="second-form">
                        <div className="form-filed1">
                           <textarea placeholder="Message" name="" id="" cols="30" rows="10"></textarea>
                        </div>
                     </div>
                  </div>

               </form>
            </div>
            <div className='w-full mt-16 ml-10 looking'>
               <h3>How can we help?</h3>
               <p>Are you looking for a reliable mobile application development company? Contact our expert team — we will help your business build a successful mobile strategy and create convenient omnichannel experience for all your customers and clients.</p>
               <button>Let’s Talk <img className="tih" src={arrow1} alt="" /></button>
            </div>
         </div>
      </>
   )
}

export default ContactForm