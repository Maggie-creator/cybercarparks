import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"; // Import React Router
import Schoolpage from "./img/schoolpage.svg";

const Schools = () => {
  return (
    <div className="container mx-auto my-8 px-4 lg:px-10">
      <Helmet>
        <title>Cyber Carparks - Schools</title>
        <meta
          name="description"
          content="Cyber Carparks provides cutting-edge solutions for efficient parking management for schools."
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
      <h1 className="text-center text-indigo-800 font-bold text-4xl mb-10">
        Cyber Carparks: Revolutionising School Parking Management
      </h1>
      {/* Content Card */}
      <div className="flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden">
        {/* Image Section */}
        <figure className="w-1/2">
          <img
            src={Schoolpage}
            alt="School image"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </figure>
        {/* Text Content Section */}
        <div className="card-body w-1/2 p-8">
          <p className="text-gray-600 leading-relaxed mb-6 font-bold">
            Struggling with parking chaos, space shortages, or dissatisfied
            staff? <span className="text-indigo-600">Cyber Carparks</span> is
            here to transform school parking management. Our innovative platform
            makes it easier than ever to balance competing needs for parking,
            teaching, and play areas while ensuring fairness, control, and
            efficiency.
          </p>

          <h2 className="text-indigo-600 font-bold text-3xl mb-4">
            Smart Space Allocation for Schools
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Every school faces unique parking challenges—limited spaces, diverse
            user groups, and strict access controls.{" "}
            <span className="text-indigo-600 font-bold">Cyber Carparks</span>{" "}
            lets principals and administrators fairly allocate parking to
            permanent staff, casual teachers, contractors, and even senior
            students. Manage hourly, daily, or long-term parking needs with
            ease, ensuring everyone has the access they need without unnecessary
            stress.
          </p>

          <h2 className="text-indigo-600 font-bold text-3xl mb-4">
            Optimising School Assets
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Did you know unused parking spaces can become a valuable source of
            revenue? Many schools sit on underutilized parking areas that remain
            vacant after hours, on weekends, or during school holidays. With{" "}
            <span className="text-indigo-600 font-bold">Cyber Carparks</span>,
            schools can safely and conveniently rent out these spaces, turning
            wasted assets into funds for programs and facilities—without asking
            parents for more money.
          </p>

          <h2 className="text-indigo-600 font-bold text-3xl mb-4">
            Effortless Parking Management
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our easy-to-use platform integrates seamlessly with building access
            devices, providing a secure and reliable parking solution. With
            verified user IDs, license plates, and payment methods, you’ll
            always know who is on your premises. Plus, our entry-level system is
            cost-effective, quick to install, and can often pay for itself in no
            time.
          </p>

          <h2 className="text-indigo-600 font-bold text-3xl mb-4">
            Tailored for Your School
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Whether you need an internal system to streamline parking for staff
            or a revenue-generating solution for leasing spaces,{" "}
            <span className="text-indigo-600 font-bold">Cyber Carparks</span>{" "}
            has you covered. Our team will provide a free assessment to design a
            customized parking management plan for your school.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6 font-bold">
            Transform your school’s parking challenges into a seamless,
            stress-free experience with{" "}
            <span className="text-indigo-600 font-bold">Cyber Carparks</span>.
            Contact us today to get started!
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

export default Schools;
