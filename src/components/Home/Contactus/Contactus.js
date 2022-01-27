import React from "react";
import "./Contactus.css";
const Contactus = () => {
  return (
    <div>
      <div className="image-contactus-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="lg-text">Contact US</h1>
              <p className="image-aboutus-para">ISTIAK Travels & Blogs</p>
            </div>
          </div>
        </div>
      </div>
      <section class="contact-page-sec">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="contact-info">
                <div class="contact-info-item">
                  <div class="contact-info-icon">
                    <i class="fas fa-map-marked"></i>
                  </div>
                  <div class="contact-info-text">
                    <h2>address</h2>
                    <span>CHITTAGONG</span>
                    <span>Bangladesh</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact-info">
                <div class="contact-info-item">
                  <div class="contact-info-icon">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="contact-info-text">
                    <h2>E-mail</h2>
                    <span>istiak@travel.com</span>
                    <span>istiakahmed104127@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact-info">
                <div class="contact-info-item">
                  <div class="contact-info-icon">
                    <i class="fas fa-clock"></i>
                  </div>
                  <div class="contact-info-text">
                    <h2>Contact Time</h2>
                    <span>Mon - Thu 9:00 am - 9.00 pm</span>
                    <span>Thu - Mon 10.00 pm - 8.00 pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <h1 className="mt-3 fw-bold">
                NICE PROJECT? GET IN TOUCH! <br /> WILL CONTACT YOU SOON
              </h1>
              <div class="contact-page-form" method="post">
                <h2 className="text-start">Get in Touch</h2>
                <p className="text-start">
                  {" "}
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <form action="contact-mail.php" method="post">
                  <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-12">
                      <div class="single-input-field">
                        <input
                          type="text"
                          placeholder="Your Name"
                          name="name"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                      <div class="single-input-field">
                        <input
                          type="email"
                          placeholder="E-mail"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                      <div class="single-input-field">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          name="phone"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                      <div class="single-input-field">
                        <input
                          type="text"
                          placeholder="Subject"
                          name="subject"
                        />
                      </div>
                    </div>
                    <div class="col-md-12 message-input">
                      <div class="single-input-field">
                        <textarea
                          placeholder="Write Your Message"
                          name="message"
                        ></textarea>
                      </div>
                    </div>
                    <div class="single-input-fieldsbtn">
                      <input type="submit" value="Send Now" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactus;
