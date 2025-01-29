import React from "react";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navigation Header */}
      <h3 className="text-center text-2xl text-orange-600 py-6">
        <Link
          to="/"
          className="flex items-center justify-center text-orange-600 hover:underline"
        >
          <i className="fas fa-arrow-left text-orange-600 mr-2"></i> Home
        </Link>
      </h3>

      <div className="flex justify-center items-center flex-grow">
        <div className="card w-96 bg-white shadow-lg p-6 rounded-lg">
          <img
            src="/CyberCarparksLogo.png"
            alt="Logo"
            className="mx-auto mb-4 w-32 rounded-md" // Smaller and centered logo
          />
          <h2 className="text-2xl font-bold text-center mb-4">
            Request a Demo
          </h2>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label className="label text-left">
                <span className="label-text">First name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="input input-bordered input-warning w-full"
              />
            </div>

            <div className="flex flex-col">
              <label className="label text-left">
                <span className="label-text">Last name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="input input-bordered input-warning w-full"
              />
            </div>

            <div className="flex flex-col">
              <label className="label text-left">
                <span className="label-text">Company</span>
              </label>
              <input
                type="text"
                placeholder="Enter your company name"
                className="input input-bordered input-warning w-full"
              />
            </div>

            <div className="flex flex-col">
              <label className="label text-left">
                <span className="label-text">Suburb</span>
              </label>
              <input
                type="text"
                placeholder="Enter your suburb name"
                className="input input-bordered input-warning w-full"
              />
            </div>

            <div className="flex flex-col">
              <label className="label text-left">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered input-warning w-full"
              />
            </div>

            <div className="flex flex-col">
              <label className="label text-left">
                <span className="label-text">Phone number</span>
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="input input-bordered input-warning w-full"
                pattern="[0-9]*"
                inputMode="numeric"
                title="Phone number should contain only digits"
              />
            </div>

            <div className="flex flex-col">
              <label className="label text-left">
                <span className="label-text">Number of spaces</span>
              </label>
              <input
                type="text"
                placeholder="Enter number of spaces"
                className="input input-bordered input-warning w-full"
              />
            </div>

            <div className="flex justify-center mt-4">
              <button className="btn btn-primary w-full">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
