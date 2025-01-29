// ResidentialBuildings.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet"; // Import React Router
import Residentialarea from "./img/residentialarea.jpg";

const ResidentialComplexes = () => {
  return (
    <div className="container mx-auto my-8 px-4 lg:px-10">
      <Helmet>
        <title>Cyber Carparks - Commercial Buildings</title>
        <meta
          name="description"
          content="Cyber Carparks provides cutting-edge solutions for efficient parking management for commecial buildings and areas."
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
        Cyber Carparks: Transforming Residential Complex Parking
      </h1>

      {/* Content Card */}
      <div className="flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden">
        {/* Image Section */}
        <figure className="lg:w-1/2 w-full">
          <img
            src={Residentialarea}
            alt="Residential area"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </figure>

        <div className="card-body w-1/2 p-8">
          <p className="text-gray-600 leading-relaxed mb-6 font-bold">
            Struggling with unused parking spaces, frustrated neighbors, and
            rigid allocation rules?{" "}
            <span className="text-indigo-600">Cyber Carparks</span> brings an
            innovative solution that helps high-density residential complexes
            make the most of their parking resources while fostering community
            connections.
          </p>

          <h2 className="text-indigo-600 font-bold text-3xl mb-4">
            The Parking Problem in Residential Complexes
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            High-density living offers efficiency and convenience, but parking
            often becomes a major challenge. Inflexible rules assign fixed
            parking spaces to units, regardless of residents' actual needs. Some
            residents don’t own a car but are required to purchase a parking
            space. Others, with multiple cars or drivers, are left searching for
            on-street parking, while vacant spaces sit unused. Vacancies also
            arise when residents travel for extended periods, leaving their
            parking spot empty with no easy way to share it with others in the
            building.
          </p>

          <h2 className="text-indigo-600 font-bold text-3xl mb-4">
            A Simple Solution: Flexible Space Sharing
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            <span className="text-indigo-600 font-bold">Cyber Carparks</span>{" "}
            empowers residents to share parking spaces seamlessly through a
            user-friendly online platform. Using an intuitive calendar, owners
            or tenants can list their space for specific days, weeks, or even
            long-term rental. Residents in need of a space can easily book it,
            pay through a secure gateway, and access the space using predefined
            arrangements, such as a key or swipe card. This system creates a
            convenient, community-focused marketplace right within the building.
          </p>

          <h2 className="text-indigo-600 font-bold text-3xl mb-4">
            Unlock Additional Benefits
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Sharing your parking space won’t just help your neighbors—it can
            provide a new income stream to offset rising living costs. Flexible
            sharing also enhances the value of your property at resale by making
            it more attractive to future buyers. Additionally,{" "}
            <span className="text-indigo-600 font-bold">Cyber Carparks</span>{" "}
            can contribute to your building’s sinking fund, offering a financial
            boost with every transaction. Beyond the financial benefits, sharing
            parking spaces fosters stronger relationships within the community,
            creating a more connected and harmonious living environment.
          </p>

          <h2 className="text-indigo-600 font-bold text-3xl mb-4">
            Designed for Strata Committees
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our platform is customizable to meet the specific needs of strata
            management committees. With flexible pricing plans and secure access
            controls,{" "}
            <span className="text-indigo-600 font-bold">Cyber Carparks</span>{" "}
            offers a tailored solution that’s easy to implement and manage.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6 font-bold">
            Don’t let parking be a source of stress in your residential complex.
            With{" "}
            <span className="text-indigo-600 font-bold">Cyber Carparks</span>,
            you can transform unused spaces into valuable assets while fostering
            a sense of community. Contact us today to learn more!
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

export default ResidentialComplexes;
