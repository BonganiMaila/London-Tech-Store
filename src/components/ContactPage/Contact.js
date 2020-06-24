import React from "react";
import Title from "../Title";
export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="contact us" />
          <form
            className="mt-5"
            action="https://formspree.io/learncodetutorial@gmail.com"
            method="POST"
          >
            {/* first */}
           {/*insert names*/}
           <div className="form-group">
                        First Name: <input type="text" 
                                name="firstName" 
                                    placeholder="Bongani" 
                                        className="form-control"/>
                         Last Name: <input type="text" 
                                name="lastName" 
                                    placeholder="Maila" 
                                        className="form-control"/>
                        </div>
            {/* email */}
            <div className="form-group">
                        e-mail: <input type="email" 
                                name="email" 
                                    placeholder="josemail789@gmail.com" 
                                        className="form-control"/>
                        </div>
            {/* message */}
            <div className="form">
              Message: <textarea
                name="message"
                className="form-control"
                rows="10"
                placeholder="Type your message here...."
              />
            </div>
            {/* submit */}
            <div className="form-group mt-3">
              <input
                type="submit"
                value="Send"
                className="form-control bg-primary text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
