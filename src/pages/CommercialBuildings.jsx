//CommercialBuildings.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"; // Import React Router
import Carparkunder from "./img/carparkunder.jpg";

const CommercialBuildings = () => {
  return (
    <div className="container mx-auto my-8 px-4 lg:px-10">
      <Helmet>
        <title>Cyber Carparks - Commercial Buildings</title>
        <meta
          name="description"
          content="Cyber Carparks provides cutting-edge solutions for efficient parking management. Integrating advanced hardware and software, our systems streamline operations, enhance revenue, and ensure seamless experiences for operators and users.scription of my page"
        />
      </Helmet>
      {/* Navigation Header */}
      <h3 className="text-center text-2xl text-orange-600 pb-10">
        <Link
          to="/"
          className="flex items-center justify-center text-orange-600 hover:underline"
        >
          <i className="fas fa-arrow-left text-orange-600 mr-2"></i> Home
        </Link>
      </h3>

      {/* Page Title */}
      <h1 className="text-center text-indigo-800 font-bold text-4xl mb-12">
        Cyber Carparks: Revolutionising Commercial Building Parking Management
      </h1>

      <div className="card lg:card-side">
        <figure className="lg:w-1/2 w-full">
          <img
            src={Carparkunder}
            alt="Car park"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </figure>
        <div className="card-body w-1/2 p-8">
          <p className="text-gray-600 leading-relaxed mb-6 font-bold">
            Are you tired of dealing with parking chaos, misallocation of
            spaces, and frustrated tenants?{" "}
            <span className="text-indigo-600">Cyber Carparks</span> is here to
            transform the way you manage parking in commercial buildings. Our
            all-in-one solution streamlines the entire process, giving building
            owners and managers complete control over allocation, usage, and
            prioritisation of parking spaces.
          </p>
          <h2 className="text-indigo-600 font-bold text-3xl mb-4">
            Seamless Space Allocation
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Gone are the days of manual spreadsheets and confusing permits. With
            <b className="font-bold text-indigo-600"> Cyber Carparks</b>,
            building managers can allocate parking spaces to different tenants
            according to their needs. Tenants, in turn, can assign these spaces
            to individual employees through a simple, user-friendly interface.
            Choose between pool-based or dedicated space allocation strategies
            to optimise your building’s parking resources and ensure fair
            distribution.
          </p>
          <h2 className="text-indigo-600 font-bold text-3xl mb-4">
            Intelligent Booking System
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Many organisations grapple with more potential parkers than
            available spaces. By introducing our intuitive booking system,
            employees can reserve spaces only when they actually need them. This
            flexibility significantly reduces waste—no more empty, dedicated
            spots for absent employees. Instead, everyone benefits from a
            dynamic environment where spaces are consistently utilised.
          </p>
          <h2 className="text-indigo-600 font-bold text-3xl mb-4">
            Enhanced Utilisation & Prioritisation
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            <b className="font-bold text-indigo-600"> Cyber Carparks</b>{" "}
            provides real-time insights into space occupancy and user behavior,
            helping administrators set priority levels for critical personnel or
            departments. This ensures that high-priority individuals always have
            access to parking when they need it, while still allowing for
            maximum occupancy across the entire lot.ed.
          </p>
          <h2 className="text-indigo-600 font-bold text-3xl mb-4">
            User-Friendly Experience
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our platform is designed with simplicity in mind. From mobile apps
            to web-based portals, users can conveniently reserve, cancel, or
            modify bookings on the go. Meanwhile, property managers have access
            to robust data analytics, generating actionable reports to refine
            allocation strategies and meet evolving demands.
          </p>
          <h2 className="text-indigo-600 font-bold text-3xl mb-4">
            Empower Your Commercial Building
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Upgrade to{" "}
            <b className="font-bold text-indigo-600"> Cyber Carparks</b> and
            discover the benefits of a smart parking system that boosts
            efficiency, reduces administrative overhead, and enhances tenant
            satisfaction. Experience parking done right—because every space
            counts, and every employee matters.
          </p>
          <h2 className="text-indigo-600 font-bold text-3xl mb-4">
            Ready to Transform Your Parking?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 font-bold">
            Get in touch with us today to learn how{" "}
            <b className="font-bold text-indigo-600"> Cyber Carparks</b> can
            revolutionise your commercial building’s parking management. Let’s
            work together to create a seamless, efficient, and user-friendly
            parking experience tailored to your needs!
          </p>
          <Link
            to="/contact"
            className="btn btn-primary text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            CONTACT US FOR A FREE CONSULTATION
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommercialBuildings;
