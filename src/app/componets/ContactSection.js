import React from "react";

function ContactSection() {
  return (
    <div className="container marginNavTop">
      <div className="pageHeading mb-4">
        <h2>Contact Us</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <div className="row m-0 p-0 my-5 contactLeftDiv">
        <div className="col-lg-5 col-12 order-2 order-lg-1 m-0 my-auto  p-0">
          <div className="p-4 m-2 mt-5 border shadow-sm rounded">
            <div className="d-flex align-items-centr ">
              <div className="my-auto">
                <img src="https://cdn-icons-png.flaticon.com/128/927/927667.png" />
              </div>
              <div className="ms-3">
                <h5 className="mb-0">Address</h5>
                <p className="mb-0">A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
            <div className="d-flex align-items-centr my-4">
              <div className="my-auto">
                <img src="https://cdn-icons-png.flaticon.com/128/455/455604.png" />
              </div>
              <div className="ms-3">
                <h5 className="mb-0">Call Us</h5>
                <p className="mb-0">+1 5589 55488 55</p>
              </div>
            </div>
            <div className="d-flex align-items-centr ">
              <div className="my-auto">
                <img src="https://cdn-icons-png.flaticon.com/128/2549/2549872.png" />
              </div>
              <div className="ms-3">
                <h5 className="mb-0">Email Us</h5>
                <p className="mb-0">info@example.com</p>
              </div>
            </div>
            <div className="mt-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.2354758400895!2d88.40076123612282!3d22.587793268138633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276754e7c9489%3A0x66ada39be5c2da58!2sCA-191%2C%20CA%20Block%2C%20Sector%201%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal%20700136!5e0!3m2!1sen!2sin!4v1667212481498!5m2!1sen!2sin"
                width="100%"
                height={"280px"}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-12 m-0 p-0 order-1 order-lg-2" >
          <div className="p-lg-4 p-2 m-2" >
            <p className='text-secondary'><u>Get In Touch</u></p>
            <form className="row g-3 my-auto">
            <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">
                  Your Name
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                 Your Email
                </label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder=""
                />
              </div>
              
              <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
                  Message
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder=""
                  style={{height:"200px"}}
                />
              </div>
              
              <div className="col-12 justify-content-center d-flex">
                <button type="submit" className="btn btn-success w-50 borderRadius30" style={{background:"#C0202E", border:"none"}}>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
