import React,{useState} from 'react'
import arrow1 from '../../images/arrow1.png';
import arrow4 from "../../images/arrow4.png";
import { NavLink } from 'react-router-dom';
const ContactForm = () => {
   const [user, setUser] = useState({
      name2: "",
      phone2: "",
      email2: "",
      message2: "",
    });
  
    const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const res = await fetch("http://localhost:5000/contact2", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      alert(data.message);
      setUser({
         name2: "",
         phone2: "",
         email2: "",
         message2: "",
      });
    };

   return (
      <>
         {/* <div className='flex items-start justify-center discusion-form'>
            <div className="w-full mr-10 mrs">
               <h3>Let’s Discuss your Project</h3>
               <form >
                  <div className=" flex items-start common-form">
                     <div className="first-form">
                        <div className="form-field">
                           <input type="text" placeholder="Name*"  />
                        </div>
                        <div className="form-field mt-5">
                           <input type="text" placeholder="Phone number*"  />
                        </div>
                        <div className="form-field mt-5">
                           <input type="email" placeholder="Email Address*"  />
                        </div>
                        <div>
                           <button >Submit <img className="tih" src={arrow1} alt="" /></button>
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
         </div> */}

         <div>
        <div className="flex items-start justify-center discusion-form discusion-form1">
          <div className="w-full  mrs mrs1">
            <h3>Let’s Discuss your Project</h3>
            <form onSubmit={handleSubmit} className="trants">
              <div className=" flex items-start common-form">
                <div className="first-form">
                  <div className="form-field">
                    <input name="name2" value={user.name2} onChange={handleChange} type="text" placeholder="Name*" />
                  </div>
                  <div className="form-field mt-5">
                    <input name="phone2" value={user.phone2} onChange={handleChange}  type="text" placeholder="Phone number*" />
                  </div>
                  <div className="form-field mt-5">
                    <input name="email2" value={user.email2} onChange={handleChange} type="email" placeholder="Email Address*" />
                  </div>
                </div>
                <div className="second-form">
                  <div className="form-filed1">
                    <textarea
                      placeholder="Message"
                      name="message2"
                      value={user.message2}
                      onChange={handleChange}
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div>
                <button>
                  Submit <img className="tih" src={arrow1} alt="" />
                </button>
              </div>
            </form>
          </div>
          <div className="w-full   loofs loofs1">
            <div className=" loofs-sect1">
              <h2>Would you like to talk to our experts about your project?</h2>
              <p>
                {" "}
                You can send us the details of your project, and a member of our
                team will contact you shortly.
              </p>
             <NavLink to="/contact"><button>
                Request A Call{" "}
                <img
                  width={12}
                  className="inline ml-1"
                  src={arrow4}
                  alt="arrow4"
                />
              </button></NavLink>
            </div>
          </div>
        </div>
      </div>
      </>
   )
}

export default ContactForm