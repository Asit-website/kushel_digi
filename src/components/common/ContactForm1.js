import React,{useState} from 'react'
import Arrow from '../../images/arrow.png';
const ContactForm1 = () => {
  const [value, setValue] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
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
          <div className="contactus">
              <div className="contactus-container__left">
                <div className="contactus-heading">
                  <h2>Let’s Discuss Your Project Today</h2>
                  <p>
                    Please fill in the form and let’s chat understand how we can
                    help you better
                  </p>
                </div>
                <div className="contactus-form mt-8">
                  <form onSubmit={handleSubmit}>
                    <div className="contactus-form__input">
                      <input name="name" onChange={handleChange} value={value.name} type="text" placeholder="Name*" />
                      <input name="email" onChange={handleChange} value={value.email} type="email" placeholder="Email Address*" />
                    </div>
                    <div className="contactus-form__input">
                      <input name="phone" onChange={handleChange} value={value.phone} type="text" placeholder="Phone number*" />
                      <select name="service" onChange={handleChange} value={value.service} >
                        <option>Service Required</option>
                        <option>Mobile App Development</option>
                        <option>E - Commerce Solutions</option>
                        <option>Graphic Design</option>
                        <option>Web development</option>
                        <option>UI/UX Design</option>
                        <option>Digital Marketing</option>
                        <option>Staff Augmntation</option>
                      </select>
                    </div>

                    <div className="contactus-form__input">
                      <textarea
                        name="message"
                        value={value.message}
                        onChange={handleChange}
                        cols="30"
                        rows="10"
                        placeholder="Message"
                      ></textarea>
                    </div>

                    <div className="contactus-form__input">
                      <button>
                        Submit{" "}
                        <img
                          width={14}
                          className=" inline ml-1"
                          src={Arrow}
                          alt=""
                        />
                      </button>
                    </div>
                  </form>
                </div>
              </div>

            </div>
     </>
  )
}

export default ContactForm1