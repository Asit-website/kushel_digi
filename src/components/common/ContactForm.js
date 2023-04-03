import React from 'react'
import arrow1 from '../../images/arrow1.png';
const ContactForm = () => {
  return (
     <>
     <div className='flex items-start justify-center discusion-form'>
           <div className="w-full mr-10 mrs">
            <h3>Let’s Discuss your Project</h3>
            <form action="">
                <div className=" flex items-start common-form">
                     <div className="first-form">  
                         <div className="form-field">
                            <input type="text" placeholder="Name*" />
                         </div>
                         <div className="form-field mt-5">
                            <input type="text" placeholder="Phone number*" />
                         </div>
                         <div className="form-field mt-5">
                            <input type="email" placeholder="Email Address*" />
                         </div>
                         <div>
                  <button>Submit <img className="tih" src={arrow1} alt="" /></button>
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