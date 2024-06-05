import React from "react";
import Image from "next/image";

const ContactForm = () => {
  return (
    <section className="p-8 flex contact-us-section">
      <h2 className="text-2xl font-bold mb-4 section-title">
        Reach <span className="sub-title-section">Us</span>
      </h2>
      <div className="form-container">
        <div>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full p-2 border border-gray-300"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full p-2 border border-gray-300"
            />
            <input
              type="tel"
              placeholder="Number"
              required
              className="w-full p-2 border border-gray-300"
            />
            <span className="policy-terms">
              An OTP will be sent to this number for verification.
            </span>
            <input
              type="text"
              style={{ visibility: "hidden" }}
              className="w-full p-2 border border-gray-300"
            />
            <span className="policy-terms">
              By continuing, I have read Epicred’s <a href="#">terms</a> and{" "}
              <a href="#"> privacy policy</a>.
            </span>
            <button
              type="submit"
              className="w-full text-white p-2"
              id="contact-btn"
            >
              Submit
            </button>
          </form>
        </div>
        <div>
          <Image src="/contact.png" alt="Contact" width={400} height={300} />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
