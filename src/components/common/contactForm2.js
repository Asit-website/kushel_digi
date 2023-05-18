import React from "react";
const contactForm2 = () => {
  // const [value1, setValue1] = useState({
  //   name1: "",
  //   phone1: "",
  //   email1: "",
  //   message1: "",
  // });

  // const handleChange = (e) => {
  //   setValue1({ ...value1, [e.target.name]: e.target.value });
  // };

  // const handleSubmit1 = async (e) => {
  //   e.preventDefault();

  //   const res = await fetch("http://localhost:5000/contact1", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(value1),
  //   });
  //   const data = await res.json();
  //   alert(data.message);
  //   setValue1({
  //     name1: "",
  //     phone1: "",
  //     email1: "",
  //     message1: "",
  //   });
  // };
  return (
    <>
      {/* <div>
        <div className="flex items-start justify-center discusion-form discusion-form1">
          <div className="w-full  mrs mrs1">
            <h3>Let’s Discuss your Project</h3>
            <form  className="trants">
              <div className=" flex items-start common-form">
                <div className="first-form">
                  <div className="form-field">
                    <input name="name1" type="text" placeholder="Name*" />
                  </div>
                  <div className="form-field mt-5">
                    <input name="phone1"  type="text" placeholder="Phone number*" />
                  </div>
                  <div className="form-field mt-5">
                    <input name="email1" type="email" placeholder="Email Address*" />
                  </div>
                </div>
                <div className="second-form">
                  <div className="form-filed1">
                    <textarea
                      placeholder="Message"
                      name="message1"
                     
                      id=""
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
              <button>
                Request A Call{" "}
                <img
                  width={12}
                  className="inline ml-1"
                  src={arrow4}
                  alt="arrow4"
                />
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default contactForm2;
