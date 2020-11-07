import React from "react";
import "./style.css";

function ContactMe() {

    return (
        <div>
            <div className="row py-3 py-md-4 bg-gray">
                <div className="col">
                    <h3 className="text-white text-center mb-0">CONTACT</h3>
                </div>
            </div>
            <div className="row bg-gray">
                <div className="col-md-1"></div>
                {/* <!-- Message and Icons Column --> */}
                <div className="col-sm-12 col-md-5">
                    <div className="row px-3">
                        <p className="text-white">Send me a message by filling out the form, or contact me by email
                        or phone using the info below. I usually respond within 24 hours.</p>
                    </div>
                    <div className="row py-5">
                        <div className="col-3 text-center">
                            <i className="fas fa-mobile-alt fa-3x text-white orange"></i>
                        </div>
                        <div className="col-9 pt-1">
                            <p className="text-white pt-2 pl-3 mb-0">(603)-703-4749</p>
                        </div>
                    </div>
                    <div className="row pb-5">
                        <div className="col-3 text-center">
                            <i className="fas fa-envelope fa-3x text-white orange"></i>
                        </div>
                        <div className="col-9 pt-2">
                            <a href="mailto:chasej@live.com" target="_blank" rel="noreferrer" className="text-white pl-3">chasej@live.com</a>
                        </div>
                    </div>
                    <div className="row pb-5">
                        <div className="col-3 text-center">
                            <i className="fas fa-map-marker-alt fa-3x text-white orange"></i>
                        </div>
                        <div className="col-9 pt-1">
                            <p className="text-white pt-2 pl-3">Brookline, NH</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Form Column --> */}
                <form className="col-sm-12 col-md-5">
                    <div className="input-group mb-3 w-75">
                        <div className="input-group-prepend">
                            <i className="input-group-text far fa-user"></i>
                        </div>
                        {/* <!-- Cited:  https://stackoverflow.com/questions/24391078/how-to-change-the-default-message-of-the-required-field-in-the-popover-of-form-c --> */}
                        <input type="text" className="form-control rounded-right name"
                            // oninvalid="this.setCustomValidity('Please enter valid name')" oninput="setCustomValidity('')"
                            placeholder="Your Name"
                            // onkeypress="return event.charCode >= 65 && event.charCode <= 90 || event.charCode >= 97 && event.charCode <= 122 || event.charCode == 32"
                            required 
                            />
                    </div>
                    <div className="input-group mb-3 w-75">
                        <div className="input-group-prepend">
                            <i className="input-group-text fas fa-phone-alt"></i>
                        </div>
                        <input type="text" className="form-control rounded-right phone"
                            // oninvalid="this.setCustomValidity('Please enter valid phone number')"
                            // oninput="setCustomValidity('')" 
                            placeholder="Your Phone Number"
                            // onkeypress="return event.charCode >= 48 && event.charCode <= 57 || event.charCode == 45 || event.charCode == 40 || event.charCode == 41"
                            required 
                            />
                        <div className="invalid-feedback">Phone number must be 10 digits including dashes. EX: 123-456-7890
                    </div>
                    </div>
                    <div className="input-group mb-3 w-75">
                        <div className="input-group-prepend">
                            <i className="input-group-text fas fa-envelope"></i>
                        </div>
                        <input type="email" className="form-control rounded-right email"
                            // oninvalid="this.setCustomValidity('Please enter valid email address')"
                            // oninput="setCustomValidity('')" 
                            placeholder="Your Email" required 
                            />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <i className="input-group-text fas fa-pencil-alt"></i>
                        </div>
                        <textarea className="form-control rounded-right message"
                            // oninvalid="this.setCustomValidity('Please enter valid message')" oninput="setCustomValidity('')"
                            rows="10" placeholder="Your Message" required
                            ></textarea>
                    </div>
                    <button type="submit" className="btn bg-blue text-white mb-3" id="submitButton">Submit</button>
                </form>
                <div className="col-md-1"></div>
            </div>
        </div>
    );
}

export default ContactMe;