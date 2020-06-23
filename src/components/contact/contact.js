import React from 'react';
import Title from '../title';


export default function contact() {
    return (
        <section className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="Contact Us"/>
                    <form className="mt-5">
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
                        {/*insert email*/}
                        <div className="form-group">
                        e-mail: <input type="email" 
                                name="email" 
                                    placeholder="josemail789@gmail.com" 
                                        className="form-control"/>
                        </div>
                        {/*insert subject*/}
                        <div className="form-group">
                        Subject: <input type="text" 
                                name="subject" 
                                    placeholder="input your subject here..." 
                                        className="form-control"/>
                        </div>
                        {/*insert message*/}
                        <div className="form">
                        e-mail: <textarea name="message" 
                                    id=""
                                       row="15" 
                                            className="form-control">
                                                place
                                </textarea>
                        </div>
                    </form>
                </div>
            </div>
            
        </section>
    )
}
